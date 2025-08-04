import ProfileSearchBar from "@/components/ProfileSearchBar";
import Button from "@/components/ui/button";
import useLogout from "@/hooks/auth/useLogout";
import { Crown, LogOut, Settings, Star, User } from "lucide-react";
import { Link } from "react-router-dom";

const userRank = "Advanced";
const userPoints = 2450;

const MobileNav = () => {
  const logout = useLogout();

  return (
    <div className="my-6 flex flex-col gap-6">
      <div className="block md:hidden">
        <ProfileSearchBar />
   <div className="mt-2 flex justify-center">
  <Link
    to="/user-rank-dashboard"
    className="flex flex-col items-center gap-2 px-2 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 hover:shadow-md transition-all duration-200 flex-shrink-0"
  >
    {/* User Rank */}
    <div className="flex items-center gap-1 mt-1">
      <Crown className="w-3 h-3 text-inkaer-blue" />
      <span className="text-xs font-sora font-semibold text-inkaer-blue">
        {userRank}
      </span>
    </div>

    {/* User Points */}
    <div className="flex items-center gap-1">
      <Star className="w-3 h-3 text-yellow-500 fill-current" />
      <span className="text-xs font-sora font-semibold text-gray-700">
        {userPoints.toLocaleString()}
      </span>
    </div>
  </Link>
</div>


      </div>
      <div className="space-y-4">
        <Link
          to="/dashboard"
          className="block nav-text py-2"
        >
          Dashboard
        </Link>
        <Link
          to="/projects"
          className="block nav-text py-2"
        >
          Projects
        </Link>
      </div>
      <div className="flex flex-col gap-3 border-t pt-4">
        <Button
          asChild
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-sora font-semibold py-3 rounded-full"
        >
          <Link to="/upgrade" className="text-sm xs:text-xl font-sora">
            <Crown className="mr-2 h-4 w-4" />
            Upgrade
          </Link>
        </Button>
        <Button asChild variant="outline" className="justify-start">
          <Link to="/profile" className="nav-text">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </Button>
        <Button asChild variant="outline" className="justify-start">
          <Link to="/settings" className="nav-text">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          onClick={logout}
          className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Link to="/logout" className="nav-text">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileNav;
