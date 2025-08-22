
import React, { useEffect, useState } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logoLight } from '@/assets';

// Custom X icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const Footer: React.FC = () => {
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
    } else {
      // on another page → navigate to homepage with hash
      navigate(`/${hash}`);
    }
  };
 

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="mx-auto max-w-7xl padding">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Logo and tagline */}
          <div className="lg:max-w-md">
            <Link to="/">
              <img
                className="h-8 w-auto mb-4"
                src={logoLight}
                alt="Inkaer"
              />
            </Link>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              Hiring the best engineers, made simple.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link to="https://instagram.com/inkaerhq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="https://facebook.com/inkaerhq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="https://x.com/inkaerhq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <XIcon className="h-5 w-5" />
              </Link>
              <Link to="https://linkedin.com/company/inkaer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Right side navigation */}
          <div className="flex gap-16">
            {/* Product */}
            <div>
              <h3 className="text-sm sm:text-base text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-400">
                <li>
                  <a href="#how-it-works" 
                  onClick={(e) => handleScroll(e, "#how-it-works")}
                  className={`hover:text-white transition-colors
                            ${isActive("#how-it-works")
                    ? "text-blue-700 font-semibold"
                    : "text-gray-400 hover:text-gray-200 "}`}>
                    How It Works</a></li>
                <li>
                  <a href="#features"   onClick={(e) => handleScroll(e, "#features")}
                  className={`hover:text-white transition-colors
                    ${isActive("#features")
                    ? "text-blue-700 font-semibold"
                    : "text-gray-400 hover:text-gray-200 "}`}>
                    Benefits</a></li>
                <li>
                  <a href="#pricing"   onClick={(e) => handleScroll(e, "#pricing")}
                  className={`hover:text-white transition-colors
                    ${isActive("#pricing")
                    ? "text-blue-700 font-semibold"
                    : "text-gray-400 hover:text-gray-200 "}`}>
                    Pricing</a></li>
                <li>
                  <a href="#faq"   onClick={(e) => handleScroll(e,"#faq")}
                  className={`hover:text-white transition-colors
                  ${isActive("#faq")
                    ? "text-blue-700 font-semibold"
                    : "text-gray-400 hover:text-gray-200 "}`}>
                    FAQ</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-white text-sm sm:text-base font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t text-sm sm:text-base border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2025 Inkaer. All rights reserved.</p>
          <div className="flex flex-col xs:flex-row space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
