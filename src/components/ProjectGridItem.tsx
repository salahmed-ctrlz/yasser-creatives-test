import React from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  backgroundColor: string;
}

interface ProjectGridItemProps {
  project: Project;
}

const ProjectGridItem: React.FC<ProjectGridItemProps> = ({ project }) => {
  return (
    <Link 
      to={`/project/${project.id}`} 
      className="group block relative overflow-hidden"
    >
      <div className={`aspect-[4/3] ${project.backgroundColor} relative`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
          <h3 className="text-2xl font-helvetica text-white mb-2">{project.title}</h3>
          <p className="text-sm text-white/80">{project.category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectGridItem; 