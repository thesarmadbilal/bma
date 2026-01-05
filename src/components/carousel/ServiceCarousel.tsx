
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/theme/ThemeProvider';
import { CarouselCard } from './CarouselCard';
import { CarouselNavigation } from './CarouselNavigation';
import { generateBenefits } from '@/utils/carouselUtils';
import { LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tooltipType: string;
}

interface ServiceCarouselProps {
  services: Service[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
}

export const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ 
  services, 
  activeIndex, 
  onIndexChange 
}) => {
  const { theme } = useTheme();
  
  const handleNext = () => {
    onIndexChange((activeIndex + 1) % services.length);
  };
  
  const handlePrev = () => {
    onIndexChange((activeIndex - 1 + services.length) % services.length);
  };
  
  // Track the direction of animation
  const [[page, direction], setPage] = React.useState([activeIndex, 0]);
  
  // Update page when activeIndex changes
  React.useEffect(() => {
    const newDirection = activeIndex > page ? 1 : -1;
    setPage([activeIndex, newDirection]);
  }, [activeIndex, page]);
  
  return (
    <div className="relative">
      {/* Service counter indicator */}
      <div className="absolute -top-4 right-0 text-sm font-medium text-muted-foreground">
        {activeIndex + 1} / {services.length}
      </div>
      
      {/* Main card with animation */}
      <div className="relative h-[300px] overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <CarouselCard
            key={page}
            service={services[page]}
            theme={theme}
            direction={direction}
            benefits={generateBenefits(services[page].id)}
          />
        </AnimatePresence>
      </div>
      
      {/* Navigation controls */}
      <CarouselNavigation
        activeIndex={activeIndex}
        totalItems={services.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onDotClick={onIndexChange}
        theme={theme}
      />
    </div>
  );
};
