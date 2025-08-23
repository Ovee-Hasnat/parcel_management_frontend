import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.toString() ?? "http://localhost:5000/api";

export const publicApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

// generic response error logging
publicApi.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("[publicApi] Error:", err?.response || err);
    return Promise.reject(err);
  }
);
