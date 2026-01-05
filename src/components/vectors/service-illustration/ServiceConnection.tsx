
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceConnectionProps {
  path: string;
  isDark: boolean;
}

export const ServiceConnection: React.FC<ServiceConnectionProps> = ({ path, isDark }) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.path 
      d={path} 
      stroke={isDark ? "#8B5CF6" : "#8B5CF6"} 
      strokeWidth="2"
      fill="none"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
    />
  );
};
