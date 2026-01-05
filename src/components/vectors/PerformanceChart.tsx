
import React from 'react';

interface PerformanceChartProps {
  className?: string;
}

export const PerformanceChart: React.FC<PerformanceChartProps> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 800 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background grid */}
      <defs>
        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
        </pattern>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#smallGrid)" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
        </pattern>
        
        {/* Gradient for blue line */}
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2196F3" />
          <stop offset="100%" stopColor="#4FC3F7" />
        </linearGradient>
        
        {/* Gradient for green line */}
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#8BC34A" />
        </linearGradient>
        
        {/* Gradient for red line */}
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F44336" />
          <stop offset="100%" stopColor="#FF5252" />
        </linearGradient>
        
        {/* Glow filters for each line */}
        <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        <filter id="greenGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Background rectangle with grid */}
      <rect width="800" height="400" fill="url(#grid)" fillOpacity="0.5" />
      
      {/* Chart labels */}
      <text x="30" y="30" fill="currentColor" fontSize="14" opacity="0.7">MAX</text>
      <text x="770" y="30" fill="currentColor" fontSize="14" opacity="0.7">SUM</text>
      <text x="770" y="370" fill="currentColor" fontSize="14" opacity="0.7">AVG</text>
      
      {/* Visualization text */}
      <text x="700" y="190" fill="currentColor" fontSize="12" opacity="0.8">VISUALIZE</text>
      <text x="700" y="210" fill="currentColor" fontSize="10" opacity="0.6" fontFamily="monospace">bandwidth_incoming</text>
      
      {/* Filter parameters */}
      <text x="30" y="180" fill="currentColor" fontSize="12" opacity="0.8">WHERE</text>
      <text x="90" y="180" fill="currentColor" fontSize="10" opacity="0.6" fontFamily="monospace">cache='hit'</text>
      
      <text x="400" y="330" fill="currentColor" fontSize="12" opacity="0.8">GROUP BY</text>
      <text x="480" y="330" fill="currentColor" fontSize="10" opacity="0.6" fontFamily="monospace">source_path</text>
      
      <text x="700" y="330" fill="currentColor" fontSize="12" opacity="0.8">WHERE</text>
      <text x="750" y="330" fill="currentColor" fontSize="10" opacity="0.6" fontFamily="monospace">status {'>='} 500</text>
      
      {/* Blue line (top) */}
      <path 
        d="M0,150 C50,140 100,130 150,100 C200,70 250,120 300,110 C350,100 400,50 450,80 C500,110 550,130 600,90 C650,50 700,70 750,60 C800,50"
        stroke="url(#blueGradient)" 
        strokeWidth="2.5"
        fill="none"
        filter="url(#blueGlow)"
        className="animate-pulse-glow"
      />
      
      {/* Green line (middle) */}
      <path 
        d="M0,250 C50,220 100,260 150,230 C200,200 250,220 300,190 C350,160 400,180 450,200 C500,220 550,190 600,210 C650,230 700,210 750,180 C800,150"
        stroke="url(#greenGradient)" 
        strokeWidth="2.5"
        fill="none"
        filter="url(#greenGlow)"
      />
      
      {/* Red line (bottom) */}
      <path 
        d="M0,300 C50,320 100,290 150,320 C200,350 250,310 300,330 C350,350 400,320 450,340 C500,360 550,330 600,310 C650,290 700,320 750,330 C800,340"
        stroke="url(#redGradient)" 
        strokeWidth="2.5"
        fill="none"
        filter="url(#redGlow)"
      />
      
      {/* Highlight points */}
      <circle cx="150" cy="100" r="3" fill="#4FC3F7" filter="url(#blueGlow)" />
      <circle cx="450" cy="80" r="3" fill="#4FC3F7" filter="url(#blueGlow)" />
      <circle cx="750" cy="60" r="3" fill="#4FC3F7" filter="url(#blueGlow)" />
      
      <circle cx="300" cy="190" r="3" fill="#8BC34A" filter="url(#greenGlow)" />
      <circle cx="600" cy="210" r="3" fill="#8BC34A" filter="url(#greenGlow)" />
      
      <circle cx="200" cy="350" r="3" fill="#FF5252" filter="url(#redGlow)" />
      <circle cx="500" cy="360" r="3" fill="#FF5252" filter="url(#redGlow)" />
    </svg>
  );
};
