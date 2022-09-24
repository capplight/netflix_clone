import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("auth.user"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("auth.user", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("auth.user");
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}
