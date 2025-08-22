import { isAuthenticated } from "@/utils/auth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
