
import React from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { ServiceCenter } from './service-illustration/ServiceCenter';
import { ServiceNode } from './service-illustration/ServiceNode';
import { ServiceConnection } from './service-illustration/ServiceConnection';
import { DecorativeElement } from './service-illustration/DecorativeElement';

interface ServiceIllustrationProps {
  className?: string;
}

export const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({ className }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <svg 
      className={className}
      viewBox="0 0 800 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central hub */}
      <ServiceCenter isDark={isDark} />
      
      {/* Service nodes */}
      <ServiceNode 
        cx={600} cy={150} 
        title="Equities"
        animationDelay={0.6}
        isDark={isDark}
      />
      <ServiceConnection 
        path="M450 230 Q525 190 570 165" 
        isDark={isDark}
      />
      
      <ServiceNode 
        cx={600} cy={350} 
        title="Investment"
        subtitle="Banking"
        animationDelay={1.2}
        isDark={isDark}
      />
      <ServiceConnection 
        path="M450 270 Q525 310 570 335" 
        isDark={isDark}
      />
      
      <ServiceNode 
        cx={200} cy={150} 
        title="Asset"
        subtitle="Management"
        animationDelay={1.8}
        isDark={isDark}
      />
      <ServiceConnection 
        path="M350 230 Q275 190 230 165" 
        isDark={isDark}
      />
      
      <ServiceNode 
        cx={200} cy={350} 
        title="Commodities"
        animationDelay={2.4}
        isDark={isDark}
      />
      <ServiceConnection 
        path="M350 270 Q275 310 230 335" 
        isDark={isDark}
      />
      
      <ServiceNode 
        cx={400} cy={450} 
        title="Money Market"
        subtitle="Forex"
        animationDelay={3.0}
        isDark={isDark}
      />
      <ServiceConnection 
        path="M400 310 L400 410" 
        isDark={isDark}
      />
      
      <ServiceNode 
        cx={400} cy={50} 
        title="Research"
        animationDelay={3.6}
        isDark={isDark}
      />
      <ServiceConnection 
        path="M400 190 L400 90" 
        isDark={isDark}
      />
      
      {/* Decorative elements */}
      <DecorativeElement isDark={isDark} />
    </svg>
  );
};
