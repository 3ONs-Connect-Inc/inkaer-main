import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import Loader  from './Loader'


const StepViewer = ({ file, fileType }: { file: string; fileType: string }) => {
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
        </CardTitle>
      </CardHeader>
      <CardContent>
       <div className="w-full h-[200px] xxs:h-[250px]  xs:h-[300px] sm:h-[400px] max-h-[640px] overflow-hidden bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 relative">
          {!ready && <Loader progress={null} />}
          <Canvas 
         
          camera={{ position: [5, 5, 5], fov: 45 }} 
          shadows>
           
          </Canvas>
        </div>
      </CardContent>
    </Card>
  )
}

export default StepViewer