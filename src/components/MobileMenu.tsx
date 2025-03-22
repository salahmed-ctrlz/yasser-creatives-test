import React from 'react';
import { Link } from 'react-router-dom';
import { X, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/selected-work', label: 'Selected Work' },
    { path: '/logos', label: 'Logos' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com',
    },
    {
      name: 'Behance',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
      ),
      url: 'https://behance.net',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://facebook.com',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com',
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      url: 'https://wa.me/your-number',
    },
  ];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
        >
          <motion.div 
            className="container-custom h-full flex flex-col"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex justify-between items-center h-[72px]">
              <Link to="/" onClick={onClose} className="text-sm font-medium">
                Yasser Sebti
              </Link>
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 hover:bg-foreground/10 active:bg-foreground/20 transition-all"
                aria-label="Close menu"
              >
                <span className="text-sm font-medium">Close</span>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="flex-grow flex flex-col justify-center -mt-16">
              <motion.div 
                className="grid gap-8"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {menuItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 }
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="text-4xl md:text-5xl font-medium hover:opacity-50 transition-opacity text-center block"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center gap-6 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-50 transition-opacity"
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
