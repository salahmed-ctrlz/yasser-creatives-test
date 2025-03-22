import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface HoverCardProps {
  children: React.ReactNode
  content: React.ReactNode
  className?: string
  contentClassName?: string
  delay?: number
}

const HoverCard = ({
  children,
  content,
  className,
  contentClassName,
  delay = 0.1,
}: HoverCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      className={cn('relative inline-block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, delay }}
            className={cn(
              'absolute z-50 p-4 rounded-lg bg-background border shadow-lg',
              'min-w-[200px] max-w-[300px]',
              contentClassName
            )}
            style={{
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '0.5rem',
            }}
          >
            {content}
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-background border-t border-l"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HoverCard
