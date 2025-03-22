import React, { useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/lib/utils/performance'

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
  placeholderClassName?: string
  loading?: 'lazy' | 'eager'
}

const OptimizedImage = ({
  src,
  alt,
  className,
  placeholderClassName,
  loading = 'lazy',
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(
    (entry) => {
      if (entry.isIntersecting && !isLoaded) {
        const img = new Image()
        img.src = src
        img.onload = () => setIsLoaded(true)
        img.onerror = () => setIsError(true)
      }
    },
    { threshold: 0.1 }
  )

  return (
    <div
      ref={imageRef as React.LegacyRef<HTMLDivElement>}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Placeholder */}
      <div
        className={cn(
          'absolute inset-0 bg-muted animate-pulse',
          isLoaded && 'hidden',
          placeholderClassName
        )}
      />

      {/* Image */}
      <img
        src={isLoaded ? src : ''}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        loading={loading}
        {...props}
      />

      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-destructive/10">
          <span className="text-destructive text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage 