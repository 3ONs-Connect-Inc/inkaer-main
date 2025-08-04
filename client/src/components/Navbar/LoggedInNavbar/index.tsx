

import  Button  from '@/components/ui/button';
import Logo from '../Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Menu, Crown, Star} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import ProfileSearchBar from '@/components/ProfileSearchBar';
import { Link } from 'react-router-dom';

const LoggedInNavbar = () => {
    // Mock user data - in real app this would come from state/context
  const userRank = "Advanced";
  const userPoints = 2450;


   return (
    <section className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 py-2">
      <div className="px-[1rem] w-full">
         <nav className="hidden justify-between xl:flex">
          <Logo />
          <div className="hidden sm:hidden md:block flex-1 max-w-xs">
            <ProfileSearchBar />
          </div>
          <DesktopNav />
        </nav>
        
        <div className="block xl:hidden">
          <div className="flex items-center justify-between gap-2 w-full">
          <Logo />
              <div className="hidden sm:hidden md:block flex-1 max-w-xs">
              <ProfileSearchBar />
            </div>
          
            
            {/* Mobile Rank and Points - Now Clickable */}
           <div className="hidden sm:hidden md:block  max-w-xs">
            <Link to="/user-rank-dashboard" className="flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 hover:shadow-md transition-all duration-200 flex-shrink-0">
              <div className="flex items-center gap-1">
                <Crown className="w-3 h-3 text-inkaer-blue" />
                <span className="text-xs font-sora font-semibold text-inkaer-blue">{userRank}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-xs font-sora font-semibold text-gray-700">{userPoints.toLocaleString()}</span>
              </div>
            </Link>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="text-gray-700 hover:text-inkaer-blue transition-colors duration-200">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-white" aria-describedby="mobile nav">
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

export default LoggedInNavbar;
