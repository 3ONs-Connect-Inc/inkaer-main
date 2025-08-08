
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { redirectToLoginWithReturnUrl } from "./redirectToLogin";
import type { RootState } from "@/redux/store";

//redirect to login without showing the component 
export const useRequireLoginNotice = () => {
  const user = useSelector((state: RootState) => state.session.user);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      toast.info("Please log in before proceeding.");
      redirectToLoginWithReturnUrl(navigate, location.pathname);
    }
  }, [user, navigate, location.pathname]);
};

//components
//useRequireLoginNotice();