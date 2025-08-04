import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "@/components/ui/button";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Logo from "../Logo";
import ProfileSearchBar from "@/components/ProfileSearchBar";

const GuestNavbar = () => {
  return (
    <section className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-2">
      <div className="px-[1rem] w-full">
        {/* Desktop Navigation */}
        <nav className="hidden justify-between xl:flex">
          <Logo />
          <div className="hidden sm:hidden md:block flex-1 max-w-xs">
            <ProfileSearchBar />
          </div>
          <DesktopNav />
        </nav>

        {/* Mobile Navigation */}
        <div className="block xl:hidden">
          <div className="flex items-center  justify-between w-full">
            <Logo />
            <div className="hidden sm:hidden md:block flex-1 max-w-xs">
              <ProfileSearchBar />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-3 text-gray-700 hover:text-inkaer-blue transition-colors duration-200"
                >
                  <Menu className="size-4 " />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                  <SheetDescription className="sr-only" />
                </SheetHeader>
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestNavbar;
