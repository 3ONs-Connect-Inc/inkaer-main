import { useEffect, useState } from "react";
import { Download, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import StepModel from './StepModel'
import Loader  from './Loader'
import { CameraLight, FillLights } from "./Settings";
import Button from "../ui/button";

const StepViewer = ({ file, fileType, onDownload }: { file: string; fileType: string, onDownload: (fileUrl: string) => void; }) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(false)
  }, [file])

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
      <CardHeader className="pb-4 text-center">
        <CardTitle className="flex items-center justify-center gap-2 section-title2">
          <FileText className="flex self-start w-5 h-5" />
          <p className="section-title2">{fileType}</p>
          <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDownload(file)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
       <div className="w-full h-[200px] xxs:h-[250px]  xs:h-[300px] sm:h-[400px] max-h-[640px] overflow-hidden bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 relative">
          {!ready && <Loader progress={null} />}
          <Canvas 
         
          camera={{ position: [5, 5, 5], fov: 45 }} 
          shadows>
            <CameraLight />
            <FillLights />
        <StepModel file={file} onLoad={() => setReady(true)} />
            <ContactShadows
              position={[0, -0.8, 0]}
              opacity={0.5}
              scale={10}
              blur={1.5}  
              far={10}
            />
            <OrbitControls makeDefault enableDamping dampingFactor={0.1} enabled={ready} />
          </Canvas>
        </div>
      </CardContent>
    </Card>
  )
}

export default StepViewer