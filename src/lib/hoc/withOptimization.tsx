<<<<<<< HEAD
import React from 'react';

interface OptimizationProps {
  shouldComponentUpdate?: boolean;
=======
import React, { memo, forwardRef } from 'react';

interface OptimizationOptions {
>>>>>>> 6008eb6 (Initial commit)
  memoizationKey?: string;
}

export function withOptimization<P extends object>(
  WrappedComponent: React.ComponentType<P>,
<<<<<<< HEAD
  options: OptimizationProps = {}
) {
  const OptimizedComponent = React.forwardRef<any, P>((props, ref) => {
=======
  options: OptimizationOptions = {}
) {
  const MemoizedComponent = memo(WrappedComponent, (prevProps, nextProps) => {
    if (options.memoizationKey) {
      return prevProps[options.memoizationKey as keyof P] === nextProps[options.memoizationKey as keyof P];
    }
    return false;
  });

  return forwardRef<any, P>((props, ref) => {
>>>>>>> 6008eb6 (Initial commit)
    // Add performance monitoring in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Rendering ${WrappedComponent.displayName || WrappedComponent.name}`);
    }

<<<<<<< HEAD
    return <WrappedComponent {...props} ref={ref} />;
  });

  OptimizedComponent.displayName = `withOptimization(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  // Apply React.memo with custom comparison if needed
  if (options.shouldComponentUpdate === false) {
    return React.memo(
      OptimizedComponent,
      options.memoizationKey
        ? (prevProps: any, nextProps: any) =>
            prevProps[options.memoizationKey] === nextProps[options.memoizationKey]
        : undefined
    );
  }

  return OptimizedComponent;
=======
    return <MemoizedComponent {...props} ref={ref} />;
  });
>>>>>>> 6008eb6 (Initial commit)
} 