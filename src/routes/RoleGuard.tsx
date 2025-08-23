// src/components/RoleGuard.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface RoleGuardProps {
  role: "customer" | "agent" | "admin";
}

export default function RoleGuard({ role }: RoleGuardProps) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  // if wrong role → kick back to their own dashboard
  if (user.role !== role) {
    const map = {
      customer: "/dashboard/customer",
      agent: "/dashboard/agent",
      admin: "/dashboard/admin",
    } as const;
    return <Navigate to={map[user.role]} replace />;
  }

  return <Outlet />;
}
