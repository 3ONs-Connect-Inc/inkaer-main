import { Link } from "react-router-dom";
import Button from "@/components/ui/button";
import ProfileSearchBar from "@/components/ProfileSearchBar";

const MobileNav = () => {
   const isActive = (path: string) => location.pathname === path;

  return (
  <div className="my-6 flex flex-col gap-6">
    <div className="block md:hidden">
      <ProfileSearchBar />
    </div>
    <div className="space-y-4">
      <Link
        to="/how-it-works"
         className={`nav-text block py-2 ${isActive("/how-it-works") ? "text-inkaer-blue font-semibold" : ""}`}
      >
        How It Works
      </Link>
      <Link
        to="/rank"
         className={`nav-text block py-2 ${isActive("/rank") ? "text-inkaer-blue font-semibold" : ""}`}
      >
        Rank
      </Link>
      <Link
        to="/certification"
         className={`nav-text block py-2 ${isActive("/certification") ? "text-inkaer-blue font-semibold" : ""}`}
      >
        Certification
      </Link>
      <Link
        to="/pricing"
         className={`nav-text block py-2 ${isActive("/pricing") ? "text-inkaer-blue font-semibold" : ""}`}
      >
        Pricing
      </Link>
    </div>
    <div className="flex flex-col gap-3">
      <Button asChild variant="outline">
        <Link to="/sign-in" className="font-sora">
          Sign In
        </Link>
      </Button>
      <Button
        asChild
        className="bg-inkaer-blue hover:bg-inkaer-dark-blue text-white font-sora font-semibold py-3 rounded-full"
      >
        <Link to="/sign-up">Get Started</Link>
      </Button>
    </div>
  </div>
 );
}
export default MobileNav;
