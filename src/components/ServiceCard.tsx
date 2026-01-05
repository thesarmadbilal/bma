
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme/ThemeProvider';
import { ChevronRight } from '@/components/icons/MarketIcons';

interface ServiceCardProps {
  title: string;
  description: string;
  backgroundImage?: string;
  onClick: () => void;
  active: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  backgroundImage,
  onClick,
  active
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-col space-y-2">
    <motion.div 
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: 'spring', stiffness: 100 }
        }
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative p-4 h-48 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden ${
        active 
          ? theme === 'dark' 
            ? 'bg-primary/20 border border-primary/30 neo-glow' 
            : 'bg-primary/10 border border-primary/20 shadow-lg'
          : theme === 'dark' 
            ? 'bg-gray-800/50 hover:bg-gray-700/70 border border-gray-700/50'
            : 'bg-white/80 hover:bg-gray-50 shadow-md border border-gray-200/80'
      }`}
      onClick={onClick}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      
      {/* Content */}
    </motion.div>
      <h3 className={`font-medium text-center ${active ? 'text-primary' : ''}`}>
        {title}
      </h3>
    </div>
  );
};
