
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceNodeProps {
  cx: number;
  cy: number;
  title: string;
  subtitle?: string;
  animationDelay: number;
  isDark: boolean;
}

export const ServiceNode: React.FC<ServiceNodeProps> = ({ 
  cx, cy, title, subtitle, animationDelay, isDark 
}) => {
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

  return (
    <>
      <motion.circle 
        cx={cx} cy={cy} r="40" 
        fill={isDark ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0.1)"} 
        stroke={isDark ? "#8B5CF6" : "#8B5CF6"} 
        strokeWidth="2"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        custom={animationDelay}
      />
      
      {subtitle ? (
        <>
          <motion.text 
            x={cx} y={cy - 8} 
            textAnchor="middle" 
            dominantBaseline="middle" 
            fill={isDark ? "white" : "#333"} 
            fontWeight="bold"
            fontSize="11"
            variants={circleVariants}
            initial="hidden"
            animate="visible"
            custom={animationDelay + 0.2}
          >
            {title}
          </motion.text>
          <motion.text 
            x={cx} y={cy + 8} 
            textAnchor="middle" 
            dominantBaseline="middle" 
            fill={isDark ? "white" : "#333"} 
            fontWeight="bold"
            fontSize="11"
            variants={circleVariants}
            initial="hidden"
            animate="visible"
            custom={animationDelay + 0.3}
          >
            {subtitle}
          </motion.text>
        </>
      ) : (
        <motion.text 
          x={cx} y={cy} 
          textAnchor="middle" 
          dominantBaseline="middle" 
          fill={isDark ? "white" : "#333"} 
          fontWeight="bold"
          fontSize="12"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          custom={animationDelay + 0.2}
        >
          {title}
        </motion.text>
      )}
    </>
  );
};
