import { AxiosResponse } from "axios";
import React from "react";
import { api } from "../libs/api";

const AuthService = () => {
  const login = async (data: { username: string; password: string }): Promise<AxiosResponse> => {
    const Request = await api.post("/auth/signin", { ...data, company: "637992ae4c68c0c0f375ca8f" });
    return Request;
  };

  return { login };
};

export default AuthService;