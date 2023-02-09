import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getToken } from "../utils/localStorage";

//axios.post(url, body, method, header)

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

const header = {
  "Content-Type": "application/json",
  Authorization: "",
};
const parameters = {
  method: "GET",
  headers: header,
};

//get token

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const user = getToken<any>("user");
    if (user && config.headers) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },

  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if(error.response?.status === 401){
      localStorage.removeItem("user")
       window.location.href = "http://localhost:3000/";
    }
    return Promise.reject(error);
  }
);