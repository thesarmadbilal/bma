
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, RefreshCcw } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';

export const HeroFeatures = () => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="grid grid-cols-3 gap-4 pt-4"
    >
      <div className="flex items-center gap-2">
        <Shield className={`h-5 w-5 ${theme === 'dark' ? 'text-primary' : 'text-primary'} animate-pulse-glow`} />
        <span className={theme === 'dark' ? 'text-sm text-gray-300' : 'text-sm text-gray-700 font-medium'}>
          Robust Trading Application
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Award className={`h-5 w-5 ${theme === 'dark' ? 'text-primary' : 'text-primary'} animate-pulse-glow`} />
        <span className={theme === 'dark' ? 'text-sm text-gray-300' : 'text-sm text-gray-700 font-medium'}>
          Award-winning research
        </span>
      </div>
      <div className="flex items-center gap-2">
        <RefreshCcw className={`h-5 w-5 ${theme === 'dark' ? 'text-primary' : 'text-primary'} animate-pulse-glow`} />
        <span className={theme === 'dark' ? 'text-sm text-gray-300' : 'text-sm text-gray-700 font-medium'}>
          24/7 customer support
        </span>
      </div>
    </motion.div>
  );
};
