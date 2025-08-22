import { Menu, X } from "lucide-react";
import DesktopNav from "./DesktopNav";
import Logo from "../Logo";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GuestNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeHash, setActiveHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // When location changes, if there’s a hash, scroll into view
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay so DOM is ready
      }
    }
  }, [location]);

  const isActive = (hash: string) => activeHash === hash;

  const handleScroll = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // already on homepage → just scroll
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.location.hash = hash;
      }
       setMobileMenuOpen(false); // close mobile menu after click
    } else {
      // on another page → navigate to homepage with hash
      navigate(`/${hash}`);
    }
  };
 
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-7xl  padding">
        <div className="flex h-16 items-center  justify-between">
          <Logo />

          <DesktopNav isActive={isActive} handleScroll={handleScroll} />

          <div className="lg:hidden mt-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md ml-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <MobileNav
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isActive={isActive}
          handleScroll={handleScroll}
        />
      </nav>
    </header>
  );
};

export default GuestNavbar;
