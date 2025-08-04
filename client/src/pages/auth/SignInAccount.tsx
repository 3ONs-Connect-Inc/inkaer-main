import React, { useState } from "react";
import FlickeringGridWrapper from "@/components/auth/FlickeringGridWrapper";
import BackgroundDecor from "@/components/auth/BackgroundDecor";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/auth/Header";
import SocialLogin from "@/components/auth/SocialLogin";
import { useSignIn } from "@/hooks/auth/useSignIn";
import SignInForm from "@/components/auth/SignInForm";
import Seo from "@/components/Seo";


const SignInAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const signInMutation = useSignIn();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    signInMutation.mutate({ email, password, remember: rememberMe });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      <Seo
        title="Sign in Account"
        description="Sign in Account page."
        name="Inkaer"
        type="website"
          robots="noindex, nofollow"
      />
      <FlickeringGridWrapper />
      <BackgroundDecor />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-1 xs:p-4">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
          <Header  mode="sign-in" />
          <CardContent className="space-y-6">
            <SignInForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              rememberMe={rememberMe}
              setRememberMe={setRememberMe}
              isLoading={signInMutation.isPending}
            />
            <SocialLogin mode="sign-in" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignInAccount;
