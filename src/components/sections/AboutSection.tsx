import React, { useRef, useState, useEffect } from 'react';
import SkillTag from '../ui/SkillTag';
import { useInView } from '../utils/useInView';
import Button from '../ui/Button';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { threshold: 0.1, once: true });
  const areSkillsInView = useInView(skillsRef, { threshold: 0.1, once: true });
  const isButtonContainerInView = useInView(buttonContainerRef, { threshold: 0.1, once: true });

  const [showPopup, setShowPopup] = useState(false);

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

  const cvPathID = '/CV_LutfiEkaprimaJannata_ID.pdf';
  const cvPathEN = '/CV_LutfiEkaprimaJannata_EN.pdf';

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showPopup &&
        buttonContainerRef.current &&
        !buttonContainerRef.current.contains(event.target as Node) &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowPopup(false);
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="max-w-3xl mx-auto text-center mb-12"
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
          className="relative max-w-3xl mx-auto text-center mb-16"
          ref={buttonContainerRef}
          style={{
            transform: isButtonContainerInView ? 'none' : 'translateY(40px)',
            opacity: isButtonContainerInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
          }}
        >
          <Button variant="primary" size="md" onClick={togglePopup}>
            <Download size={20} className="mr-2" />
            Download CV
            {showPopup ? <ChevronUp size={20} className="ml-2" /> : <ChevronDown size={20} className="ml-2" />}
          </Button>

          {showPopup && (
            <div
              ref={popupRef}
              className="absolute z-10 mt-2 w-auto min-w-[200px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-fade-in"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
              }}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <button
                  onClick={() => handleDownload(cvPathID, 'Lutfi_Ekaprima_CV_ID.pdf')}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-4 py-2 text-sm w-full text-left"
                  role="menuitem"
                >
                  <span className="mr-3">🇮🇩</span>
                  CV ID
                </button>
                <button
                  onClick={() => handleDownload(cvPathEN, 'Lutfi_Ekaprima_CV_EN.pdf')}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-4 py-2 text-sm w-full text-left"
                  role="menuitem"
                >
                  <span className="mr-3">🇬🇧</span>
                  CV EN
                </button>
              </div>
            </div>
          )}
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