
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme/ThemeProvider';
import { ChevronRight } from '@/components/icons/MarketIcons';

interface ServiceCardProps {
  title: string;
  icon: React.ElementType;
  description: string;
  backgroundImage?: string;
  onClick: () => void;
  active: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon: Icon,
  description,
  backgroundImage,
  onClick,
  active
}) => {
  const { theme } = useTheme();
  
  return (
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
      className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden ${
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
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-transparent'
          : 'bg-gradient-to-br from-white/90 via-white/70 to-transparent'
      }`} />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-3">
        <div className={`p-3 rounded-full ${
          active
            ? 'bg-primary/30 text-white'
            : theme === 'dark' 
              ? 'bg-primary/20 text-primary'
              : 'bg-primary/10 text-primary'
        }`}>
          <Icon className={`h-6 w-6 ${active ? 'animate-pulse-glow' : ''}`} />
        </div>
        <h3 className={`font-medium text-base ${active ? 'text-primary' : ''}`}>{title}</h3>
        <p className={`text-sm ${
          active
            ? theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {description}
        </p>
        <ChevronRight className={`h-4 w-4 ${active ? 'text-primary' : 'text-primary opacity-70'}`} />
      </div>
    </motion.div>
  );
};
