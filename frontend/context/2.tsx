import Router from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserToken } from "../@types/interfaces/IUserToken";
import AuthService from "../services/AuthService";
import UserService from "../services/UserService";
import { getToken, setToken } from "../utils/localStorage";

interface Props {
  children: React.ReactNode;
}

interface IContext {
  isLogged: boolean;
  user: IUserToken;
  isBooting: boolean;
  signIn: (username: string, password: string) => Promise<any>;
  logout: () => void;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(true);
  const [isBooting, setIsBooting] = useState<boolean>(true);
  const [user, setUser] = useState<IUserToken>({} as IUserToken);

  const signIn = async (username: string, password: string) => {
    setIsBooting(true);
    AuthService()
      .login({ username, password })
      .then((resp) => {
        setToken("user", resp.data);
        setUser(resp.data);
        setIsLogged(true);
        Router.push(`/${resp.data.profile._id}/`);
        setIsBooting(false);
      })
      .catch((e) => {
        console.log("here", e);
        setIsBooting(false);
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLogged(false);
    Router.replace("/");
  };

  useEffect(() => {
    const user = getToken<IUserToken>("user");
    if (user) {
      setUser(user);
      setIsLogged(true);
      setIsBooting(false);
      UserService().handlePrefetchBalance();
    } else {
      setIsLogged(false);
      setIsBooting(false);
      Router.replace("/");
    }
  }, [isLogged]);

  return <AuthContext.Provider value={{ isLogged, isBooting, signIn, user, logout }}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;