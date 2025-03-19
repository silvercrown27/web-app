import axios, { AxiosResponse } from "axios";
import CookieManager from "./cookies";

interface LoginResponse {
  token: string;
}

interface ProfileResponse {
  message: string;
}

const api = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  const response: AxiosResponse<LoginResponse> = await api.post("/login", { username, password });
  if (response.data.token) {
    CookieManager.setCookie("session_token", response.data.token);
  }
  return response.data;
};

export const getProfile = async (): Promise<ProfileResponse> => {
  const token = CookieManager.getCookie("session_token");
  const response: AxiosResponse<ProfileResponse> = await api.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const logout = (): void => {
  CookieManager.removeCookie("session_token");
};
