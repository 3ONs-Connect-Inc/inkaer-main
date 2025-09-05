import Seo from "@/components/seo/Seo"
import HeroSection from "@/components/careers/HeroSection"
import WhyWorkSection from "@/components/careers/WhyWorkSection"
import OpenPositions from "@/components/careers/OpenPositions"
import { useCareerPosts, useCareersMeta } from "@/hooks/useCareers"

const Careers = () => {
  const { data: openings = [] } = useCareerPosts()
  const { data: meta } = useCareersMeta()

  return (  
    <div className="min-h-screen bg-white">
    <Seo
  title="Careers – Inkaer"
  description="Discover exciting career opportunities at Inkaer. Join our innovative team transforming the hiring industry. Browse open roles in tech, design, marketing, and more — and apply today!"
  name="Inkaer"
  type="website"  
/>

      <main className="py-16">
        <HeroSection title={meta?.heroTitle} subtitle={meta?.heroSubtitle} />
        <WhyWorkSection />
        <OpenPositions
          jobs={openings}
          footerTitle={meta?.footerTitle}
          footerSubtitle={meta?.footerSubtitle}
        />
      </main>
    </div>
  )
}

export default Careers
