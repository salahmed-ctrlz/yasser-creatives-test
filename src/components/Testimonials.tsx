import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Through their work, we were able to transform our brand identity. The attention to detail and creative vision exceeded our expectations!",
    author: "Sarah Chen",
    position: "Creative Director",
    company: "LOGO",
    image: "/placeholder-avatar.jpg"
  },
  {
    quote: "Their minimalist approach to design helped us cut through the noise and really connect with our audience. Exceptional work!",
    author: "Michael Torres",
    position: "Marketing Lead",
    company: "LOGO",
    image: "/placeholder-avatar.jpg"
  },
  {
    quote: "The level of professionalism and creativity brought to our project was outstanding. They truly understood our vision.",
    author: "Emma Thompson",
    position: "Brand Manager",
    company: "LOGO",
    image: "/placeholder-avatar.jpg"
  },
  {
    quote: "A game-changing collaboration that helped us redefine our market presence. Their design philosophy is simply brilliant.",
    author: "David Kim",
    position: "CEO",
    company: "LOGO",
    image: "/placeholder-avatar.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-12">
                  <svg className="w-12 h-12 mx-auto mb-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11.8182V21H0V14.0909C0 10.2545 1.35 6.76364 4.05 3.61818C6.75 0.472727 9.8 -0.545455 13.2 0.563636L11.1 4.74545C9.7 5.39091 8.6 6.38182 7.8 7.71818C7 9.05455 6.6 10.4 6.6 11.7545L10 11.8182ZM24 11.8182V21H14V14.0909C14 10.2545 15.35 6.76364 18.05 3.61818C20.75 0.472727 23.8 -0.545455 27.2 0.563636L25.1 4.74545C23.7 5.39091 22.6 6.38182 21.8 7.71818C21 9.05455 20.6 10.4 20.6 11.7545L24 11.8182Z" fill="currentColor"/>
                  </svg>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-medium max-w-4xl mx-auto mb-12">
                    {testimonials[current].quote}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-medium mb-1">{testimonials[current].author}</h4>
                  <p className="text-muted-foreground mb-2">{testimonials[current].position}</p>
                  <p className="font-medium">{testimonials[current].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={prev}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrent(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current ? 'bg-foreground w-6' : 'bg-muted-foreground'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;