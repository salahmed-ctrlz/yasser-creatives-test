import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollProgress from '@/components/ui/scroll-progress';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <ScrollProgress />
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-6xl md:text-7xl font-${language === 'ar' ? '["At Hauss Arabic"]' : '["Helvetica Now Display"]'} font-bold mb-8`}>
            404
          </h1>
          <p className={`text-xl text-muted-foreground mb-8 font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>
            {t('notFound.message')}
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <span>{t('notFound.backHome')}</span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound;
