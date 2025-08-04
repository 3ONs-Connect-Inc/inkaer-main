import { signInWithEmailAndPassword, setPersistence,  browserSessionPersistence, browserLocalPersistence } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { auth } from "@/firebase/config";
import { setUser } from "@/redux/sessionSlice";



export function useSignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({
      email,
      password,
      remember,
    }: { email: string; password: string; remember: boolean }) => {
      // Set persistence type
      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);

      // Store email if "remember" is checked
      if (remember) {
        localStorage.setItem("userEmail", email);
      } else {
        localStorage.removeItem("userEmail");
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    },
    onSuccess: (user) => {
      dispatch(setUser({
        uid: user.uid,
        email: user.email!,
        displayName: user.displayName || "",
      }));
      toast.success("Sign in successful!");
      navigate("/");
    },
    onError: (error: any) => {
      if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password.");
      } else {
        toast.error("Sign in failed. Please try again.");
      }
    },
  });
}