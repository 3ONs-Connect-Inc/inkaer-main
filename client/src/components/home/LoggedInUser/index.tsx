import CandidatePackage from "../GuestUser/CandidatePackage";
import CaseStudy from "../GuestUser/CaseStudy";
import Endorsements from "../GuestUser/Endorsements";
import FAQ from "../GuestUser/FAQ";
import Features from "../GuestUser/Features";
import Hero from "../GuestUser/Hero";
import HowItWorks from "../GuestUser/HowItWorks";
import OrganizationalBenefits from "../GuestUser/OrganizationalBenefits";
import Pricing from "../GuestUser/Pricing";
import RequestShortlist from "../request-shortlist/RequestShortlist";
import Testimonials from "../GuestUser/Testimonials";
import VerificationDetails from "../GuestUser/VerificationDetails";


const LoggedInUser = () => {
  
   return (
       <div className="min-h-screen  bg-white">
 <main>
            <Hero />
        <Endorsements />
              <Testimonials />
       <Features />
        <OrganizationalBenefits />
        <HowItWorks />  
         <CandidatePackage />
        <VerificationDetails />
       <Pricing />
         <FAQ />
          <CaseStudy />
   <RequestShortlist /> 
      </main>
    </div>
   )
  };

export default LoggedInUser;
