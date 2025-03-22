import { useEffect, useRef } from "react";

interface LogoGridProps {
  logos: Array<{
    id: number;
    image?: string;
    text?: string;
    background?: string;
  }>;
  columns?: number;
}

const LogoGrid = ({ logos }: LogoGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".logo-grid-item");
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, [logos]);

  return (
    <div 
      ref={gridRef}
      className={`grid grid-cols-5 gap-8 md:gap-12`}
    >
      {logos.map((logo) => (
        <div key={logo.id} className="logo-grid-item">
          <div 
            className={`w-full h-full flex items-center justify-center`}
          >
            {logo.image ? (
              <img 
                src={logo.image} 
                alt={`Logo ${logo.id}`} 
                className="max-w-full max-h-16 object-contain transition-transform duration-500"
              />
            ) : (
              <span className="text-2xl font-bold">LOGO</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
