
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { ServiceType } from '@/components/hero/types';

interface ServiceCardProps {
  service: ServiceType;
  onClick: () => void;
  isSelected?: boolean;
}

export function ServiceCard({ service, onClick, isSelected }: ServiceCardProps) {
  const { theme } = useTheme();
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
    >
      <Card className={`h-full overflow-hidden transition-all duration-300 ${
        isSelected ? 'ring-2 ring-primary' : ''
      } ${theme === 'dark' ? 'hover:bg-accent/10' : 'hover:bg-accent/40'}`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="rounded-lg p-3 bg-primary/10 h-12 w-12 flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-bold mt-4">{service.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{service.description}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button 
            onClick={onClick} 
            variant="ghost" 
            className="pl-0 hover:pl-2 transition-all duration-300"
          >
            Learn more <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
