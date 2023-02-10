import { useToast } from "@chakra-ui/react";
import Router from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserToken } from "../@types/interfaces/IUserToken";
import AuthService from "../services/AuthService";

import { getToken, setToken } from "../utils/localStorage";

interface Props {
  children: React.ReactNode;
}

interface IContext {
  isLogged: boolean;
  user: IUserToken;
  isBooting: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => void;
  handleRefreshPage: () => void
  refreshProfile: number
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(true);
  const [isBooting, setIsBooting] = useState<boolean>(true);
  const [refreshProfile, setRefreshProfile ] =  useState<number>(0)
  const [user, setUser] = useState<IUserToken>({} as IUserToken);
  const toast = useToast()
  const signIn = async (email: string, password: string) => {
   
    AuthService()
      .login({ email, password })
      .then((resp) => {
        toast({
          title: 'Sucesso',
          description: "Login Efetuado com Sucesso",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        setToken("user", resp.data);
        setUser(resp.data);
        setIsLogged(true);
        Router.push(`/profile/${resp.data.id}/`);
        
      })
      .catch((e) => {
        toast({
          title: 'Erro',
          description: e.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        console.log("error login", e);
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLogged(false);
    Router.replace("/");
  };

  const handleRefreshPage = () => {setRefreshProfile(prev => prev+1); console.log("no auth",refreshProfile)}

  useEffect(() => {
    const user = getToken<IUserToken>("user");
    if (user) {
      setUser(user);
      setIsLogged(true);
    } else {
      setIsLogged(false);
      // Router.replace("/");
    }
  }, [isLogged]);

  return <AuthContext.Provider value={{ isLogged, isBooting, signIn, user, logout, handleRefreshPage, refreshProfile }}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;