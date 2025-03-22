import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import ScrollProgress from '@/components/ui/scroll-progress';
import LazyLoad from '../components/LazyLoad';
import TrustedAgencies from '@/components/TrustedAgencies';
import { useLanguage } from '@/contexts/LanguageContext';
import { FlashPlumberLogo, TayssirLogo, TRLogo, IliaLogo, LAMALogo, OrderLogo, Prototype } from '@/lib/images';

// Sample project data
const projectsData = [
  { id: 1, title: "Flash Plumber", image: FlashPlumberLogo, category: "Brand Identity" },
  { id: 2, title: "Tayssir", image: TayssirLogo, category: "Brand Identity" },
  { id: 3, title: "TR", image: TRLogo, category: "Logo Design" },
  { id: 4, title: "Ilia", image: IliaLogo, category: "Visual Identity" },
  { id: 5, title: "LAMA Sports", image: LAMALogo, category: "Brand Identity" },
  { id: 6, title: "Order", image: OrderLogo, category: "Logo Design" },
];

// Sample featured logos
const featuredLogos = [
  { id: 1, image: "/logos/logo1.svg", alt: "LOGO" },
  { id: 2, image: "/logos/logo1.svg", alt: "LOGO" },
  { id: 3, image: "/logos/logo1.svg", alt: "LOGO" },
  { id: 4, image: "/logos/logo1.svg", alt: "LOGO" },
  { id: 5, image: "/logos/logo1.svg", alt: "LOGO" },
  { id: 6, image: "/logos/logo1.svg", alt: "LOGO" },
  { id: 7, image: "/logos/logo1.svg", alt: "LOGO" },
  { id: 8, image: "/logos/logo1.svg", alt: "LOGO" },
  { id: 9, image: "/logos/logo1.svg", alt: "LOGO" },
  { id: 10, image: "/logos/logo1.svg", alt: "LOGO" },
];

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      {/* Hero Section */}
      <section className="px-4 mb-16 mt-32">
        <LazyLoad>
          <motion.h1 
            className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-${language === 'ar' ? '["At Hauss Arabic"]' : '["Helvetica Now Display"]'} font-black max-w-5xl mx-auto text-center leading-tight md:leading-tight`}
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            {t('home.hero')}
          </motion.h1>
        </LazyLoad>
      </section>
      
      {/* Featured Projects - Grid layout */}
      <section className="mb-32">
        <LazyLoad>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {projectsData.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="block">
                <motion.div
                  className="aspect-[1/1] relative"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 hover:opacity-90"
                      initial={{ scale: 0.9 }} 
                      animate={{ scale: 1 }} 
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </LazyLoad>
      </section>

      {/* Replace the old Featured Logos section with the new TrustedAgencies component */}
      <TrustedAgencies />

      {/* Blueprint Section */}
      <section className="mb-32 px-4 bg-secondary py-32">
        <LazyLoad>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 
                  className={`text-4xl font-${language === 'ar' ? '["At Hauss Arabic"]' : '["Helvetica Now Display"]'} mb-8`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block bg-black text-white leading-none px-[0.05em]">{t('home.process.title')}</span>
                </motion.h2>
                <motion.p 
                  className={`text-lg text-muted-foreground mb-8 font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t('home.process.description')}
                </motion.p>
              </div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img 
                  src={Prototype} 
                  alt="Logo Design Blueprint" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </LazyLoad>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <LazyLoad>
          <div className="container-custom">
            <motion.div 
              className="flex justify-center mb-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl font-${language === 'ar' ? '["At Hauss Arabic"]' : '["Helvetica Now Display"]'}`}>
                <span className="inline-block bg-black text-white leading-none px-[0.05em]">{t('home.testimonials.title')}</span>
              </h2>
            </motion.div>
            <Testimonials />
          </div>
        </LazyLoad>
      </section>
    </div>
  );
};

export default Home;