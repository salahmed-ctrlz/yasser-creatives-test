import React from 'react';

interface OptimizationProps {
  shouldComponentUpdate?: boolean;
  memoizationKey?: string;
}

export function withOptimization<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: OptimizationProps = {}
) {
  const OptimizedComponent = React.forwardRef<any, P>((props, ref) => {
    // Add performance monitoring in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Rendering ${WrappedComponent.displayName || WrappedComponent.name}`);
    }

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
} 