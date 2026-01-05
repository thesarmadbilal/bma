
import React from 'react';
import { motion } from 'framer-motion';

interface DecorativeElementProps {
  isDark: boolean;
}

export const DecorativeElement: React.FC<DecorativeElementProps> = ({ isDark }) => {
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Decorative dots coordinates
  const decorativeDots = [
    { cx: 300, cy: 200, r: 5, delay: 4.0 },
    { cx: 500, cy: 200, r: 5, delay: 4.1 },
    { cx: 350, cy: 150, r: 3, delay: 4.2 },
    { cx: 450, cy: 150, r: 3, delay: 4.3 },
    { cx: 350, cy: 350, r: 3, delay: 4.4 },
    { cx: 450, cy: 350, r: 3, delay: 4.5 }
  ];

  return (
    <>
      {decorativeDots.map((dot, index) => (
        <motion.circle 
          key={index}
          cx={dot.cx} 
          cy={dot.cy} 
          r={dot.r} 
          fill={isDark ? "#8B5CF6" : "#8B5CF6"} 
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          custom={dot.delay}
        />
      ))}
    </>
  );
};
