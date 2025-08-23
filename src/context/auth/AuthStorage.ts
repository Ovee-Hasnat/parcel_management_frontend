import { type AuthState } from "./AuthTypes";

const STORAGE_KEY = "auth";

export const loadAuthState = (): AuthState => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as AuthState) : { user: null, token: null };
};

export const saveAuthState = (state: AuthState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const clearAuthState = () => {
  localStorage.removeItem(STORAGE_KEY);
};
