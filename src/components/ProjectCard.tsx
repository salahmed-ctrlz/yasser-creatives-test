
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  title: string;
  image: string;
  category: string;
}

const ProjectCard = ({ id, title, image, category }: ProjectCardProps) => {
  return (
    <Link to={`/project/${id}`} className="group block">
      <div className="overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-helvetica mb-1">{title}</h3>
      <p className="text-gray-600">{category}</p>
    </Link>
  );
};

export default ProjectCard;
