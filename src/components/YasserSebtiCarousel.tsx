import React from 'react';
import InfiniteCarousel from './InfiniteCarousel';

const YasserSebtiCarousel = () => {
  return (
    <InfiniteCarousel
      speed={15}
      className="py-4 select-none"
      pauseOnHover={true}
    >
      <div className="flex items-center px-6">
        <span className="text-4xl font-['Helvetica Now Display'] font-medium whitespace-nowrap">
          Yasser Creatives
        </span>
        <span className="text-4xl text-muted-foreground mx-4">•</span>
        <span className="text-4xl font-['Helvetica Now Display'] font-medium whitespace-nowrap">
          Yasser Creatives
        </span>
        <span className="text-4xl text-muted-foreground mx-4">•</span>
        <span className="text-4xl font-['Helvetica Now Display'] font-medium whitespace-nowrap">
          Yasser Creatives
        </span>
        <span className="text-4xl text-muted-foreground mx-4">•</span>
      </div>
    </InfiniteCarousel>
  );
};

export default React.memo(YasserSebtiCarousel); 