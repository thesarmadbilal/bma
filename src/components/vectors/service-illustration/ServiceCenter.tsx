
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCenterProps {
  isDark: boolean;
}

export const ServiceCenter: React.FC<ServiceCenterProps> = ({ isDark }) => {
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom * 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <motion.circle 
        cx="400" cy="250" r="60" 
        fill={isDark ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0.1)"} 
        stroke={isDark ? "#8B5CF6" : "#8B5CF6"} 
        strokeWidth="2"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      />
      
      <motion.text 
        x="400" y="255" 
        textAnchor="middle" 
        dominantBaseline="middle" 
        fill={isDark ? "white" : "#333"} 
        fontWeight="bold"
        fontSize="14"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        custom={0.2}
      >
        BMA Capital
      </motion.text>
    </>
  );
};
