import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
<<<<<<< HEAD
import { Sun, Moon, Menu, Instagram, Facebook, Linkedin, MessageCircle, X, Globe } from 'lucide-react';
import YasserSebtiCarousel from '@/components/YasserSebtiCarousel';
=======
import { Sun, Moon, Menu, Instagram, X, Globe } from 'lucide-react';
>>>>>>> 6008eb6 (Initial commit)
import CustomCursor from '@/components/CustomCursor';
import MobileMenu from '@/components/MobileMenu';
import InfiniteCarousel from '@/components/InfiniteCarousel';
import ScrollIndicator from '@/components/ScrollIndicator';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { LogoWhite, LogoBlack } from '@/lib/images';

const MainLayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

<<<<<<< HEAD
  const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <Link
      to={to}
      className="relative group perspective"
    >
      <div className="relative transform-style-3d transition-transform duration-500 group-hover:rotate-x-180">
        <span className="absolute inset-0 flex items-center justify-center text-base font-medium py-3 px-6 backface-hidden">
          {children}
        </span>
        <span className="absolute inset-0 flex items-center justify-center text-base font-medium py-3 px-6 bg-foreground text-background rotate-x-180 backface-hidden">
          {children}
        </span>
      </div>
    </Link>
  );

=======
>>>>>>> 6008eb6 (Initial commit)
  return (
    <>
      <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <CustomCursor />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        <ScrollIndicator />
        
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-[#EBEBEB]">
          <div className="container-custom px-4">
            <div className="flex items-center h-[72px] relative">
              {/* Logo - Fixed Left */}
              <Link to="/" className="flex items-center absolute left-4 md:left-0">
                {theme === 'dark' ? (
                  <img src={LogoWhite} alt="Yasser Sebti Logo" className="h-8 md:h-10" />
                ) : (
                  <img src={LogoBlack} alt="Yasser Sebti Logo" className="h-8 md:h-10" />
                )}
              </Link>

              {/* Desktop Navigation - Centered with RTL/LTR support */}
              <nav className={`hidden md:flex items-center gap-8 mx-auto ${language === 'ar' ? 'rtl' : 'ltr'}`}>
                <Link 
                  to="/" 
                  className={`text-base relative after:absolute after:bottom-0 ${language === 'ar' ? 'after:right-0' : 'after:left-0'} after:w-full after:h-[1px] after:bg-current after:origin-${language === 'ar' ? 'right' : 'left'} after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    location.pathname === '/' ? 'after:scale-x-100' : ''
                  }`}
                >
                  {t('nav.home')}
                </Link>
                <Link 
                  to="/selected-work"
                  className={`text-base relative after:absolute after:bottom-0 ${language === 'ar' ? 'after:right-0' : 'after:left-0'} after:w-full after:h-[1px] after:bg-current after:origin-${language === 'ar' ? 'right' : 'left'} after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    location.pathname === '/selected-work' ? 'after:scale-x-100' : ''
                  }`}
                >
                  {t('nav.selectedWork')}
                </Link>
                <Link 
                  to="/logos"
                  className={`text-base relative after:absolute after:bottom-0 ${language === 'ar' ? 'after:right-0' : 'after:left-0'} after:w-full after:h-[1px] after:bg-current after:origin-${language === 'ar' ? 'right' : 'left'} after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    location.pathname === '/logos' ? 'after:scale-x-100' : ''
                  }`}
                >
                  {t('nav.logos')}
                </Link>
                <Link 
                  to="/about"
                  className={`text-base relative after:absolute after:bottom-0 ${language === 'ar' ? 'after:right-0' : 'after:left-0'} after:w-full after:h-[1px] after:bg-current after:origin-${language === 'ar' ? 'right' : 'left'} after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    location.pathname === '/about' ? 'after:scale-x-100' : ''
                  }`}
                >
                  {t('nav.about')}
                </Link>
                <Link 
                  to="/contact"
                  className={`text-base relative after:absolute after:bottom-0 ${language === 'ar' ? 'after:right-0' : 'after:left-0'} after:w-full after:h-[1px] after:bg-current after:origin-${language === 'ar' ? 'right' : 'left'} after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    location.pathname === '/contact' ? 'after:scale-x-100' : ''
                  }`}
                >
                  {t('nav.contact')}
                </Link>
              </nav>

              {/* Mobile Controls - Fixed Right */}
              <div className="flex items-center gap-3 absolute right-4 md:hidden ltr">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  className="p-1.5 hover:opacity-70 transition-all"
                  aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
                >
                  <Globe className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-1.5 hover:opacity-70 transition-all"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>

                <button
                  className="p-1.5 hover:opacity-70 transition-all"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  <motion.div
                    animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </motion.div>
                </button>
              </div>

              {/* Desktop Controls - Fixed Right */}
              <div className="hidden md:flex items-center gap-4 absolute right-0 ltr">
                {/* Social Icons */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 flex items-center"
                >
                  <Instagram className="w-5 h-5" />
                </a>
<<<<<<< HEAD
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 flex items-center"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                </a>
=======
>>>>>>> 6008eb6 (Initial commit)

                {/* Theme and Language Controls */}
                <button
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  className="p-2 hover:opacity-70 transition-all hover:scale-110"
                  aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
                >
                  <Globe className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 hover:opacity-70 transition-all hover:scale-110"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>
      </div>

      {/* Footer section - Outside of RTL/LTR container */}
      <div className="bg-background text-foreground ltr">
        {/* Infinite Carousel */}
        <div className="border-t border-[#EBEBEB]">
          <InfiniteCarousel speed={20} className="py-6">
            <div className="flex items-center gap-4 px-4">
              <span className="text-2xl font-medium whitespace-nowrap">Yasser Creatives</span>
              <span className="text-2xl">•</span>
            </div>
          </InfiniteCarousel>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MainLayoutContent>{children}</MainLayoutContent>;
};

export default MainLayout;