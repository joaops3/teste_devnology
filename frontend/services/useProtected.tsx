import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Loading from "../components/UI/Loading";
import useAuthContext from "../context/AuthContext";

//Protect Route

const useProtected = () => {
  const { isLogged } = useAuthContext();
  const route = useRouter();
  useEffect(() => {
    if (!isLogged) {
      route.push("/");
    }
  }, []);

  return 
};

export default useProtected;
