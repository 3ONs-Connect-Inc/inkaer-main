import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import Sonner from "./components/ui/sonner";
import UploadPortfolio from "./pages/UploadPortfolio";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useAuthListener from "./hooks/auth/useAuthListener";
import { Loader } from "./components/ui/Spinner";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";



const CreateAccount = lazy(() => import("./pages/auth/CreateAccount"));
const SignInAccount = lazy(() => import("./pages/auth/SignInAccount"));
const Home = lazy(() => import("./pages/Home"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const PortfolioDetailPage =lazy(()=> import("./pages/PortfolioDetailPage"));
const HowItWorks =lazy(() => import("./components/footer/HowItWorks"));
const Projects =lazy(()=>import("./pages/Projects"));
// const Certification =lazy(()=> import ("./components/footer/Certification"));
// const Rank =lazy(()=> import("./components/footer/Rank"));
// const About = lazy(() => import("./components/footer/About"));
//const Careers =lazy(() => import ("./components/footer/Careers"));
//const Blog =lazy(()=>import("./components/footer/Blog"));
//const Contact =lazy(()=> import("./components/footer/Contact"));




const qc = new QueryClient();
function App() {
  const authReady = useAuthListener();
  if (!authReady) return <Loader />;  

  return (
    <QueryClientProvider client={qc}>
      <Toaster />
      <Sonner />
    <ScrollToTop /> 
    <BackToTopButton /> 
      <Suspense>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInAccount />} />
            <Route path="/sign-up" element={<CreateAccount />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

          </Route>

          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/upload-portfolio" element={<UploadPortfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
      {/*
                <Route path="/contact" element={<Contact />} />
        

                <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
                 <Route path="/about" element={<About />} />
               <Route path="/rank" element={<Rank />} />
               <Route path="/certification" element={<Certification />} /> 
                */}

             <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/projects" element={<Projects />} />
              
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* <Route element={<ProtectedRoute />}>
     <Route path="/user/*" element={<UserProfile />} />
    </Route> */}
        </Routes>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
