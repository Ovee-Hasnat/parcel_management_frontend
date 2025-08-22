import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Login from "../pages/auth/Login";
import Register from "@/pages/auth/Registration";

// import DashboardLayout from "../layouts/DashboardLayout";
// import Dashboard from "../pages/Dashboard";
// import Parcels from "../pages/Parcels";
// import NotFound from "../pages/NotFound";
// import PrivateRoute from "../components/PrivateRoute";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* Wrap everything in MainLayout */}
      <Route element={<MainLayout />}>
        {/* Redirect '/' to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        {/* <Route element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="parcels" element={<Parcels />} />
          </Route>
        </Route> */}

        {/* 404 - not found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
