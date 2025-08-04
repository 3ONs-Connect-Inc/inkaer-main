import { Link } from "react-router-dom";
import Button from "@/components/ui/button";
import ProfileSearchBar from "@/components/ProfileSearchBar";

const MobileNav = () => (
  <div className="my-6 flex flex-col gap-6">
    <div className="block md:hidden">
      <ProfileSearchBar />
    </div>
    <div className="space-y-4">
      <Link
        to="/how-it-works"
        className="block nav-text py-2"
      >
        How It Works
      </Link>
      <Link
        to="/rank"
        className="block nav-text py-2"
      >
        Rank
      </Link>
      <Link
        to="/certification"
        className="block nav-text py-2"
      >
        Certification
      </Link>
      <Link
        to="/pricing"
        className="block nav-text py-2"
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

export default MobileNav;
