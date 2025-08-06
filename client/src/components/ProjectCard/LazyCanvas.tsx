
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { CameraLight, FillLights } from "../uploadPortfolio/Settings";
import StepModel from "../uploadPortfolio/StepModel";
import { Suspense, useState } from "react";
import Loader from "../uploadPortfolio/Loader";

export default function LazyCanvas({ file }: { file: string }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60">
          <Loader progress={null} />
        </div>
      )}
      <Canvas
        shadows
        camera={{ position: [5, 5, 5], fov: 45 }}
        className="w-full h-full object-cover"
      >
        <Suspense fallback={null}>
          <CameraLight />
          <FillLights />
          <ambientLight />
          <StepModel file={file} onLoad={() => setReady(true)} />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.5}
            scale={10}
            blur={1.5}
            far={10}
          />
        </Suspense>
      </Canvas>
    </>
  );
}
