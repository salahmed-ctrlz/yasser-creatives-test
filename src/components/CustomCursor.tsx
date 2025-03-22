import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = (time - previousTimeRef.current) / 16; // Normalize to 60fps
      const ease = 0.2;

      // Smooth interpolation between current and target position
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * ease * deltaTime;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * ease * deltaTime;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0) rotate(45deg)`;
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      targetPosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-trigger')
      ) {
        cursorRef.current?.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = () => {
      cursorRef.current?.classList.remove('cursor-hover');
    };

    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor; 