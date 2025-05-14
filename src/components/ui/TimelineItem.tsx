import React from 'react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isEven: boolean;
  delay: number;
  inView: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  period,
  description,
  isEven,
  delay,
  inView
}) => {
  return (
    <div 
      className={`flex items-center mb-12 ${isEven ? 'flex-row-reverse' : ''}`}
      style={{
        transform: inView ? 'none' : `translateX(${isEven ? '40px' : '-40px'})`,
        opacity: inView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      {/* Content */}
      <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12'}`}>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700 font-medium">{company}</p>
        <p className="text-sm text-gray-500 mt-1">{period}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      
      {/* Center dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
    </div>
  );
};

export default TimelineItem;