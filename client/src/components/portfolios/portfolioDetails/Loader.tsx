import { loader } from "@/assets";

type LoaderProps = { progress?: number | null };

export default function Loader({ progress }: LoaderProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-300 bg-opacity-80 z-10">
      <div className="flex flex-col items-center text-white">
        {/* Spinner border-4 border-t-blue-500 border-white rounded-full animate-spin*/}
        <img src={loader} alt='loader' 
        className="w-10 h-10  mb-4" />

        {/* Loading text */}
        <div className="text-base font-semibold">
          {progress != null ? `Loading ${progress}%` : ''}
        </div>
      </div>
    </div>
  );
}
