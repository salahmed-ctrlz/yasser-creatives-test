import { Variants } from 'framer-motion'

// Fade Up Animation
export const fadeUpVariant: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Stagger Children Animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

// Scale Animation
export const scaleVariant: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Slide In Animation
export const slideInVariant: Variants = {
  hidden: (direction: 'left' | 'right' = 'right') => ({
    opacity: 0,
    x: direction === 'left' ? -50 : 50
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Text Reveal Animation
export const textRevealVariant: Variants = {
  hidden: {
    y: "100%",
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Hover Scale Animation
export const hoverScaleVariant: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Image Reveal Animation
export const imageRevealVariant: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(100% 0% 0% 0%)"
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Page Transition Animation
export const pageTransitionVariant: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4
    }
  }
} 