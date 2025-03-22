import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ScrollProgress from '@/components/ui/scroll-progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { FlashPlumberLogo, TayssirLogo, TRLogo, IliaLogo, LAMALogo, OrderLogo } from '@/lib/images';

// Project data with images
const projectsData = [
  {
    id: 1,
    title: "Flash Plumber",
    subtitle: "Plumbing Services",
    category: "Brand Identity",
    year: "2024",
    client: "Flash Plumber",
    description: "A modern and authentic brand identity for a plumbing service, blending traditional elements with contemporary design.",
    images: [
      FlashPlumberLogo,
      FlashPlumberLogo, // Add more images as needed
    ]
  },
  {
    id: 2,
    title: "Tayssir",
    subtitle: "Financial Services",
    category: "Brand Identity",
    year: "2024",
    client: "Tayssir",
    description: "A professional brand identity for a financial services company.",
    images: [
      TayssirLogo,
      TayssirLogo, // Add more images as needed
    ]
  },
  {
    id: 3,
    title: "TR",
    subtitle: "Tech Solutions",
    category: "Logo Design",
    year: "2024",
    client: "TR Technologies",
    description: "A sleek and modern logo for a tech solutions provider.",
    images: [
      TRLogo,
      TRLogo, // Add more images as needed
    ]
  },
  {
    id: 4,
    title: "Ilia",
    subtitle: "Creative Agency",
    category: "Visual Identity",
    year: "2024",
    client: "Ilia Creative",
    description: "A vibrant and creative identity for a design agency.",
    images: [
      IliaLogo,
      IliaLogo, // Add more images as needed
    ]
  },
  {
    id: 5,
    title: "LAMA Sports",
    subtitle: "Sports Brand",
    category: "Brand Identity",
    year: "2024",
    client: "LAMA Sports",
    description: "A dynamic brand identity for a sports apparel company.",
    images: [
      LAMALogo,
      LAMALogo, // Add more images as needed
    ]
  },
  {
    id: 6,
    title: "Order",
    subtitle: "Delivery Service",
    category: "Logo Design",
    year: "2024",
    client: "Order Delivery",
    description: "A modern logo for a delivery service.",
    images: [
      OrderLogo,
      OrderLogo, // Add more images as needed
    ]
  },
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const currentProject = projectsData.find(p => p.id === Number(id))
  const currentIndex = projectsData.findIndex(p => p.id === Number(id))
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1]
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0]
  const { t, language } = useLanguage()
  
  if (!currentProject) {
    return <div>{t('project.notFound')}</div>
  }

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      {/* Go Back Link */}
      <div className="container-custom py-4">
        <Link to="/selected-work/" className="flex items-center text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
          <span>{t('project.backToWork')}</span>
        </Link>
      </div>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-sm text-muted-foreground mb-4">{currentProject.category}</p>
            <h1 className={`text-6xl md:text-7xl font-${language === 'ar' ? '["At Hauss Arabic"]' : '["Helvetica Now Display"]'} font-bold mb-4`}>
              {currentProject.title}
            </h1>
            <p className="text-xl text-muted-foreground">{currentProject.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className={`text-lg text-muted-foreground font-${language === 'ar' ? '["At Hauss Arabic"]' : ''}`}>
                {currentProject.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium mb-2">{t('project.client')}</h3>
                  <p className="text-muted-foreground">{currentProject.client}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">{t('project.year')}</h3>
                  <p className="text-muted-foreground">{currentProject.year}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-16">
            {currentProject.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="aspect-video relative overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`${currentProject.title} - ${t('project.image')} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-border">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Link
              to={`/project/${prevProject.id}`}
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <span>{t('project.previous')}</span>
            </Link>
            <Link
              to={`/project/${nextProject.id}`}
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>{t('project.next')}</span>
              <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail
