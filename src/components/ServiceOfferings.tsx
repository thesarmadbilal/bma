
import React from 'react';
import { ChartPieIcon, BarChart3, Building2, BadgeDollarSign, LineChart, DollarSign, BookOpenCheck } from "lucide-react";
import { HexagonGrid } from './vectors/HexagonGrid';
import { useTheme } from './theme/ThemeProvider';
import { motion } from 'framer-motion';

export function ServiceOfferings() {
  const { theme } = useTheme();
  
  const services = [{
    title: "Equities",
    icon: ChartPieIcon
  }, {
    title: "Investment Banking",
    icon: Building2
  }, {
    title: "Asset Management",
    icon: BarChart3
  }, {
    title: "Financial Services",
    icon: BadgeDollarSign
  }, {
    title: "Commodities",
    icon: LineChart
  }, {
    title: "Money Market/Forex",
    icon: DollarSign
  }, {
    title: "Research",
    icon: BookOpenCheck
  }];
  
  return (
    <section id="service-offerings" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? '' : 'text-gray-900'}`}>
            Our Financial Services
          </h2>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Comprehensive financial solutions tailored to meet the diverse needs of our clients, from individuals to institutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
          {services.map((service, index) => (
            <ServiceHexagon 
              key={service.title}
              title={service.title}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceHexagonProps {
  title: string;
  icon: React.ElementType;
  delay?: number;
}

const ServiceHexagon: React.FC<ServiceHexagonProps> = ({
  title,
  icon: Icon,
  delay = 0
}) => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      className="service-offering-container" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="relative w-32 h-32 mb-4 mx-auto">
        <div className={`absolute inset-0 glass-effect rounded-xl neo-glow overflow-hidden ${theme === 'light' ? 'bg-white shadow-light-card' : ''}`}>
          <HexagonGrid className={`absolute inset-0 opacity-10 ${theme === 'light' ? 'text-primary/70' : 'text-primary'}`} />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-12 h-12 animate-pulse-slow ${theme === 'light' ? 'text-primary' : 'text-primary'}`} />
        </div>
      </div>
      <h3 className={`service-offering-title text-center text-lg font-medium ${theme === 'light' ? 'text-gray-800' : ''}`}>
        {title}
      </h3>
    </motion.div>
  );
};
