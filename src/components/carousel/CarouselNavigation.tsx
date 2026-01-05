
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface CarouselNavigationProps {
  activeIndex: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  theme: 'dark' | 'light';
}

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({ 
  activeIndex, 
  totalItems, 
  onPrev, 
  onNext, 
  onDotClick,
  theme
}) => {
  return (
    <div className="flex justify-between mt-4">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={onPrev}
        className="rounded-full"
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      
      <div className="flex items-center gap-1">
        {Array.from({ length: totalItems }).map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === activeIndex 
                ? 'bg-primary w-4' 
                : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
            }`}
            onClick={() => onDotClick(idx)}
            aria-label={`Show service ${idx + 1}`}
          />
        ))}
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        onClick={onNext}
        className="rounded-full"
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
