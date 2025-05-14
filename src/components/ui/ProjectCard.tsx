import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  delay: number;
  inView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  link,
  delay,
  inView
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: inView ? 'none' : 'translateY(40px)',
        opacity: inView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      {/* Image container with overlay */}
      <div className="relative overflow-hidden h-60">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
        >
          <a 
            href={link}
            className="text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-4 py-2 rounded-lg text-sm font-medium"
          >
            View Project
          </a>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
              style={{
                transform: isHovered ? 'translateY(0)' : 'translateY(0)',
                opacity: isHovered ? 1 : 0.8,
                transition: `all 0.3s ease ${index * 0.05}s`
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;