
import FlickeringGridWrapper from "@/components/auth/FlickeringGridWrapper";
import BackgroundDecor from "@/components/auth/BackgroundDecor";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/auth/Header";
import Seo from "@/components/Seo";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";



const ResetPassword = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      <Seo
        title="Reset password"
        description="Reset password page."
        name="Inkaer"
        type="website"
          robots="noindex, nofollow"
      />
      <FlickeringGridWrapper />
      <BackgroundDecor />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
          <Header mode="reset-password"/>
          <CardContent className="space-y-6">
            <ResetPasswordForm  />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
