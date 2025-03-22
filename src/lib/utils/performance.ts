import { useEffect, useRef, useCallback } from 'react';

// Debounce function for rate-limiting expensive operations
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  ms: number
): ((...args: Parameters<T>) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
};

// Hook for using requestAnimationFrame with cleanup
export const useRaf = (callback: () => void, deps: any[] = []) => {
  const rafRef = useRef<number>();
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const animate = useCallback(() => {
    if (savedCallback.current) {
      savedCallback.current();
      rafRef.current = requestAnimationFrame(animate);
    }
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, deps);
};

// Hook for intersection observer (lazy loading)
export const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) => {
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry);
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [callback, options]);

  return targetRef;
};

// Image preloading utility
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Batch DOM updates using requestAnimationFrame
export const batchDomUpdates = (updates: (() => void)[]) => {
  requestAnimationFrame(() => {
    updates.forEach((update) => update());
  });
};

// Memoize expensive calculations
export const memoize = <T extends (...args: any[]) => any>(fn: T) => {
  const cache = new Map();
  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}; 