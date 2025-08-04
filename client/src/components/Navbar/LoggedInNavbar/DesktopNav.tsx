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

  return (
    <div className="flex items-center gap-6">
      <Link
        to="/dashboard"
        className="nav-text"
      >
        Dashboard
      </Link>
      <Link
        to="/projects"
        className="nav-text"
      >
        Projects
      </Link>

      {/* User Rank and Points - Now Clickable */}
      <Link
        to="/user-rank-dashboard"
        className="flex items-center gap-4 px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 hover:shadow-md transition-all duration-200"
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
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-sora font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
      >
        <Link to="/upgrade">
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
            <Link to="/profile" className="flex items-center cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link
              to="/user-rank-dashboard"
              className="flex items-center cursor-pointer"
            >
              <Crown className="mr-2 h-4 w-4" />
              <span>Your Progress</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link to="/projects" className="flex items-center cursor-pointer">
              <Bookmark className="mr-2 h-4 w-4" />
              <span>My Projects</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link to="/settings" className="flex items-center cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link
              to="/notifications"
              className="flex items-center cursor-pointer"
            >
              <Bell className="mr-2 h-4 w-4" />
              <span>Notifications</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link to="/billing" className="flex items-center cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing & Account</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link to="/privacy" className="flex items-center cursor-pointer">
              <Shield className="mr-2 h-4 w-4" />
              <span>Privacy & Security</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link to="/help" className="flex items-center cursor-pointer">
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
