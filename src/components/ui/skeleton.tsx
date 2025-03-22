import React from 'react'
import { cn } from '@/lib/utils'

<<<<<<< HEAD
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
}

const Skeleton = ({
  className,
  variant = 'text',
  ...props
}: SkeletonProps) => {
  return (
    <div
      className={cn(
        'animate-pulse bg-muted',
        {
          'h-4 w-full rounded': variant === 'text',
          'h-12 w-12 rounded-full': variant === 'circular',
          'h-full w-full': variant === 'rectangular',
          'h-full w-full rounded-lg': variant === 'rounded',
        },
        className
      )}
=======
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
>>>>>>> 6008eb6 (Initial commit)
      {...props}
    />
  )
}

<<<<<<< HEAD
export default Skeleton
=======
export { Skeleton }
>>>>>>> 6008eb6 (Initial commit)
