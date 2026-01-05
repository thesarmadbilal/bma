
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  title: string;
  duration?: number;
  delay?: number;
  className?: string;
  valueClassName?: string;
  titleClassName?: string;
  easing?: (t: number) => number;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  title,
  duration = 2000,
  delay = 0,
  className = '',
  valueClassName = 'text-3xl font-bold text-primary',
  titleClassName = 'text-sm text-muted-foreground',
  easing = (t) => t * (2 - t), // easeOutQuad
}) => {
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>();
  const { count } = useCountUp({
    end: value,
    duration,
    delay,
    easing,
    enabled: isInView
  });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeInOut", delay: delay / 1000 }}
      className={`text-center ${className}`}
    >
      <p className={valueClassName}>{prefix}{count}{suffix}</p>
      <p className={titleClassName}>{title}</p>
    </motion.div>
  );
};
