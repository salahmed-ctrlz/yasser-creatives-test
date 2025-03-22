import React from 'react'
import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer, imageRevealVariant, textRevealVariant } from '@/lib/animations'
import ScrollProgress from '@/components/ui/scroll-progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Portrait } from '@/lib/images';

const About = () => {
  const { t, language } = useLanguage();

  const services = t('about.services.items') as string[];

  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <ScrollProgress />
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            variants={textRevealVariant}
            className="overflow-hidden"
          >
            <h1 className={`text-6xl md:text-7xl font-${language === 'ar' ? '["At Hauss Arabic"]' : '["Helvetica Now Display"]'} font-bold mb-8`}>
              {t('about.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Portrait Image */}
            <motion.div
              variants={imageRevealVariant}
              className="relative lg:sticky lg:top-32 w-full aspect-[2/3] max-w-xl mx-auto"
            >
              <div className="relative w-full h-full group">
                <img
                  src={Portrait}
                  alt="Portrait"
                  className="w-full h-full object-cover rounded-lg transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0 group-hover:brightness-110"
                  style={{ 
                    filter: 'contrast(1.1) sepia(0.2) brightness(0.95) hue-rotate(-5deg)',
                    transition: 'all 0.7s ease-in-out'
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg mix-blend-overlay"
                  whileHover={{ 
                    backgroundColor: ['rgba(0,0,0,0.15)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.15)'],
                    transition: { duration: 2.5, repeat: Infinity }
                  }}
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-700" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeUpVariant}>
                <h2 className={`text-2xl font-medium mb-4 font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>{t('about.background.title')}</h2>
                <p className={`text-muted-foreground font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>
                  {t('about.background.content')}
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <h2 className={`text-2xl font-medium mb-4 font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>{t('about.philosophy.title')}</h2>
                <p className={`text-muted-foreground font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>
                  {t('about.philosophy.content')}
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <h2 className={`text-2xl font-medium mb-4 font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>{t('about.process.title')}</h2>
                <p className={`text-muted-foreground font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>
                  {t('about.process.content')}
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant}>
                <h2 className={`text-2xl font-medium mb-4 font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>{t('about.services.title')}</h2>
                <ul className={`space-y-2 text-muted-foreground font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>
                  {services.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
