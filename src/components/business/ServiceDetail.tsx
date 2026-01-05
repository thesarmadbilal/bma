
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceType } from '@/components/hero/types';
import { useTheme } from '@/components/theme/ThemeProvider';

interface ServiceDetailProps {
  service: ServiceType;
  onClose: () => void;
  compact?: boolean;
}

export function ServiceDetail({ service, onClose, compact = false }: ServiceDetailProps) {
  const { theme } = useTheme();
  const Icon = service.icon;
  
  // For compact view (list view)
  if (compact) {
    return (
      <Card className="w-full overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-6">
          <div className="md:w-1/4 flex-shrink-0">
            <div className="rounded-lg p-3 bg-primary/10 h-14 w-14 flex items-center justify-center mb-4">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{service.title}</h3>
          </div>
          <div className="md:w-3/4">
            <p className="text-muted-foreground mb-4">{service.fullDescription || service.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features && service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // For expanded view (detail view)
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className={`w-full overflow-hidden border-primary/20 ${theme === 'dark' ? 'bg-card/70' : 'bg-card/90'}`}>
          <CardHeader className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-4">
              <div className="rounded-full p-4 bg-primary/10">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="text-muted-foreground mb-6">{service.fullDescription || service.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {service.features && service.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-end gap-4 bg-muted/30 py-4">
            <Button variant="outline" onClick={onClose}>Close</Button>
            {/* <Button>Contact Us About {service.title}</Button> */}
          </CardFooter>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
