import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth, db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { setUser, clearUser } from "@/redux/sessionSlice";

const useAuthListener = () => {
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
      
        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);

        let role: "admin" | "user" = "user"; // default
        if (snap.exists()) {
          role = (snap.data().role as "admin" | "user") || "user";
        }

        dispatch(setUser({
          uid: user.uid,
          email: user.email!,
          displayName: user.displayName || "",
          role, 
        }));
      } else {
        dispatch(clearUser());
      }

      setAuthReady(true);
    });

    return () => unsubscribe();
  }, [dispatch]);

  return authReady;
};

export default useAuthListener;
