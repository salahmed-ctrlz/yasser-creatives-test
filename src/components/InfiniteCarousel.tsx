import React, { useEffect, useRef, useState, useCallback } from 'react';

interface InfiniteCarouselProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
}

const InfiniteCarousel = ({
  children,
  speed = 50,
  direction = 'left',
  className = '',
  pauseOnHover = true,
}: InfiniteCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);
  const rafRef = useRef<number>();

  const createClones = useCallback(() => {
    if (!contentRef.current || !containerRef.current) return;

    // Clear existing clones
    const existingClones = containerRef.current.querySelectorAll('[data-clone]');
    existingClones.forEach(clone => clone.remove());

    // Create DocumentFragment for better performance
    const fragment = document.createDocumentFragment();
    const content = contentRef.current;
    const numClones = Math.ceil(window.innerWidth / content.offsetWidth) + 1;

    // Create clones
    for (let i = 0; i < numClones; i++) {
      const clone = content.cloneNode(true) as HTMLElement;
      clone.setAttribute('data-clone', 'true');
      fragment.appendChild(clone);
    }

    // Append all clones at once
    containerRef.current.appendChild(fragment);
  }, []);

  const animate = useCallback(() => {
    if (!containerRef.current || isPaused) return;

    const pixelsPerFrame = speed / 60; // 60fps target
    positionRef.current += direction === 'left' ? -pixelsPerFrame : pixelsPerFrame;

    if (!contentRef.current) return;

    const contentWidth = contentRef.current.offsetWidth;
    if (Math.abs(positionRef.current) >= contentWidth) {
      positionRef.current = 0;
    }

    containerRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
    rafRef.current = requestAnimationFrame(animate);
  }, [speed, direction, isPaused]);

  useEffect(() => {
    createClones();
    animate();

    const debouncedResize = debounce(() => {
      createClones();
      positionRef.current = 0;
      if (containerRef.current) {
        containerRef.current.style.transform = 'translate3d(0, 0, 0)';
      }
    }, 250);

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [createClones, animate]);

  const handleMouseEnter = () => pauseOnHover && setIsPaused(true);
  const handleMouseLeave = () => pauseOnHover && setIsPaused(false);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className="flex items-center"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <div ref={contentRef} className="shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
};

// Utility function for debouncing
const debounce = (fn: Function, ms: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
};

export default React.memo(InfiniteCarousel); 