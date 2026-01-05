
import React from 'react';

interface QuoteIconProps {
  className?: string;
}

export const QuoteIcon: React.FC<QuoteIconProps> = ({ className }) => {
  return (
    <svg 
      className={className}
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M11.9997 14.5C11.9997 15.33 11.3297 16 10.4997 16H7.49967C6.66967 16 5.99967 15.33 5.99967 14.5V11.5C5.99967 10.67 6.66967 10 7.49967 10H9.49967C10.3297 10 10.9997 9.33 10.9997 8.5V7.5C10.9997 6.67 10.3297 6 9.49967 6H7.49967C6.66967 6 5.99967 6.67 5.99967 7.5M17.9997 14.5C17.9997 15.33 17.3297 16 16.4997 16H13.4997C12.6697 16 11.9997 15.33 11.9997 14.5V11.5C11.9997 10.67 12.6697 10 13.4997 10H15.4997C16.3297 10 16.9997 9.33 16.9997 8.5V7.5C16.9997 6.67 16.3297 6 15.4997 6H13.4997C12.6697 6 11.9997 6.67 11.9997 7.5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};
