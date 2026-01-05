
import React from 'react';

interface BMALogoProps {
  className?: string;
  variant?: 'default' | 'white' | 'full';
}

export const BMALogo: React.FC<BMALogoProps> = ({ 
  className = "", 
  variant = 'default'
}) => {
  // Use appropriate text color based on variant
  const textColor = variant === 'white' ? 'text-white' : 'text-gray-600';
  
  if (variant === 'full') {
    return (
      <div className={`flex items-center ${className}`}>
        <div className="flex items-center">
          {/* BMA Capital full logo */}
          <div className="relative mr-2">
            <div className="w-10 h-10 bg-red-600 relative">
              <div className="absolute top-0 right-0 border-t-[10px] border-r-[10px] border-white transform rotate-0"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[8px] border-b-[8px] border-transparent border-b-white"></div>
              <div className="absolute top-1/2 left-1/2 w-0 h-0 border-t-[8px] border-r-[8px] border-transparent border-r-white transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl text-gray-600">BMA</div>
            <div className="text-xs tracking-widest text-red-600 uppercase">CAPITAL</div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center">
        {/* Stylized BMA logo */}
        <div className="mr-1 relative">
          <div className="w-8 h-8 bg-red-600 relative">
            <div className="absolute top-0 right-0 border-t-[8px] border-r-[8px] border-white transform rotate-0"></div>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[6px] border-b-[6px] border-transparent border-b-white"></div>
            <div className="absolute top-1/2 left-1/2 w-0 h-0 border-t-[6px] border-r-[6px] border-transparent border-r-white transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>
        </div>
        <div className={`font-bold text-xl ${textColor}`}>
          <span className="font-extrabold tracking-tight">BMA</span>
        </div>
      </div>
    </div>
  );
};
