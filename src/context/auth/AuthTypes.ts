export type Role = "customer" | "agent" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role: "customer" | "agent" | string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthContextValue extends AuthState {
  loading: boolean;
  register: (payload: RegisterPayload) => Promise<User>;
  login: (payload: LoginPayload) => Promise<User>;
  logout: () => void;
}
