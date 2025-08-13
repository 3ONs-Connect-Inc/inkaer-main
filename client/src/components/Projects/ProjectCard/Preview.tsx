import Loader from "@/components/portfolios/portfolioDetails/Loader";
import { CameraLight, FillLights } from "@/components/portfolios/portfolioDetails/Settings";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import StepModel from "./StepModel";

type Props = {
  image?: string;
  setReady: (ready: boolean) => void;
};

export const Preview = ({ image, setReady }: Props) => {
  const [loading, setLoading] = useState(true);
  const [firstChunk, setFirstChunk] = useState(false);

  // Reset states whenever the file changes
  useEffect(() => {
    setLoading(true);
    setFirstChunk(false);
    setReady(false);
  }, [image, setReady]);

  if (!image) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
        No Preview
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {(loading || !firstChunk) && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-10 pointer-events-none">
          <Loader />
        </div>
      )}

      <Canvas
        camera={{ position: [5, 5, 5], fov: 45 }}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        shadows={false}
      >
        <CameraLight />
        <FillLights />
        <ambientLight />
        <Suspense fallback={null}>
          <StepModel
            file={image}
            onFirstChunk={() => {
              setFirstChunk(true); // show model immediately
            }}
            onLoad={() => {
              setLoading(false); // fully loaded
              setReady(true);
            }}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
