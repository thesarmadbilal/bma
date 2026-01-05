
import React from 'react';

interface DataFlowProps {
  className?: string;
}

export const DataFlow: React.FC<DataFlowProps> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 200 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="animate-pulse-glow"
        d="M10 50 H190"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="3 3"
      />
      <path
        className="animate-pulse-glow"
        d="M10 30 H190"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="6 6"
        style={{ animationDelay: "0.5s" }}
      />
      <path
        className="animate-pulse-glow"
        d="M10 70 H190"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="6 6"
        style={{ animationDelay: "1s" }}
      />
      
      <circle cx="50" cy="50" r="3" fill="currentColor" className="animate-pulse-glow" />
      <circle cx="100" cy="30" r="3" fill="currentColor" className="animate-pulse-glow" style={{ animationDelay: "0.7s" }} />
      <circle cx="150" cy="70" r="3" fill="currentColor" className="animate-pulse-glow" style={{ animationDelay: "1.3s" }} />
    </svg>
  );
};
