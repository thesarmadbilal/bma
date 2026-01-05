
import React from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ServiceType } from './types';
import { Target } from '@/components/icons/MarketIcons';

interface ServiceDetailProps {
  service: ServiceType | null;
  onClose: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onClose }) => {
  const { theme } = useTheme();
  const { toast } = useToast();
  
  if (!service) return null;
  
  const handleLearnMore = () => {
    toast({
      title: `Learn more about ${service.title}`,
      description: `We'll send you detailed information about our ${service.title.toLowerCase()} services.`,
      duration: 3000,
    });
  };
  
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`absolute top-0 left-0 right-0 bottom-0 z-20 p-6 rounded-xl overflow-hidden ${
          theme === 'dark' 
            ? 'bg-gray-800/95 backdrop-blur-sm border border-gray-700'
            : 'bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl'
        }`}
      >
        <div className="relative h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'
              }`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold">{service.title}</h2>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </Button>
          </div>
          
          <div className="flex-grow overflow-y-auto pr-2">
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {service.fullDescription || `Our ${service.title} services provide comprehensive solutions tailored to your specific financial needs. At BMA Capital, we leverage our extensive expertise and market insights to deliver exceptional value.`}
            </p>
            
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="space-y-2 mb-6">
              {service.features ? service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <BadgeCheck className={`h-5 w-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-primary' : 'text-primary'}`} />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {feature}
                  </span>
                </li>
              )) : (
                <>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className={`h-5 w-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-primary' : 'text-primary'}`} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      Expert guidance from industry professionals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className={`h-5 w-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-primary' : 'text-primary'}`} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      Tailored solutions to meet your specific goals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className={`h-5 w-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-primary' : 'text-primary'}`} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      Comprehensive market insights and research
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className={`h-5 w-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-primary' : 'text-primary'}`} />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      Advanced tools and platforms for optimal performance
                    </span>
                  </li>
                </>
              )}
            </ul>
            
            <div className={`p-4 rounded-lg mb-6 ${
              theme === 'dark' ? 'bg-gray-900/50 border border-gray-700/50' : 'bg-gray-50 border border-gray-200/50'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <Target className={`h-5 w-5 ${theme === 'dark' ? 'text-primary' : 'text-primary'}`} />
                <h4 className="font-medium">Why Choose BMA Capital</h4>
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                With over 25 years of experience, our team of experts ensures you receive the highest quality {service.title.toLowerCase()} services tailored to your specific needs. We combine innovative technology with deep market insights to deliver exceptional results.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t border-gray-700/20">
            <Button className="rounded-full px-6 gap-2 group bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 flex-1" onClick={handleLearnMore}>
              Learn More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className={`rounded-full px-6 ${
              theme === 'dark' 
                ? 'border-white/20 text-white hover:bg-white/10' 
                : 'border-gray-300 text-gray-800 hover:bg-gray-100'
            }`} onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
