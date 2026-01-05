import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { FuturisticBackground } from '@/components/FuturisticBackground';
import { useTheme } from '@/components/theme/ThemeProvider';
import { ServiceCard } from './ServiceCard';
import { ServiceDetail } from './hero/ServiceDetail';
import { MouseFollower } from './hero/MouseFollower';
import { Bubble } from './hero/Bubble';
import { services } from './hero/services';
import { HeroHeader } from './hero/HeroHeader';
import { HeroActions } from './hero/HeroActions';
import { HeroStats } from './hero/HeroStats';
import { HeroFeatures } from './hero/HeroFeatures';
import { ScrollIndicator } from './hero/ScrollIndicator';
import { useMousePosition } from '@/hooks/useMousePosition';
import type { ServiceType } from './hero/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export function NewHeroSection() {
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [detailService, setDetailService] = useState<ServiceType | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  
  const mousePosition = useMousePosition(sectionRef);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const handleServiceClick = (service) => {
    navigate("/business-activities");
  };
  
  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen pt-28 pb-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      <FuturisticBackground intensity="low" className="absolute inset-0">
        <MouseFollower mousePosition={mousePosition} />
        
        <Bubble size={100} initialX="20%" initialY="80%" duration={15} />
        <Bubble size={60} initialX="60%" initialY="70%" duration={12} />
        <Bubble size={80} initialX="80%" initialY="60%" duration={18} />
        <Bubble size={120} initialX="30%" initialY="90%" duration={20} />
        
        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid lg:grid-cols-12 gap-12 items-center"
          >
            <motion.div 
              className="flex flex-col justify-center space-y-8 lg:col-span-5"
            >
              <HeroHeader />
              <HeroActions />
              <HeroStats />
              <HeroFeatures />
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { scale: 0.95, opacity: 0 },
                visible: { 
                  scale: 1, 
                  opacity: 1,
                  transition: { 
                    type: "spring",
                    stiffness: 50 
                  }
                }
              }}
              className="relative lg:col-span-7"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className={`w-full h-full p-6 rounded-1xl relative overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gray-800/30 backdrop-blur-md border border-white/10 shadow-xl'
                    : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl'
                }`}
              >
                <div className="grid grid-cols-3 md:grid-cols-3 gap-2 relative">
                  <ServiceCard 
                      title="Equities"
                      description="This is description"
                      backgroundImage="/lovable-uploads/equities.png"
                      onClick={() => handleServiceClick({id: '1', title: 'my title', description: 'This is description'})}
                      active={selectedService === '1'}
                    />
                    <ServiceCard 
                      title="Investment Banking"
                      description="This is description"
                      backgroundImage="/lovable-uploads/investment.png"
                      onClick={() => handleServiceClick({id: '1', title: 'my title', description: 'This is description'})}
                      active={selectedService === '1'}
                    />
                    <ServiceCard 
                      title="Investment Advisory"
                      description="This is description"
                      backgroundImage="/lovable-uploads/advisory.png"
                      onClick={() => handleServiceClick({id: '1', title: 'my title', description: 'This is description'})}
                      active={selectedService === '1'}
                    />
                    <ServiceCard 
                      title="Commodities"
                      description="This is description"
                      backgroundImage="/lovable-uploads/commodities.png"
                      onClick={() => handleServiceClick({id: '1', title: 'my title', description: 'This is description'})}
                      active={selectedService === '1'}
                    />
                    <ServiceCard 
                      title="Money Market/Forex"
                      description="Money Market/Forex"
                      backgroundImage="/lovable-uploads/money.png"
                      onClick={() => handleServiceClick({id: '1', title: 'my title', description: 'This is description'})}
                      active={selectedService === '1'}
                    />
                    <ServiceCard 
                      title="Research"
                      description="This is description"
                      backgroundImage="/lovable-uploads/research.png"
                      onClick={() => handleServiceClick({id: '1', title: 'my title', description: 'This is description'})}
                      active={selectedService === '1'}
                    />
                  {detailService && (
                    <ServiceDetail 
                      service={detailService} 
                      onClose={() => setDetailService(null)} 
                    />
                  )}
                </div>
              </motion.div>
              
              <div className={`absolute -z-10 top-10 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
                theme === 'dark' ? 'bg-primary' : 'bg-primary'
              }`}></div>
              <div className={`absolute -z-10 -bottom-10 -left-10 w-48 h-48 rounded-full blur-3xl opacity-20 ${
                theme === 'dark' ? 'bg-purple-500' : 'bg-purple-500'
              }`}></div>
            </motion.div>
          </motion.div>
          
          <ScrollIndicator />
        </div>
      </FuturisticBackground>
    </section>
  );
}
