// src/context/auth/AuthProvider.tsx

import React, { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { publicApi } from "../../lib/axios/public";
import type {
  AuthState,
  RegisterPayload,
  LoginPayload,
  User,
  AuthContextValue,
} from "./AuthTypes";
import { loadAuthState, saveAuthState, clearAuthState } from "./AuthStorage";

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, setState] = useState<AuthState>(() => loadAuthState());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    saveAuthState(state);
  }, [state]);

  const register = async (payload: RegisterPayload): Promise<User> => {
    setLoading(true);
    try {
      const res = await publicApi.post("/auth/register", payload);
      const { user, token } = res.data as { user: User; token: string };
      setState({ user, token });
      return user;
    } finally {
      setLoading(false);
    }
  };

  const login = async (payload: LoginPayload): Promise<User> => {
    setLoading(true);
    try {
      const res = await publicApi.post("/auth/login", payload);
      const { user, token } = res.data as { user: User; token: string };
      setState({ user, token });
      return user;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setState({ user: null, token: null });
    clearAuthState();
  };

  const value = useMemo<AuthContextValue>(
    () => ({ ...state, loading, register, login, logout }),
    [state, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
