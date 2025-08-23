import { createContext } from "react";
import { type AuthContextValue } from "./AuthTypes";

export const AuthContext = createContext<AuthContextValue | null>(null);
