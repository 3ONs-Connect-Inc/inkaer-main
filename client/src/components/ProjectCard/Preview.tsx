import { Canvas } from "@react-three/fiber";
import { CameraLight, FillLights } from "../uploadPortfolio/Settings";
//import StepModel from "../uploadPortfolio/StepModel";
import Loader from "../uploadPortfolio/Loader";
import { Suspense } from "react";

type Props = {
  image?: string;
  setReady: (ready: boolean) => void;
};

export const Preview = ({ image }: Props) => {
  if (!image) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
        No Preview
      </div>
    );
  }

  return (
    <>
      <Canvas
        camera={{ position: [5, 5, 5], fov: 45 }}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        shadows={false}
      >
        <CameraLight />
        <FillLights />
        <ambientLight />
        <Suspense fallback={<Loader />}>
          {/* <StepModel file={image} onLoad={() => setReady(true)} /> */}
        </Suspense>
      </Canvas>
    </>
  );
};
