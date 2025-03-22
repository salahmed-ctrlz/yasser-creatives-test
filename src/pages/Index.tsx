import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Layout from '@/components/Layout'
import { Link } from 'react-router-dom'
import "../styles/fonts.css";

// Sample project data
const projectsData = [
  { id: 1, title: "Hana", image: "https://via.placeholder.com/600x450", category: "Brand Identity", backgroundColor: "bg-green-800" },
  { id: 2, title: "Stacks", image: "https://via.placeholder.com/600x450", category: "Logo Design", backgroundColor: "bg-teal-500" },
  { id: 3, title: "Eco Alliance", image: "https://via.placeholder.com/600x450", category: "Brand System", backgroundColor: "bg-green-600" },
  { id: 4, title: "Red Maple", image: "https://via.placeholder.com/600x450", category: "Visual Identity", backgroundColor: "bg-red-600" },
  { id: 5, title: "Magic Lemos", image: "https://via.placeholder.com/600x450", category: "Brand Identity", backgroundColor: "bg-pink-500" },
  { id: 6, title: "Phoenix Media", image: "https://via.placeholder.com/600x450", category: "Logo Design", backgroundColor: "bg-orange-500" },
];

// Create LOGO text placeholders
const logoPlaceholders = Array(10).fill(0).map((_, i) => ({
  id: i + 1,
  text: "LOGO"
}));

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Creative
              <br />
              Design
              <br />
              Studio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              We craft meaningful brand experiences through thoughtful design and strategic thinking.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/selected-work"
                className="inline-flex items-center space-x-2 text-lg hover:opacity-80 transition-opacity"
              >
                <span>View Our Work</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-muted mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-muted-foreground">Branding / Digital Design</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We help brands stand out through strategic design thinking and creative execution.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-lg hover:opacity-80 transition-opacity"
              >
                <span>Learn More</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                'Brand Strategy',
                'Visual Identity',
                'Digital Design',
                'Art Direction'
              ].map((service) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="p-6 border rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{service}</h3>
                  <p className="text-muted-foreground">
                    Creating meaningful and lasting impressions through thoughtful design solutions.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start a Project</h2>
          <p className="text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            Let's create something meaningful together. We're ready to bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-lg border px-8 py-3 rounded-full hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            <span>Get in Touch</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Index
