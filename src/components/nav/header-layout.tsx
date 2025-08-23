import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import LanguageSwitcher from "../LanguageSwitcher";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function HeaderLayout() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="bg-gray-400 px-4 py-2.5 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold leading-4">
        Parcel <br />{" "}
        <span className="font-light tracking-tight">Management</span>
      </h1>

      <div className="flex items-center gap-3">
        <LanguageSwitcher />

        {user && (
          <Popover>
            <PopoverTrigger className="cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-6">
              <span className="text-gray-700 font-medium leading-4">
                Hello, {user.name} <br />
                <span className="text-gray-500 text-sm font-medium">
                  {user.role}
                </span>
              </span>
              <Button
                className="cursor-pointer"
                variant="destructive"
                size="sm"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </header>
  );
}
