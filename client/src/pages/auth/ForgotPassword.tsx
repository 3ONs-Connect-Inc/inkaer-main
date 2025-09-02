
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/auth/Header";
import Seo from "@/components/seo/Seo";
import ForgotPasswordForm from "@/components/auth/ForgotPassword";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      <Seo
  title="Forgot Password – Inkaer"
  description="Reset your Inkaer account password securely and quickly. Follow the instructions to regain access to your account."
  name="Inkaer"
  type="website"
  robots="noindex, nofollow"
/>

   
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
          <Header mode="forgot-password" />
          <CardContent className="space-y-6">
            <ForgotPasswordForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
