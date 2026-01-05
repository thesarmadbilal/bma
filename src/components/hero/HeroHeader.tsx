
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from '@/components/icons/MarketIcons';
import { useTheme } from '@/components/theme/ThemeProvider';

interface HeroHeaderProps {
  title?: string;
  subtitle?: string;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ 
  title = "Your Complete", 
  subtitle = "Experience holistic financial excellence with BMA Capital – where expert guidance meets innovative solutions for your investment journey." 
}) => {
  const { theme } = useTheme();
  
  return (
    <div>
      <motion.span 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 ${
          theme === 'dark' 
            ? 'bg-primary/20 text-primary border border-primary/30' 
            : 'bg-primary/10 text-primary border border-primary/20'
        }`}
      >
        <Star className="h-3.5 w-3.5" />
        Pakistan's Premier Investment Partner
      </motion.span>
      
      <motion.h1 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title.includes("Complete") ? (
          <>
            <span className="block">{title}</span>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
              theme === 'dark' 
                ? 'from-primary via-purple-400 to-primary'
                : 'from-primary via-purple-600 to-primary'
            }`}>Financial Partner</span>
          </>
        ) : (
          <span className="block">{title}</span>
        )}
      </motion.h1>
      
      <motion.p 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className={`mt-6 text-xl max-w-xl ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};
