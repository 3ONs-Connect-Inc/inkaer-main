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


const CreateAccount = lazy(() => import("./pages/auth/CreateAccount"));
const SignInAccount = lazy(() => import("./pages/auth/SignInAccount"));
const Home = lazy(() => import("./pages/Home"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const PortfolioProject =lazy(()=> import("./pages/PortfolioProject"));

const qc = new QueryClient();
function App() {
  const authReady = useAuthListener();
  if (!authReady) return <Loader />;  

  return (
    <QueryClientProvider client={qc}>
      <Toaster />
      <Sonner />
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
            <Route path="/portfolio/:id" element={<PortfolioProject />} />
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
