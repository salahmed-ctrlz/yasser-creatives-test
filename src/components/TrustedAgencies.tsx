import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { LogoBlack, LogoWhite } from '@/lib/images';

// Agency data
const agencies = [
  {
    id: 1,
    name: "Agency 1",
    logoLight: LogoBlack,
    logoDark: LogoWhite
  },
  {
    id: 2,
    name: "Agency 2",
    logoLight: LogoBlack,
    logoDark: LogoWhite
  },
  {
    id: 3,
    name: "Agency 3",
    logoLight: LogoBlack,
    logoDark: LogoWhite
  },
  {
    id: 4,
    name: "Agency 4",
    logoLight: LogoBlack,
    logoDark: LogoWhite
  }
];

const TrustedAgencies = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % agencies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const calculatePosition = (index: number) => {
    const radius = isMobile ? 120 : 250; // Smaller radius for mobile
    const angleStep = (2 * Math.PI) / agencies.length;
    const currentAngle = (currentIndex * angleStep);
    const itemAngle = (index * angleStep) - currentAngle;
    
    return {
      x: Math.sin(itemAngle) * radius,
      z: Math.cos(itemAngle) * radius - radius,
      scale: isMobile 
        ? (Math.cos(itemAngle) * 0.3 + 0.7) // Less scale difference on mobile
        : (Math.cos(itemAngle) * 0.5 + 0.5),
      opacity: Math.cos(itemAngle) * 0.5 + 0.5,
    };
  };

  return (
    <section className="py-10 md:py-20 relative overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0 backdrop-blur-xl bg-gray-50/30 dark:bg-gray-900/30" />
      
      <div className="container-custom relative z-20">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-['Helvetica Now Display'] text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-black dark:bg-white text-white dark:text-black leading-none px-[0.05em]">
            Trusted Agencies
          </span>
        </motion.h2>

        {/* 3D Carousel Container */}
        <div 
          className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px] perspective-1000"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {agencies.map((agency, index) => {
              const position = calculatePosition(index);
              return (
                <motion.div
                  key={agency.id}
                  className="absolute"
                  animate={{
                    x: position.x,
                    z: position.z,
                    scale: position.scale,
                    opacity: position.opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 1,
                  }}
                  style={{
                    zIndex: Math.round(position.scale * 100),
                    transform: `translateX(-50%) translateZ(${position.z}px)`,
                  }}
                >
                  <img
                    src={theme === 'dark' ? agency.logoDark : agency.logoLight}
                    alt={agency.name}
                    className={`h-16 md:h-32 w-auto object-contain transition-all duration-300
                      ${index === currentIndex ? 'filter-none' : 'blur-[1px]'}
                      ${isMobile ? 'max-w-[120px]' : ''}`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
            {agencies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                }}
                className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-black dark:bg-white w-4 md:w-8' 
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedAgencies; 