import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import { ContactForm } from '@/components';
import CopyToClipboard from '@/components/ui/copy-to-clipboard';
import HoverCard from '@/components/ui/hover-card';
import ScrollProgress from '@/components/ui/scroll-progress';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com',
      description: 'Follow my creative journey and latest works',
    },
    {
      name: 'Behance',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
      ),
      url: 'https://behance.net',
      description: 'View my portfolio and design projects',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com',
      description: 'Connect with me professionally',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://facebook.com',
      description: 'Follow my updates and news',
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      url: 'https://wa.me/your-number',
      description: 'Chat with me directly',
    },
  ];

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <motion.section 
        className="pt-32 pb-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="container-custom">
          <motion.div variants={fadeUpVariant}>
            <h1 className={`text-6xl md:text-7xl font-${language === 'ar' ? '["At Hauss Arabic"]' : '["Helvetica Now Display"]'} font-bold mb-8`}>
              {t('contact.title')}
            </h1>
            <p className={`text-xl text-muted-foreground font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            variants={fadeUpVariant}
            className="flex flex-col md:flex-row gap-8 items-start mb-16"
          >
            <div className="w-full md:w-1/2">
              <div className="p-8 rounded-lg bg-secondary/50 backdrop-blur-sm">
                <h2 className="text-2xl font-medium mb-6">Quick Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <CopyToClipboard 
                      text="contact@yassersebti.com"
                      className="text-lg hover:text-primary transition-colors"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <CopyToClipboard 
                      text="business@yassersebti.com"
                      className="text-lg hover:text-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <HoverCard
                        key={social.name}
                        content={
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">{social.description}</p>
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                            >
                              Visit <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        }
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors"
                        >
                          {social.icon}
                          <span className="font-medium">{social.name}</span>
                        </a>
                      </HoverCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
