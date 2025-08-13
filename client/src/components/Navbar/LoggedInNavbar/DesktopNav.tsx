import { Link } from "react-router-dom";
import Button from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Crown,
  Star,
  Settings,
  CreditCard,
  HelpCircle,
  Shield,
  Bell,
  Bookmark,
} from "lucide-react";
import { LogOut, User } from "lucide-react";
import useLogout from "@/hooks/auth/useLogout";

// Mock user data - in real app this would come from state/context
const userRank = "Advanced";
const userPoints = 2450;
const userName = "John Doe";
const userEmail = "john.doe@example.com";

const DesktopNav = () => {
  const logout = useLogout();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex items-center gap-6">
      <Link
        to="/"
       className={`nav-text ${isActive("/") ? "text-inkaer-blue font-semibold" : ""}`}
      >
        Dashboard
      </Link>
      <Link
        to="/projects"
        className={`nav-text ${isActive("/projects") ? "text-inkaer-blue font-semibold" : ""}`}
      >
        Projects
      </Link>

      {/* User Rank and Points - Now Clickable */}
      <Link
        to="/user-rank-dashboard"
        className={`flex items-center gap-4 px-3 py-1 
          bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border
           border-blue-200 hover:shadow-md transition-all duration-200 
            ${isActive("/user-rank-dashboard") ? "border border-inkaer-blue font-semibold" : ""}`}
      >
        <div className="flex items-center gap-1">
          <Crown className="w-4 h-4 text-inkaer-blue" />
          <span className="text-sm font-sora font-semibold text-inkaer-blue">
            {userRank}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-sora font-semibold text-gray-700">
            {userPoints.toLocaleString()}
          </span>
        </div>
      </Link>

      {/* Upgrade Button */}
      <Button
        asChild
        size="sm"
        className={`bg-gradient-to-r from-purple-600 to-indigo-600 
          hover:from-purple-700 hover:to-indigo-700 text-white font-sora 
          font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105
           ${isActive("/pricing") ? "border-2 border-purple-600 font-semibold" : ""}`}
      >
        <Link to="/pricing">
          <Crown className="w-4 h-4 mr-1" />
          Upgrade
        </Link>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200"
          >
            <User className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56 bg-white border border-gray-200 shadow-lg"
        >
          <DropdownMenuLabel className="px-4 py-3">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold text-gray-900">{userName}</p>
              <p className="text-xs text-gray-500">{userEmail}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link to="/profile" className={`flex items-center cursor-pointer ${isActive("/profile") ? "text-inkaer-blue font-semibold" : ""}`}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link
              to="/user-rank-dashboard"
              className={`flex items-center cursor-pointer ${isActive("/user-rank-dashboard") ? "text-inkaer-blue font-semibold" : ""}`}
            >
              <Crown className="mr-2 h-4 w-4" />
              <span>Your Progress</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link to="/projects" className={`flex items-center cursor-pointer ${isActive("/projects") ? "text-inkaer-blue font-semibold" : ""}`}>
              <Bookmark className="mr-2 h-4 w-4" />
              <span>My Projects</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link to="/settings" className={`flex items-center cursor-pointer ${isActive("/settings") ? "text-inkaer-blue font-semibold" : ""}`}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link
              to="/notifications"
              className={`flex items-center cursor-pointer ${isActive("/notifications") ? "text-inkaer-blue font-semibold" : ""}`}
            >
              <Bell className="mr-2 h-4 w-4" />
              <span>Notifications</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link to="/billing" className={`flex items-center cursor-pointer ${isActive("/billing") ? "text-inkaer-blue font-semibold" : ""}`}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing & Account</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link to="/privacy" className={`flex items-center cursor-pointer ${isActive("/privacy") ? "text-inkaer-blue font-semibold" : ""}`}>
              <Shield className="mr-2 h-4 w-4" />
              <span>Privacy & Security</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link to="/help" className={`flex items-center cursor-pointer ${isActive("/help") ? "text-inkaer-blue font-semibold" : ""}`}>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Support</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={logout}
            className="text-red-600 focus:text-red-600 focus:bg-red-50"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DesktopNav;
