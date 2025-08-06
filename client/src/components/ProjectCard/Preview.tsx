import { lazy, useState } from "react";


const LazyCanvas = lazy(() => import("./LazyCanvas"));

type Props = {
  image?: string;
};

export const Preview = ({ image }: Props) => {
  const [show3D, setShow3D] = useState(false);

  if (!image) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
        No Preview
      </div>
    );
  }

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      onMouseEnter={() => setShow3D(true)}
      onMouseLeave={() => setShow3D(false)}
    >
      {!show3D ? (
        <img
          src="/placeholder.png" // 👈 Replace with real thumbnail if available
          alt="Preview"
          className="w-full h-full object-cover"
        />
      ) : (
        <LazyCanvas file={image} />
      )}
    </div>
  );
};
