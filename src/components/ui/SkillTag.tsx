import React from 'react';

interface SkillTagProps {
  name: string;
  level: number;
  delay: number;
  inView: boolean;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, level, delay, inView }) => {
  return (
    <div 
      className="group relative bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300"
      style={{
        transform: inView ? 'none' : 'translateY(20px)',
        opacity: inView ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      <span className="text-gray-800 font-medium">{name}</span>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {level}% Proficiency
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-4 border-l-4 border-r-4 border-gray-800 border-l-transparent border-r-transparent"></div>
      </div>
    </div>
  );
};

export default SkillTag;