import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import FlickeringGridWrapper from "@/components/auth/FlickeringGridWrapper";
import BackgroundDecor from "@/components/auth/BackgroundDecor";
import Header from "@/components/auth/Header";
import SocialLogin from "@/components/auth/SocialLogin";
import RegisterForm from "@/components/auth/RegisterForm";
import Seo from "@/components/Seo";

const CreateAccount = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      <Seo
        title="Create Account"
        description="Create account page."
        name="Inkaer."
        type="website"
          robots="noindex, nofollow"
      />
    <FlickeringGridWrapper />
      <BackgroundDecor />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-1 xs:p-4">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
              <Header  mode="sign-up" />
          <CardContent className="space-y-6 ">
                  <React.Suspense fallback={<div>Loading form…</div>}>
              <RegisterForm />
            </React.Suspense>
            <SocialLogin mode="sign-up" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateAccount;
