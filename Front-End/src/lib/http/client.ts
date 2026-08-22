import axios from "axios";
import { getStoredToken, notifySessionExpired } from "../auth/session";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use((config) => {
  const token = getStoredToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const isAuthEndpoint =
      typeof error?.config?.url === "string" &&
      error.config.url.includes("/api/auth/login");

    if ((status === 401 || status === 403) && !isAuthEndpoint) {
      notifySessionExpired();
    }
    return Promise.reject(error);
  }
);
