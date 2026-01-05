
import React from 'react';
import { motion } from 'framer-motion';
import { StatCounter } from '@/components/StatCounter';
import { useTheme } from '@/components/theme/ThemeProvider';

export const HeroStats = () => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }} 
      className="pt-8 grid grid-cols-3 gap-6"
    >
      <div className="flex flex-col items-center text-center">
        <StatCounter 
          value={33}
          suffix="+"
          title="Years of Market Excellence"
          duration={2000}
          valueClassName={`text-2xl font-bold ${theme === 'dark' ? 'text-primary' : 'text-primary'}`}
          titleClassName={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <StatCounter 
          value={50000}
          suffix="+"
          title="Satisfied Clients"
          duration={2500}
          delay={300}
          valueClassName={`text-2xl font-bold ${theme === 'dark' ? 'text-primary' : 'text-primary'}`}
          titleClassName={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <StatCounter 
          value={200}
          suffix="B+"
          prefix="Rs. "
          title="Assets Under Management"
          duration={3000}
          delay={600}
          valueClassName={`text-2xl font-bold ${theme === 'dark' ? 'text-primary' : 'text-primary'}`}
          titleClassName={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
        />
      </div>
    </motion.div>
  );
};
