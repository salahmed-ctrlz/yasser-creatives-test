import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollProgress from '@/components/ui/scroll-progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { FlashPlumberLogo, TayssirLogo, TRLogo, IliaLogo, LAMALogo, OrderLogo } from '@/lib/images';

// Extended project data with case studies
const projectsData = [
  {
    id: 1,
    title: "Flash Plumber",
    subtitle: "Plumbing Services",
    category: "Brand Identity",
    year: "2024",
    client: "Flash Plumber",
    services: ["Brand Strategy", "Visual Identity", "Logo Design"],
    image: FlashPlumberLogo,
    description: "A modern and authentic brand identity for a plumbing service.",
    challenge: "Create a brand identity that communicates reliability and professionalism.",
    solution: "Developed a clean and modern visual identity that resonates with the target audience.",
    impact: "Increased customer inquiries by 30% within the first month.",
  },
  {
    id: 2,
    title: "Tayssir",
    subtitle: "Financial Services",
    category: "Brand Identity",
    year: "2024",
    client: "Tayssir",
    services: ["Brand Strategy", "Visual Identity", "Website Design"],
    image: TayssirLogo,
    description: "A professional brand identity for a financial services company.",
    challenge: "Establish trust and credibility in a competitive market.",
    solution: "Created a sophisticated visual identity that reflects expertise and reliability.",
    impact: "Achieved a 50% increase in client retention rates.",
  },
  {
    id: 3,
    title: "TR",
    subtitle: "Tech Solutions",
    category: "Logo Design",
    year: "2024",
    client: "TR Technologies",
    services: ["Logo Design", "Brand Guidelines"],
    image: TRLogo,
    description: "A sleek and modern logo for a tech solutions provider.",
    challenge: "Design a logo that stands out in the tech industry.",
    solution: "Developed a minimalist logo that embodies innovation and technology.",
    impact: "Increased brand recognition by 40% within six months.",
  },
  {
    id: 4,
    title: "Ilia",
    subtitle: "Creative Agency",
    category: "Visual Identity",
    year: "2024",
    client: "Ilia Creative",
    services: ["Brand Identity", "Web Design"],
    image: IliaLogo,
    description: "A vibrant and creative identity for a design agency.",
    challenge: "Create a brand that reflects creativity and innovation.",
    solution: "Developed a bold visual identity that captures the essence of creativity.",
    impact: "Helped secure multiple high-profile clients within the first year.",
  },
  {
    id: 5,
    title: "LAMA Sports",
    subtitle: "Sports Brand",
    category: "Brand Identity",
    year: "2024",
    client: "LAMA Sports",
    services: ["Brand Strategy", "Logo Design"],
    image: LAMALogo,
    description: "A dynamic brand identity for a sports apparel company.",
    challenge: "Create a brand that resonates with athletes and sports enthusiasts.",
    solution: "Developed a vibrant and energetic visual identity that appeals to the target market.",
    impact: "Increased sales by 25% in the first quarter post-launch.",
  },
  {
    id: 6,
    title: "Order",
    subtitle: "Delivery Service",
    category: "Logo Design",
    year: "2024",
    client: "Order Delivery",
    services: ["Logo Design", "Brand Strategy"],
    image: OrderLogo,
    description: "A modern logo for a delivery service.",
    challenge: "Design a logo that conveys speed and reliability.",
    solution: "Created a sleek logo that emphasizes efficiency and trust.",
    impact: "Boosted brand awareness by 35% within three months.",
  },
];

const SelectedWork: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className={`text-5xl md:text-7xl font-${language === 'ar' ? '["At Hauss Arabic"]' : '["Helvetica Now Display"]'} font-bold mb-8`}>
              {language === 'ar' ? 'الأعمال المحددة' : 'Selected Work'}
            </h1>
            <p className={`text-xl md:text-2xl text-muted-foreground max-w-2xl font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>
              {language === 'ar' ? 'مجموعة مختارة من مشاريع هوية العلامة التجارية وتصميم الشعارات.' : 'A curated selection of brand identity projects and logo design work.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-32">
            {projectsData.map((project, index) => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-16 group"
                >
                  <div className="flex items-center">
                    <div>
                      <h2 className={`text-6xl md:text-8xl font-${language === 'ar' ? '["At Hauss Arabic"]' : '["Helvetica Now Display"]'} font-bold mb-4 group-hover:opacity-60 transition-opacity`}>
                        {project.title}
                      </h2>
                      <p className={`text-xl text-muted-foreground font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <motion.div 
                    className="aspect-square rounded-lg overflow-hidden flex items-center justify-center p-0"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-6 font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'ar' ? 'ابدأ مشروعاً' : 'Start a Project'}
          </motion.h2>
          <motion.p 
            className={`text-xl mb-8 opacity-80 max-w-2xl mx-auto font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {language === 'ar' ? 'لديك مشروع في ذهنك؟ دعنا نخلق شيئاً استثنائياً معاً.' : 'Have a project in mind? Let\'s create something extraordinary together.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 text-lg border px-8 py-3 rounded-full hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              <span>{language === 'ar' ? 'تواصل معنا' : 'Get in Touch'}</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SelectedWork
