import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollProgressProps {
  className?: string
  color?: string
}

const ScrollProgress = ({
  className,
  color = 'hsl(var(--primary))',
}: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 right-0 h-1 z-50 origin-left',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        backgroundColor: color,
        scaleX,
      }}
    />
  )
}

export default ScrollProgress