import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PublicRoute() {
  const { user } = useAuth();

  if (user) {
    const map = {
      customer: "/dashboard/customer",
      agent: "/dashboard/agent",
      admin: "/dashboard/admin",
    } as const;

    return <Navigate to={map[user.role]} replace />;
  }

  return <Outlet />;
}
