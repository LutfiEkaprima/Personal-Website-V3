import React, { useRef } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { useInView } from '../utils/useInView';

const ProjectsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });
  
  const projects = [
    {
      title: 'NutriDish',
      description: 'Nutridish is an innovative mobile application designed to empower individuals and families, especially in vulnerable communities, to make healthier dietary choices through easy access to nutritious recipes.',
      tags: ['Kotlin', 'Firebase', 'MVVM'],
      imageUrl: 'https://avatars.githubusercontent.com/u/187167449?s=200&v=4',
      link: 'https://github.com/NutriDish'
    },
    {
      title: 'Nusantara Food',
      description: 'a mobile application to help in cooking food.',
      tags: ['Flutter', 'Firebase', 'Dart'],
      imageUrl: 'https://github.com/LutfiEkaprima/Goproject/releases/download/img/Icon.png',
      link: 'https://github.com/LutfiEkaprima/Nusantara-Food'
    },
    {
      title: 'CryptoMarket',
      description: 'a mobile application for viewing crypto market charts based on CoinGecko API.',
      tags: ['Flutter', 'Dart', 'API'],
      imageUrl: 'https://github.com/LutfiEkaprima/Goproject/releases/download/img/icons.png',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations and responsive design.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Animations'],
      imageUrl: 'https://github.com/LutfiEkaprima/Goproject/releases/download/img/SS.png',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-700">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems
            and deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              link={project.link}
              delay={index * 0.1}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;