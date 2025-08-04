import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "@/firebase/config";
import { setUser, clearUser } from "@/redux/sessionSlice";

const useAuthListener = () => {  
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email!,
          displayName: user.displayName || "",
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
