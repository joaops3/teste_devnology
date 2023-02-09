import { AxiosResponse } from "axios";
import React from "react";
import { IUserToken } from "../@types/interfaces";
import { api } from "./api";

const AuthService = () => {
  const login = async (data: { email: string; password: string }): Promise<AxiosResponse<IUserToken>> => {
    const Request = await api.post("/auth/login", { ...data,});
    return Request;
  };

  return { login };
};

export default AuthService;