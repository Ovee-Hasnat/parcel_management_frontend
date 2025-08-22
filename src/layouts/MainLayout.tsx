import { Outlet } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-100 p-4 shadow flex justify-between items-center">
        <h1 className="text-xl font-bold">Parcel Management</h1>
        <LanguageSwitcher />
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-3 shadow text-sm">
        &copy; {new Date().getFullYear()} Parcel Management System
      </footer>
    </div>
  );
};

export default MainLayout;
