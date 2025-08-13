import * as THREE from "three";

const stepCache = new Map<string, THREE.Object3D>();

function deepCloneWithNewResources(obj: THREE.Object3D) {
  const clone = obj.clone(true);
  clone.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if ((mesh as any).isMesh) {
      if (mesh.geometry) mesh.geometry = mesh.geometry.clone();
      if (mesh.material) {
        mesh.material = Array.isArray(mesh.material)
          ? mesh.material.map((m) => m.clone())
          : mesh.material.clone();
      }
    }
  });
  return clone;
}

export async function LoadStep(
  fileUrl: string,
  onPartial?: (obj: THREE.Object3D, firstChunk: boolean) => void
): Promise<THREE.Object3D> {
  // Serve from cache
  if (stepCache.has(fileUrl)) {
    const cached = stepCache.get(fileUrl)!;
    const first = deepCloneWithNewResources(cached);
    const full = deepCloneWithNewResources(cached);
    onPartial?.(first, true);   // simulate first chunk
    onPartial?.(full, false);   // simulate completion
    return deepCloneWithNewResources(cached);
  }

  const res = await fetch(fileUrl);
  const buffer = await res.arrayBuffer();

  const worker = new Worker(new URL("./stepWorker.ts", import.meta.url), {
    type: "module",
  });

  return new Promise((resolve, reject) => {
    const group = new THREE.Object3D();
    let firstChunk = true;

    worker.onmessage = (e) => {
      const result = e.data;

      if (result.success && result.meshes) {
        const partial = convertMeshesToThree(result.meshes);
        group.add(...partial.children);
        onPartial?.(deepCloneWithNewResources(group), firstChunk);
        if (firstChunk) firstChunk = false;
      }

      if (result.done) {
        stepCache.set(fileUrl, group);
        resolve(deepCloneWithNewResources(group));
        worker.terminate();
      }

      if (!result.success && !result.meshes) {
        reject(new Error("STEP load failed"));
        worker.terminate();
      }
    };

    worker.postMessage({ buffer }, [buffer]);
  });
}

function convertMeshesToThree(meshes: any[]): THREE.Object3D {
  const group = new THREE.Object3D();

  for (const mesh of meshes) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(mesh.attributes.position.array, 3)
    );
    if (mesh.attributes.normal) {
      geometry.setAttribute(
        "normal",
        new THREE.Float32BufferAttribute(mesh.attributes.normal.array, 3)
      );
    }
    geometry.setIndex(
      new THREE.BufferAttribute(Uint32Array.from(mesh.index.array), 1)
    );

    const color = mesh.color
      ? new THREE.Color(...mesh.color)
      : new THREE.Color(0xffffff);

    const material = new THREE.MeshStandardMaterial({
      color,
      metalness: 0.5,
      roughness: 0.5,
      side: THREE.DoubleSide,
    });

    group.add(new THREE.Mesh(geometry, material));
  }

  return group;
}
