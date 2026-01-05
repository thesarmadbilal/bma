
import React from 'react';
import { motion } from 'framer-motion';

interface MouseFollowerProps {
  mousePosition: { x: number; y: number };
}

export const MouseFollower: React.FC<MouseFollowerProps> = ({ mousePosition }) => {
  return (
    <motion.div
      className="absolute w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none z-0"
      animate={{
        x: mousePosition.x - 160,
        y: mousePosition.y - 160,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 50,
        mass: 0.5
      }}
    />
  );
};
