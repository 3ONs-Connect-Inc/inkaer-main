import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "@/firebase/config";
import { clearUser } from "@/redux/sessionSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return async () => {
    await signOut(auth);
    dispatch(clearUser()); 
    toast.success("You have signed out Successfully")
     navigate("/");
  };
};

export default useLogout;
