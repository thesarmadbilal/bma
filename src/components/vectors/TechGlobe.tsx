
import React from 'react';

interface TechGlobeProps {
  className?: string;
}

export const TechGlobe: React.FC<TechGlobeProps> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Globe */}
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
      
      {/* Latitude lines */}
      <ellipse cx="100" cy="100" rx="60" ry="20" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
      <ellipse cx="100" cy="100" rx="45" ry="15" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
      <ellipse cx="100" cy="100" rx="30" ry="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
      
      {/* Longitude lines */}
      <path d="M100 40 A60 60 0 0 1 100 160" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
      <path d="M100 40 A60 60 0 0 0 100 160" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
      <path d="M40 100 A60 60 0 0 0 160 100" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
      <path d="M40 100 A60 60 0 1 1 160 100" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
      
      {/* Connection points */}
      <circle cx="70" cy="80" r="3" fill="currentColor" className="animate-pulse-glow" />
      <circle cx="130" cy="90" r="3" fill="currentColor" className="animate-pulse-glow" style={{ animationDelay: "0.7s" }} />
      <circle cx="90" cy="130" r="3" fill="currentColor" className="animate-pulse-glow" style={{ animationDelay: "1.4s" }} />
      
      {/* Connection lines */}
      <path d="M70 80 L130 90" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.5" />
      <path d="M130 90 L90 130" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.5" />
      <path d="M90 130 L70 80" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.5" />
    </svg>
  );
};
