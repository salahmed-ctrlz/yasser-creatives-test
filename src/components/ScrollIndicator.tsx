import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollIndicator = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showIndicator, setShowIndicator] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      // Show indicator after some scroll on desktop, or at bottom on mobile
      setShowIndicator(isMobile ? isBottom : currentScrollY > 100);
      setIsAtBottom(isBottom);
      setScrollDirection(isScrollingDown ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobile]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Arrow = ({ direction }: { direction: 'up' | 'down' }) => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: direction === 'down' ? 'rotate(180deg)' : 'none' }}
      className="scale-150"
    >
      <path
        d="M30 5 L30 55 M30 5 L10 25 M30 5 L50 25"
        stroke="currentColor"
        strokeWidth="0.75"
        fill="none"
      />
    </svg>
  );

  return (
    <AnimatePresence>
      {showIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed right-12 bottom-12 z-40 md:right-12 right-4 md:bottom-12 bottom-4"
        >
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={scrollToTop}
            className="flex flex-col items-center gap-4 text-foreground/90 hover:text-foreground transition-all duration-300"
          >
            <Arrow direction={isMobile ? 'up' : (scrollDirection || 'up')} />
            {isAtBottom && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs font-light tracking-wider uppercase"
              >
                Back to top
              </motion.span>
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;
