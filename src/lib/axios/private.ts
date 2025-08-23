import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.toString() ?? "http://localhost:5000/api";

export const privateApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

privateApi.interceptors.request.use((config) => {
  const raw = localStorage.getItem("auth");
  const token = raw ? (JSON.parse(raw).token as string | null) : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

privateApi.interceptors.response.use(
  (res) => res,
  (err) => {
    // If token expires, you could auto-logout here if you like.
    if (err?.response?.status === 401) {
      // e.g., localStorage.removeItem("auth");
      // window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);
