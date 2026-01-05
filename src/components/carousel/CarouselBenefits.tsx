
import React from 'react';
import { motion } from 'framer-motion';

interface CarouselBenefitsProps {
  benefits: string[];
  theme: 'dark' | 'light';
}

export const CarouselBenefits: React.FC<CarouselBenefitsProps> = ({ benefits, theme }) => {
  return (
    <div className="mt-6 space-y-4">
      <div className={`p-4 rounded-lg ${
        theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'
      }`}>
        <h4 className="font-medium mb-2">Key Benefits</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="flex items-start gap-2"
            >
              <span className="text-primary mt-1">•</span>
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};
