
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme/ThemeProvider';

interface BubbleProps {
  size: number;
  initialX: string;
  initialY: string;
  duration: number;
}

export const Bubble: React.FC<BubbleProps> = ({ size, initialX, initialY, duration }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      className={`absolute rounded-full ${theme === 'dark' ? 'bg-primary/5' : 'bg-primary/3'} pointer-events-none z-0`}
      style={{ width: size, height: size, left: initialX, top: initialY }}
      animate={{
        y: [0, -100, -200],
        opacity: [0, 0.5, 0],
        scale: [0.8, 1.2, 1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    />
  );
};
