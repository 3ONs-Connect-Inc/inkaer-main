import CandidatePackage from "../GuestUser/CandidatePackage";
import Endorsements from "../GuestUser/Endorsements";
import FAQ from "../GuestUser/FAQ";
import Features from "../GuestUser/Features";
import Hero from "../GuestUser/Hero";
import HowItWorks from "../GuestUser/HowItWorks";
import OrganizationalBenefits from "../GuestUser/OrganizationalBenefits";
import Pricing from "../GuestUser/Pricing";
import RequestShortlist from "../GuestUser/RequestShortlist";
import VerificationDetails from "../GuestUser/VerificationDetails";


const LoggedInUser = () => {
  
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
  };

export default LoggedInUser;
