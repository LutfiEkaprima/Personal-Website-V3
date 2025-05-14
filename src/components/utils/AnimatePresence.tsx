import React, { ReactNode } from 'react';

interface AnimatePresenceProps {
  children: ReactNode;
}

export const AnimatePresence: React.FC<AnimatePresenceProps> = ({ children }) => {
  // This is a simplified version, could be expanded with proper animation capabilities
  return <>{children}</>;
};

export default AnimatePresence;