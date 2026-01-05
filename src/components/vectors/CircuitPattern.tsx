
import React from 'react';

interface CircuitPatternProps {
  className?: string;
}

export const CircuitPattern: React.FC<CircuitPatternProps> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.15 }}
    >
      <path 
        d="M10 10L50 10L50 50" 
        stroke="currentColor" 
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path 
        d="M190 10L150 10L150 50" 
        stroke="currentColor" 
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path 
        d="M190 190L150 190L150 150" 
        stroke="currentColor" 
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path 
        d="M10 190L50 190L50 150" 
        stroke="currentColor" 
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1" />
      <path d="M100 70V10" stroke="currentColor" strokeWidth="1" />
      <path d="M100 190V130" stroke="currentColor" strokeWidth="1" />
      <path d="M130 100H190" stroke="currentColor" strokeWidth="1" />
      <path d="M70 100H10" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="10" r="3" fill="currentColor" />
      <circle cx="100" cy="190" r="3" fill="currentColor" />
      <circle cx="10" cy="100" r="3" fill="currentColor" />
      <circle cx="190" cy="100" r="3" fill="currentColor" />
    </svg>
  );
};
