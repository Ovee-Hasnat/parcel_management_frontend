import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white rounded-xl shadow-md">
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
