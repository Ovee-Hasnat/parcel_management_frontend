import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import HeaderLayout from "@/components/nav/header-layout";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <HeaderLayout />

      {/* Main Content */}
      <main className="flex-grow p-4 bg-gray-100">
        <Outlet />
      </main>
      <Toaster position="top-center" />

      {/* Footer */}
      <footer className="bg-gray-400 text-center p-3 shadow text-sm">
        &copy; {new Date().getFullYear()} Parcel Management System
      </footer>
    </div>
  );
};

export default MainLayout;
