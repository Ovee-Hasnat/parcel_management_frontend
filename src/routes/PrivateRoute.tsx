import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  allowed?: Array<"customer" | "agent" | "admin">;
}

export default function PrivateRoute({ allowed }: Props) {
  const { user, token } = useAuth();

  // not logged in
  if (!token || !user) return <Navigate to="/login" replace />;

  // role not allowed
  if (allowed && !allowed.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
