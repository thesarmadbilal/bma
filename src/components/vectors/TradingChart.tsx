
import React from 'react';

interface TradingChartProps {
  className?: string;
}

export const TradingChart: React.FC<TradingChartProps> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 200 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chart grid */}
      <path d="M0 20 H200" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
      <path d="M0 40 H200" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
      <path d="M0 60 H200" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
      <path d="M0 80 H200" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
      <path d="M50 0 V100" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
      <path d="M100 0 V100" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
      <path d="M150 0 V100" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
      
      {/* Chart line */}
      <path 
        d="M0 80 L20 70 L40 75 L60 55 L80 60 L100 40 L120 30 L140 45 L160 25 L180 20 L200 30" 
        stroke="hsl(210, 100%, 50%)" 
        strokeWidth="2" 
        fill="none"
        className="animate-pulse-glow"
      />
      
      {/* Area fill */}
      <path 
        d="M0 80 L20 70 L40 75 L60 55 L80 60 L100 40 L120 30 L140 45 L160 25 L180 20 L200 30 V100 H0 Z" 
        fill="url(#chartGradient)" 
        fillOpacity="0.2"
      />
      
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(210, 100%, 50%)" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="hsl(210, 100%, 50%)" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
};
