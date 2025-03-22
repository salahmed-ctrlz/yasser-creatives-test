import { Link } from "react-router-dom";
import InfiniteCarousel from "./InfiniteCarousel";

const TeamMarquee = () => {
  const designer = { id: 1, initials: "YS", name: "Yasser Creatives", role: "Designer" };
  
  // Create array of duplicated items for seamless infinite loop
  const repeatedDesigner = Array(10).fill(designer).map((item, index) => ({...item, key: index}));

  const designerItems = repeatedDesigner.map((item) => (
    <div key={`designer-${item.key}`} className="flex items-center mx-8 whitespace-nowrap">
      <Link to="/about" className="flex items-center group">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-200">
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-2xl">{item.initials}</span>
          </div>
        </div>
        <span className="text-xl font-['Helvetica Now Display'] group-hover:opacity-70 transition-opacity">
          {item.name} / {item.role}
        </span>
      </Link>
    </div>
  ));

  return (
    <div className="py-16 overflow-hidden border-t border-gray-200">
      <InfiniteCarousel speed={50} direction="left" className="items-center">
        {designerItems}
      </InfiniteCarousel>
    </div>
  );
};

export default TeamMarquee;
