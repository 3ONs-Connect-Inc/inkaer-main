import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { setUser } from "@/redux/sessionSlice";
import { db } from "@/firebase/config";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithGoogle } from "@/api/auth/socialAuth";

export function useGoogleSignIn(returnTo: string) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      const user = await signInWithGoogle();

      const userRef = doc(collection(db, "users"), user.uid);
      const snapshot = await getDoc(userRef);

      let role = "user";

      if (!snapshot.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          role: "user",
          createdAt: new Date().toISOString(),
        });
      } else {
        role = snapshot.data().role || "user";
      }

      return { ...user, role };
    },
    onSuccess: (user) => {
      dispatch(setUser({
        uid: user.uid,
        email: user.email!,
        displayName: user.displayName || "",
        role: "user",
      }));

      toast.success("Signed in with Google!");
      navigate(user.role === "admin" ? "/admin" : returnTo || "/");
    },
    onError: () => {
      toast.error("Google sign-in failed.");
    },
  });
}
