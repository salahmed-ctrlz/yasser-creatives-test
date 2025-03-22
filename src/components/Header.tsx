import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleClick = () => {
    if (location.pathname === window.location.pathname) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="px-8 py-8 flex justify-between items-center">
        {/* Logo - Left */}
        <div className="w-1/4">
          <Link to="/" onClick={handleClick} className="text-xl font-['Helvetica Now']">
            LOGO
          </Link>
        </div>

        {/* Center Space - Empty */}
        <div className="w-1/4" />
        
        {/* Navigation and Social - Right */}
        <div className="w-2/4">
          <div className="flex justify-end items-center">
            <nav className="hidden md:flex items-center gap-12">
              <Link to="/" onClick={handleClick} className="text-base font-['Hauss Arabic'] hover-underline py-1">
                Home
              </Link>
              <Link to="/selected-work" onClick={handleClick} className="text-base font-['Hauss Arabic'] hover-underline py-1">
                Selected Work
              </Link>
              <Link to="/logos" onClick={handleClick} className="text-base font-['Hauss Arabic'] hover-underline py-1">
                Logo Gallery
              </Link>
              <Link to="/about" onClick={handleClick} className="text-base font-['Hauss Arabic'] hover-underline py-1">
                About
              </Link>
              <Link to="/contact" onClick={handleClick} className="text-base font-['Hauss Arabic'] hover-underline py-1">
                Contact
              </Link>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover-underline py-1">
                <Instagram size={20} />
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-base font-['Hauss Arabic'] hover-underline py-1">
                Be
              </a>
            </nav>
            <button 
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
