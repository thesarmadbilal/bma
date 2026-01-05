import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const AboutHero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeInOut",
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.4
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-2">About BMA Capital</Badge>
            </motion.div>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Pakistan's Premier <span className="text-primary">Investment Bank</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              Since 1992, BMA Capital has been a pioneer in Pakistan's financial markets, 
              delivering innovative solutions and exceptional value to our clients.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="pt-4 flex flex-wrap gap-4"
            >
              <Button size="lg" className="transition-all duration-300 hover:scale-105">Our Services</Button>
              <Button size="lg" variant="outline" className="transition-all duration-300 hover:scale-105">Contact Us</Button>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              <CounterStat value={30} suffix="+" label="Years Experience" delay={0.1} />
              <CounterStat value={100} suffix="+" label="Financial Experts" delay={0.2} />
              <CounterStat value={500} suffix="+" label="Happy Clients" delay={0.3} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface CounterStatProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const CounterStat: React.FC<CounterStatProps> = ({ value, suffix = "", label, delay = 0 }) => {
  const [count, setCount] = React.useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(value / (duration / 16));
    
    setTimeout(() => {
      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      
      return () => {
        clearInterval(timer);
      };
    }, delay * 1000);
  }, [isInView, value, delay]);
  
  return (
    <motion.div 
      className="text-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.4, ease: "easeInOut", delay } 
        }
      }}
      ref={nodeRef}
    >
      <p className="text-3xl font-bold text-primary">{count}{suffix}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
};
