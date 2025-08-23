import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function DashboardRedirect() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  const map = {
    customer: "/dashboard/customer",
    agent: "/dashboard/agent",
    admin: "/dashboard/admin",
  } as const;

  return <Navigate to={map[user.role]} replace />;
}
