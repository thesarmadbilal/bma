
import React from 'react';
import { CircuitPattern } from './vectors/CircuitPattern';
import { HexagonGrid } from './vectors/HexagonGrid';
import { DataFlow } from './vectors/DataFlow';

interface FuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ 
  children, 
  className = "",
  intensity = 'medium'
}) => {
  // Adjust opacity based on intensity level
  const getOpacity = () => {
    switch(intensity) {
      case 'low': return 'opacity-5';
      case 'high': return 'opacity-30';
      default: return 'opacity-20';
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute inset-0 hexagon-bg opacity-10"></div>
      
      {/* Vector elements */}
      <div className={`absolute top-0 left-0 w-full h-full ${getOpacity()} text-primary`}>
        <CircuitPattern className="absolute top-0 left-0 w-1/3 h-1/3" />
        <CircuitPattern className="absolute bottom-0 right-0 w-1/3 h-1/3 rotate-180" />
        <HexagonGrid className="absolute top-1/4 right-0 w-1/3 h-1/3" />
        <DataFlow className="absolute bottom-1/4 left-0 w-full h-12" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
