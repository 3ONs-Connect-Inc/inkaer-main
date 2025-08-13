import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { OrbitControls as DreiOrbitControls } from "three-stdlib";
import { LoadStep } from "@/lib/stepLoader";

type Props = {
  file: string;
  onLoad?: (model: THREE.Object3D) => void;      // Full model loaded
  onFirstChunk?: () => void;                     // First geometry arrived
};

export default function StepModel({ file, onLoad, onFirstChunk }: Props) {
  const [model, setModel] = useState<THREE.Object3D | null>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { camera, scene, controls, gl } = useThree();

  useEffect(() => {
    let disposed = false;
    let currentObject: THREE.Object3D | null = null;
    let firstChunkTriggered = false;

    const load = async () => {
      const object = await LoadStep(
        file,
        (partial, isFirst) => {
          if (disposed) return;
          setModel(partial);
          if (isFirst && !firstChunkTriggered) {
            firstChunkTriggered = true;
            onFirstChunk?.();
          }
        }
      );

      if (disposed) return;
      currentObject = object;

      // Fit camera to model
      const box = new THREE.Box3().setFromObject(object);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      object.position.sub(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      const distance = maxDim * 1.5 || 3; // fallback distance
      camera.position.set(distance, distance, distance);
      camera.lookAt(0, 0, 0);
      camera.near = 0.1;
      camera.far = Math.max(1000, distance * 10);
      camera.updateProjectionMatrix();

      if ((controls as DreiOrbitControls)?.target) {
        const orbit = controls as DreiOrbitControls;
        orbit.target.set(0, 0, 0);
        orbit.update();
      }

      setModel(object);
      onLoad?.(object);
    };

    load();

    return () => {
      disposed = true;
      if (currentObject) {
        scene.remove(currentObject);
        currentObject.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            const mat = mesh.material;
            if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
            else mat.dispose();
          }
        });
      }
      // Lose WebGL context (if we set it in Preview onCreated)
      const lose = (gl as any).__forceLoseContext;
      if (typeof lose === "function") lose();
    };
  }, [file, camera, controls, onLoad, onFirstChunk, scene, gl]);

  if (!model) return null;
  return (
    <group ref={groupRef}>
      <primitive object={model} />
    </group>
  );
}
