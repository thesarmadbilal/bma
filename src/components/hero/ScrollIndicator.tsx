import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme/ThemeProvider';
export const ScrollIndicator = () => {
  const {
    theme
  } = useTheme();
  return <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    delay: 2,
    duration: 1
  }}>
      
      
    </motion.div>;
};