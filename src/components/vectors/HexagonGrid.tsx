
import React, { useState, useEffect } from 'react';

interface HexagonGridProps {
  className?: string;
}

export const HexagonGrid: React.FC<HexagonGridProps> = ({ className }) => {
  const [animatedHexagons, setAnimatedHexagons] = useState<{ x: number, y: number, delay: number }[]>([]);

  useEffect(() => {
    // Generate random positioned hexagons for animation
    const hexagons = [];
    for (let i = 0; i < 5; i++) {
      hexagons.push({
        x: Math.floor(Math.random() * 80) + 10,
        y: Math.floor(Math.random() * 80) + 10,
        delay: Math.random() * 5
      });
    }
    setAnimatedHexagons(hexagons);
  }, []);

  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hexagons" width="20" height="34.64" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
          <path 
            d="M10 17.32l-10 0 -5 -8.66 5 -8.66 10 0 5 8.66z" 
            stroke="currentColor" 
            strokeOpacity="0.3"
            fill="none"
            strokeWidth="0.5"
          />
          <path 
            d="M25 17.32l-10 0 -5 -8.66 5 -8.66 10 0 5 8.66z" 
            stroke="currentColor" 
            strokeOpacity="0.2"
            fill="none"
            strokeWidth="0.5"
            transform="translate(15, 25.98)"
          />
        </pattern>
        
        {/* Add glowing effect for some hexagons */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Add pulsating animation */}
        <radialGradient id="pulse-gradient" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.5">
            <animate 
              attributeName="stop-opacity" 
              values="0.5;0.2;0.5" 
              dur="4s" 
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      
      <rect width="100" height="100" fill="url(#hexagons)" />
      
      {/* Add some highlighted hexagons */}
      <path 
        d="M30 34.64l-10 0 -5 -8.66 5 -8.66 10 0 5 8.66z" 
        stroke="currentColor" 
        strokeOpacity="0.7"
        fill="url(#pulse-gradient)"
        strokeWidth="0.5"
        filter="url(#glow)"
      />
      
      <path 
        d="M70 60.62l-10 0 -5 -8.66 5 -8.66 10 0 5 8.66z" 
        stroke="currentColor" 
        strokeOpacity="0.7"
        fill="url(#pulse-gradient)"
        strokeWidth="0.5"
        filter="url(#glow)"
      />
      
      <path 
        d="M55 17.32l-10 0 -5 -8.66 5 -8.66 10 0 5 8.66z" 
        stroke="currentColor" 
        strokeOpacity="0.7"
        fill="url(#pulse-gradient)"
        strokeWidth="0.5"
        filter="url(#glow)"
      />
      
      {/* Add dynamically generated animated hexagons */}
      {animatedHexagons.map((hex, index) => (
        <g key={index}>
          <path 
            d={`M${hex.x} ${hex.y}l-5 0 -2.5 -4.33 2.5 -4.33 5 0 2.5 4.33z`}
            stroke="currentColor" 
            strokeOpacity="0.8"
            fill="currentColor"
            fillOpacity="0.15"
            strokeWidth="0.5"
            filter="url(#glow)"
          >
            <animate 
              attributeName="fill-opacity" 
              values="0.15;0.3;0.15" 
              dur={`${3 + hex.delay}s`}
              repeatCount="indefinite"
            />
            <animate 
              attributeName="stroke-opacity" 
              values="0.8;1;0.8" 
              dur={`${2 + hex.delay}s`}
              repeatCount="indefinite"
            />
          </path>
          <circle 
            cx={hex.x} 
            cy={hex.y} 
            r="1" 
            fill="currentColor"
            opacity="0.8"
          >
            <animate 
              attributeName="r" 
              values="0.3;0.8;0.3" 
              dur={`${2 + hex.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
      
      {/* Add data flow lines */}
      <path 
        d="M10,90 Q30,70 50,80 T90,60" 
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="0.5"
        fill="none"
        strokeDasharray="1 2"
      >
        <animate 
          attributeName="stroke-dashoffset" 
          values="0;10" 
          dur="5s"
          repeatCount="indefinite"
        />
      </path>
      
      <path 
        d="M5,20 Q25,40 45,30 T95,40" 
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="0.5"
        fill="none"
        strokeDasharray="1 2"
      >
        <animate 
          attributeName="stroke-dashoffset" 
          values="0;10" 
          dur="7s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};
