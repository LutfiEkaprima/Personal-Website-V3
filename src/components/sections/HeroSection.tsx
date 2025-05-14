import React, { useRef, useEffect } from 'react';
import Button from '../ui/Button';
import { useInView } from '../utils/useInView';

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100"
      ref={ref}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-teal-100 rounded-full opacity-40 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="max-w-3xl mx-auto text-center"
          style={{
            transform: isInView ? 'none' : 'translateY(40px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            <span className="inline-block">Hi, I'm</span>{' '}
            <span className="inline-block text-blue-600">Lutfi Ekaprima Jannata</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            A <span className="font-medium">Mobile Developer</span> with a strong interest in web development. 
            Currently exploring frontend technologies and building simple, responsive websites.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            style={{
              transform: isInView ? 'none' : 'translateY(20px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s'
            }}
          >
            <Button variant="primary" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button variant="secondary" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-gray-400"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;