import { Link } from "react-router-dom";
import Button from "@/components/ui/button";

const DesktopNav = () => {
    const isActive = (path: string) => location.pathname === path;
return (
  <div className="flex items-center gap-6">
    <Link
      to="/how-it-works"
      className={`nav-text ${isActive("/how-it-works") ? "text-inkaer-blue font-semibold" : ""}`}
    >
      How It Works
    </Link>
    <Link
      to="/rank"
      className={`nav-text ${isActive("/rank") ? "text-inkaer-blue font-semibold" : ""}`}
    >
      Rank
    </Link>
    <Link
      to="/certification"
      className={`nav-text ${isActive("/certification") ? "text-inkaer-blue font-semibold" : ""}`}
    >
      Certification
    </Link>
    <Link
      to="/pricing"
       className={`nav-text ${isActive("/pricing") ? "text-inkaer-blue font-semibold" : ""}`}
    >
      Pricing
    </Link>
    <Button
      asChild
      variant="ghost"
      className="nav-text"
    >
      <Link to="/sign-in">Sign In</Link>
    </Button>
    <Button
      asChild
      className="bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
    >
      <Link to="/sign-up">Get Started</Link>
    </Button>
  </div>
   );
}
export default DesktopNav;
