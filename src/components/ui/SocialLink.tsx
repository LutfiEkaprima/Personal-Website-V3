import React from 'react';

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  label: string;
  light?: boolean;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children, label, light }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        inline-flex items-center justify-center w-10 h-10 rounded-full
        transition-all duration-300 focus:outline-none
        ${light 
          ? 'bg-blue-500/20 hover:bg-blue-500/30 text-white' 
          : 'bg-gray-800 hover:bg-blue-600 text-white'
        }
      `}
    >
      {children}
    </a>
  );
};

export default SocialLink;