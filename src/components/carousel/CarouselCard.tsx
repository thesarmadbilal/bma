
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CarouselBenefits } from './CarouselBenefits';
import { LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tooltipType: string;
}

interface CarouselCardProps {
  service: Service;
  theme: 'dark' | 'light';
  direction: number;
  benefits: string[];
}

export const CarouselCard: React.FC<CarouselCardProps> = ({ 
  service, 
  theme, 
  direction,
  benefits
}) => {
  const ActiveIcon = service.icon;
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      }
    }),
  };
  
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="absolute inset-0"
    >
      <Card className={`h-full w-full overflow-hidden border ${
        theme === 'dark' 
          ? 'bg-gray-900/80 border-gray-800'
          : 'bg-white/95 border-gray-200'
      }`}>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-full bg-primary/10 text-primary`}>
              <ActiveIcon className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl">{service.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            {service.description}
          </CardDescription>
          
          <CarouselBenefits benefits={benefits} theme={theme} />
        </CardContent>
        <CardFooter>
          <Button 
            asChild
            className="gap-2 group"
          >
            <a href={`#${service.id}`}>
              Learn more about {service.title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
