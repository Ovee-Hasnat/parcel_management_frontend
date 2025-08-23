import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Registration";
import DashboardRedirect from "@/pages/dashboard/DashboardRedirect";

// import Parcels from "@/pages/Parcels";
// import NotFound from "@/pages/NotFound";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import RoleGuard from "./RoleGuard";
import CustomerDashboard from "@/pages/dashboard/CustomerDashboard";
import AgentDashboard from "@/pages/dashboard/AgentDashboard";
import AdminDashboard from "@/pages/dashboard/AdminDashboard";
import NotFound from "@/pages/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        {/* Base route → login or dashboard */}
        <Route path="/" element={<DashboardRedirect />} />

        {/* Public Routes (only when logged out) */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Routes */}
        <Route
          element={<PrivateRoute allowed={["customer", "agent", "admin"]} />}
        >
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardRedirect />} />

            <Route element={<RoleGuard role="customer" />}>
              <Route
                path="dashboard/customer"
                element={<CustomerDashboard />}
              />
            </Route>

            <Route element={<RoleGuard role="agent" />}>
              <Route path="dashboard/agent" element={<AgentDashboard />} />
            </Route>

            <Route element={<RoleGuard role="admin" />}>
              <Route path="dashboard/admin" element={<AdminDashboard />} />
            </Route>
          </Route>
        </Route>

        {/* 404 - not found */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
