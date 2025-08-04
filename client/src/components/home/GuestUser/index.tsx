
import HeroSection from "./HeroSection"
import EndorsementSection from "./EndorsementSection"
import { Feature108 } from "@/components/ui/shadcnblocks-feature108"
import FeaturedProjectsSection from "./FeaturedProjectsSection"


const  GuestUser= () => {
  return (
       <div className="min-h-screen overflow-hidden bg-white">
     
      <HeroSection />
      <EndorsementSection />

      <div className="bg-[#fafcff]">
        <Feature108 />
      </div>
      <FeaturedProjectsSection />
    </div>
  )
}

export default GuestUser