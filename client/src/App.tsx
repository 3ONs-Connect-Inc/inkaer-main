import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";
import { Toaster } from "./components/ui/sonner";
import UnauthorizedPage from "./components/routes/UnauthorizedPage";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import RoleGuard from "./components/routes/RoleGuard";
import useAuthListener from "./hooks/auth/useAuthListener";
import { Loader } from "./components/ui/Spinner";
import DefaultSeo from "./components/seo/DefaultSeo";


const CreateAccount = lazy(() => import("./pages/auth/CreateAccount"));
const SignInAccount = lazy(() => import("./pages/auth/SignInAccount"));
const Home = lazy(() => import("./pages/Home"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const About = lazy(() => import("./pages/footer/About"));

const Blog = lazy(() => import("./pages/blog/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/footer/Terms"));
const Privacy = lazy(() => import("./pages/footer/Privacy"));
const Careers =lazy(()=> import ("./pages/careers/Careers"));
const Application =lazy(()=>import ("./pages/careers/Application"));

// admin pages
const RootLayout = lazy(() => import("./pages/admin/Layout"));
const DashboardPage = lazy(() => import("./pages/admin/Home"));
const ShortlistRequests = lazy(() => import("./pages/admin/ShortlistRequests"));
const Contacts = lazy(() => import("./pages/admin/Contacts"));
const AdminBlog =lazy(()=> import ("./pages/admin/AdminBlog"));
const BlogDetail= lazy(() => import("./pages/blog/BlogDetail"));
//const CareerList= lazy (() => import("./pages/admin/career/CareerList"));
//const AdminCareer= lazy(()=>import("./pages/admin/career/AdminCareer"));


const qc = new QueryClient();  
function App() {
  const authReady = useAuthListener();
  if (!authReady) return <Loader />;

  return (
    <QueryClientProvider client={qc}>
       <DefaultSeo />
      <Toaster />
      <ScrollToTop />
      <BackToTopButton />
      <Suspense>
        <Routes>
          {/* --- AUTH LAYOUT --- */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInAccount />} />
            <Route path="/sign-up" element={<CreateAccount />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          {/* --- PUBLIC LAYOUT --- */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
      
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id/:slug" element={<BlogDetail />} />
              <Route path="/careers" element={<Careers />} />
                  <Route path="/application" element={<Application/>} />
  
            {/* Unauthorized Fallback */}
            <Route path="/unauthorized" element={<UnauthorizedPage />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* --- ADMIN DASHBOARD ROUTES (Protected + RoleGuard) --- */}
          <Route element={<ProtectedRoute />}>
            <Route element={<RoleGuard allowedRoles={["admin"]} />}>
              <Route path="/admin" element={<RootLayout />}>
                {/* Default admin dashboard */}
                <Route index element={<DashboardPage />} />

                {/* Nested admin pages */}
                <Route path="view-subscribers" element={<ShortlistRequests />} />
                <Route path="view-contacts" element={<Contacts />} />
                  <Route path="view-bloglist" element={<AdminBlog />} />
              {/* <Route path="view-careerlist" element={<AdminCareer />} />
             <Route path="view-career-request" element={<CareerList />} /> */}
                
                <Route path="*" element={<NotFound />} />
              </Route>
            </Route>   
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
