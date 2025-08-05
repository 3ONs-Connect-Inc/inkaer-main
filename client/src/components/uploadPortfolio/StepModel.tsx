import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { OrbitControls as DreiOrbitControls } from 'three-stdlib'
import { LoadStep } from '@/lib/stepLoader'

type Props = {
  file: string
  onLoad?: (model: THREE.Object3D) => void
}

export default function StepModel({ file, onLoad }: Props) {
  const [model, setModel] = useState<THREE.Object3D | null>(null)
  const groupRef = useRef<THREE.Group>(null)
  const { camera, scene, controls } = useThree()

  useEffect(() => {
    let disposed = false
    let currentObject: THREE.Object3D | null = null
    const isDataUrl = file.startsWith('data:')
    let srcUrl = file

    if (isDataUrl) {
      const [base64] = file.split(',')
      const binary = atob(base64)
      const byteArray = new Uint8Array(binary.length)
      for (let i = 0; i < binary.length; i++) {
        byteArray[i] = binary.charCodeAt(i)
      }
      const blob = new Blob([byteArray], { type: 'application/step' })
      srcUrl = URL.createObjectURL(blob)
    }

    const load = async () => {
      const object = await LoadStep(srcUrl)
      if (disposed) return
      currentObject = object

      const box = new THREE.Box3().setFromObject(object)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      object.position.sub(center)

      const maxDim = Math.max(size.x, size.y, size.z)
      const distance = maxDim * 1.5
      camera.position.set(distance, distance, distance)
      camera.lookAt(0, 0, 0)
      camera.near = 0.1
      camera.far = distance * 10
      camera.updateProjectionMatrix()

      if (controls && (controls as DreiOrbitControls).target) {
        const orbit = controls as DreiOrbitControls
        orbit.target.set(0, 0, 0)
        orbit.update()
      }

      setModel(object)
      onLoad?.(object)

      if (isDataUrl) setTimeout(() => URL.revokeObjectURL(srcUrl), 10000)
    }

    load()

    return () => {
      disposed = true
      if (currentObject) {
        scene.remove(currentObject)
        currentObject.traverse((child) => {
          if ((child as THREE.Mesh).geometry) {
            (child as THREE.Mesh).geometry.dispose()
          }
          if ((child as THREE.Mesh).material) {
            const material = (child as THREE.Mesh).material
            if (Array.isArray(material)) {
              material.forEach((m) => m.dispose())
            } else {
              material.dispose()
            }
          }
        })
      }
    }
  }, [file, camera, controls, onLoad, scene])

  if (!model) return null
  return <group ref={groupRef}><primitive object={model} /></group>
}
