import React, { memo, forwardRef } from 'react';

interface OptimizationOptions {
  memoizationKey?: string;
}

export function withOptimization<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: OptimizationOptions = {}
) {
  const MemoizedComponent = memo(WrappedComponent, (prevProps, nextProps) => {
    if (options.memoizationKey) {
      return prevProps[options.memoizationKey as keyof P] === nextProps[options.memoizationKey as keyof P];
    }
    return false;
  });

  return forwardRef<any, P>((props, ref) => {
    // Add performance monitoring in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Rendering ${WrappedComponent.displayName || WrappedComponent.name}`);
    }

    return <MemoizedComponent {...props} ref={ref} />;
  });
} 