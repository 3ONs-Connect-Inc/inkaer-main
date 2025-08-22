import CandidatePackage from "./CandidatePackage"
import Endorsements from "./Endorsements"
import FAQ from "./FAQ"
import Features from "./Features"
import Hero from "./Hero"
import HowItWorks from "./HowItWorks"
import OrganizationalBenefits from "./OrganizationalBenefits"
import Pricing from "./Pricing"
import RequestShortlist from "./RequestShortlist"
import VerificationDetails from "./VerificationDetails"



const  GuestUser= () => {
  return (
       <div className="min-h-screen  bg-white">
 <main>
        <Hero />
        <Endorsements />
       <Features />
        <OrganizationalBenefits />
        <HowItWorks />  
         <CandidatePackage />
        <VerificationDetails />
       <Pricing />
         <FAQ />
   <RequestShortlist /> 
      </main>
    </div>
  )
}

export default GuestUser