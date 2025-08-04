import * as THREE from 'three'

const initOCCT = (await import('occt-import-js')).default as (
  opts?: any
) => Promise<any>

export async function LoadStep(fileUrl: string): Promise<THREE.Object3D> {
   const res = await fetch(fileUrl)
  const buffer = await res.arrayBuffer()
  const fileBuffer = new Uint8Array(buffer)

  const occt = await initOCCT({
    locateFile: () => '/occt-import-js.wasm', // adjust path if needed
  })

  const result = occt.ReadStepFile(fileBuffer, null)

  if (!result.success || !result.meshes?.length) {
    throw new Error('Failed to load STEP file')
  }

  const group = new THREE.Object3D()

  for (const mesh of result.meshes) {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(mesh.attributes.position.array, 3))
    if (mesh.attributes.normal) {
      geometry.setAttribute('normal', new THREE.Float32BufferAttribute(mesh.attributes.normal.array, 3))
    }
    const index = Uint16Array.from(mesh.index.array)
    geometry.setIndex(new THREE.BufferAttribute(index, 1))

    const color = mesh.color
      ? new THREE.Color(...mesh.color)
      : new THREE.Color(0xffffff)

    const material = new THREE.MeshStandardMaterial({
      color,
      metalness: 0.5,
      roughness: 0.5,
      side: THREE.DoubleSide,
    })
   
    group.add(new THREE.Mesh(geometry, material))
  }

  // Center and scale model
  const box = new THREE.Box3().setFromObject(group)
  const center = new THREE.Vector3()
  box.getCenter(center)
  group.position.sub(center) // Center the model

  const size = box.getSize(new THREE.Vector3()).length()
  const scale = 2 / size // Adjust scale factor to fit into view
  group.scale.setScalar(scale)

  return group
}
