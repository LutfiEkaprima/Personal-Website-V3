import React, { useRef } from 'react';
import TimelineItem from '../ui/TimelineItem';
import { useInView } from '../utils/useInView';

const CareerSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });
  
  const careerData = [
    {
      title: 'Student at Institute Teknologi Indonesia',
      company: 'Institute Teknologi Indonesia.',
      period: 'Sept 2021 - Present',
      description: 'Currently pursuing a Bachelor of Computer Science at Institute Teknologi Indonesia, focusing on software engineering and mobile development. Actively involved in various projects and extracurricular activities to enhance my skills and knowledge in the field.',
    },
    {
      title: 'COMPUTER SCIENCE LAB ASSISTANT INSTITUT TEKNOLOGI INDONESIA',
      company: 'Institute Teknologi Indonesia.',
      period: '2023 - Present',
      description: ' Delivering guidance to students to enhance their understanding of both basic and complex programming concepts., Providing grades based on students performance in completing assigned tasks and projects',
    },
    {
      title: 'Cohort Android Developer Bangkit Academy',
      company: 'Bangkit led by Google, Goto, and Traveloka.',
      period: 'Sep 2024 - Jan 2025',
      description: 'As one of the cohort at Bangkit Academy 2024 on the Android Developer learning path, I studied Android application development using the latest technology, namely Kotlin. This program strengthens my abilities in designing applications with modern architecture, API integration, and cross-disciplinary collaboration through a capstone project. This experience not only improved my technical skills but also trained soft skills such as communication, leadership, and problem solving in teams.',
    },
    {
      title: 'Software Developer Intern',
      company: 'PT EKA ABIPHRAYA SEMESTA.',
      period: 'May 2025 - present',
      description: "As a Software Developer Intern at PT EKA ABIPHRAYA SEMESTA, I work on various internal projects that support the company's operations and innovation goals. One of the main projects I am involved in is developing a screen reader application aimed at improving digital accessibility for visually impaired users. This role allows me to apply my programming skills in real-world scenarios, particularly in building accessible software solutions. I collaborate with the team on designing, testing, and deploying applications, while also gaining experience in problem-solving, user-centered design, and working with assistive technologies.",
      
    }
  ];

  return (
    <section id="career" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          className="max-w-3xl mx-auto text-center mb-16"
          style={{
            transform: isInView ? 'none' : 'translateY(40px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
          }}
          ref={ref}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Journey</h2>
          <p className="text-lg text-gray-700">
            A timeline of my professional experience and education
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="relative z-10">
            {careerData.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                company={item.company}
                period={item.period}
                description={item.description}
                isEven={index % 2 === 0}
                delay={index * 0.2}
                inView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;