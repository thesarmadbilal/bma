
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, HandHeart, BookOpen, Users, Sparkles, Target } from "lucide-react";

const ValueCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = (element: HTMLDivElement | null) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  };

  const [inView, setInView] = React.useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setInView(isInView(ref.current));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.4, delay: inView ? delay : 0, ease: "easeInOut" }}
      className="h-full"
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-border/50">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm flex-grow">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const CoreValues: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -30]); 
  
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We hold ourselves to the highest ethical standards, ensuring transparency and honesty in all interactions."
    },
    {
      icon: HandHeart,
      title: "Client Focus",
      description: "Our clients' success is our priority. We listen, understand, and deliver solutions that create lasting value."
    },
    {
      icon: BookOpen,
      title: "Knowledge",
      description: "We continuously pursue expertise and intellectual rigor to provide informed insights and guidance."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, combining diverse perspectives to achieve exceptional results."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "We embrace change and creativity, consistently developing forward-thinking solutions for evolving markets."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, relentlessly pursuing quality and precision."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <motion.div 
        className="absolute center-left opacity-20 pointer-events-none z-0"
        style={{ 
          backgroundImage: "url('/placeholder.svg')",
          backgroundSize: "cover",
          width: "40%",
          height: "60%",
          top: "20%",
          left: "5%",
          y: y2,
          willChange: "transform"
        }}
      />
      
      <div className="w-full h-24 absolute top-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-current text-background"
          ></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <Badge className="mb-2">Our Foundation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide our decisions, shape our culture, and define how we serve our clients and community.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
      
      <div className="w-full h-24 absolute bottom-0 left-0 right-0 overflow-hidden transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-current text-background"
          ></path>
        </svg>
      </div>
    </section>
  );
};
