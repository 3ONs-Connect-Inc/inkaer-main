import { Link } from "react-router-dom";
import Button from "@/components/ui/button";

const DesktopNav = () => (
  <div className="flex items-center gap-6">
    <Link
      to="/how-it-works"
      className="nav-text"
    >
      How It Works
    </Link>
    <Link
      to="/rank"
      className="nav-text"
    >
      Rank
    </Link>
    <Link
      to="/certification"
      className="nav-text"
    >
      Certification
    </Link>
    <Link
      to="/pricing"
      className="nav-text"
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

export default DesktopNav;
