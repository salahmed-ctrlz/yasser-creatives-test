import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollProgress from '@/components/ui/scroll-progress';
import { useLanguage } from '@/contexts/LanguageContext';
<<<<<<< HEAD
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
=======
import { translations } from '@/lib/translations';
import LogoGrid from '@/components/LogoGrid';
>>>>>>> 6008eb6 (Initial commit)
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10, Logo11, Logo12 } from '@/lib/images';

const logos = [
  { id: 1, image: Logo1 },
  { id: 2, image: Logo2 },
  { id: 3, image: Logo3 },
  { id: 4, image: Logo4 },
  { id: 5, image: Logo5 },
  { id: 6, image: Logo6 },
  { id: 7, image: Logo7 },
  { id: 8, image: Logo8 },
  { id: 9, image: Logo9 },
  { id: 10, image: Logo10 },
  { id: 11, image: Logo11 },
  { id: 12, image: Logo12 },
];

const LogoGallery: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-20 px-4">
      <ScrollProgress />
      <div className="container-custom">
        <motion.h1 
          className={`text-4xl md:text-5xl font-${language === 'ar' ? '["At Hauss Arabic"]' : '["Helvetica Now Display"]'} font-bold mb-12 text-center`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('logos.title')}
        </motion.h1>
        <motion.p 
          className={`text-xl text-muted-foreground mb-12 text-center font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('logos.subtitle')}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: loading ? 0 : 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="aspect-square relative overflow-hidden rounded-lg bg-muted"
            >
              <motion.img
                src={logo.image}
                alt={`${t('logos.title')} ${logo.id}`}
                className="w-full h-full object-contain p-0 transition-transform duration-300 hover:scale-110 hover:rotate-3"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoGallery
