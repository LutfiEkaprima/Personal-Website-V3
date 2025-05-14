import React, { useRef } from 'react';
import SkillTag from '../ui/SkillTag';
import { useInView } from '../utils/useInView';

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(ref, { threshold: 0.1, once: true });
  const areSkillsInView = useInView(skillsRef, { threshold: 0.1, once: true });
  
  const skills = [
    { name: 'Kotlin', level: 60 },
    { name: 'Flutter & Dart', level: 60 },
    { name: 'Java', level: 40 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 30 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'Figma', level: 75 },
    { name: 'React', level: 50 },
    { name: 'Next.js', level: 30 },
    { name: 'Git', level: 85 }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div 
          className="max-w-3xl mx-auto text-center mb-16"
          ref={ref}
          style={{
            transform: isInView ? 'none' : 'translateY(40px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
          }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
                      I'm a mobile developer with a strong interest in web technologies. 
                      While my main focus is building intuitive and responsive mobile applications, 
                      I also enjoy exploring frontend development and have experience creating simple websites using HTML, CSS, and JavaScript.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            In my free time, I love learning new tools, experimenting with UI design, and improving my skills through small personal projects. 
            I'm passionate about continuous growth and open to new challenges in both mobile and web development.
          </p>

        </div>
        
        <div 
          className="mt-16" 
          ref={skillsRef}
          style={{
            transform: areSkillsInView ? 'none' : 'translateY(40px)',
            opacity: areSkillsInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s'
          }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillTag 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                delay={index * 0.1}
                inView={areSkillsInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;