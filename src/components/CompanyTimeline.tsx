
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
  delay: number;
};

const TimelineItem = ({ year, title, description, isLeft, delay }: TimelineItemProps) => {
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
    <div ref={ref} className={`flex items-center ${isLeft ? 'flex-row-reverse' : 'flex-row'} mb-8`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (isLeft ? 20 : -20) }}
        transition={{ duration: 0.4, delay: inView ? delay : 0, ease: "easeInOut" }}
        className={`w-full md:w-5/12 px-4 py-10 ${isLeft ? 'text-right' : 'text-left'}`}
      >
        <div className={`bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:shadow-md transition-all duration-300 ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
          <span className="text-sm font-semibold text-primary">{year}</span>
          <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </motion.div>
      
      <div className="hidden md:flex flex-col items-center w-2/12">
        <div className="w-1 h-full bg-border/50">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ duration: 0.4, delay: inView ? delay + 0.2 : 0, ease: "easeInOut" }}
            className="h-6 w-6 rounded-full border-4 border-primary bg-background -ml-[10px]"
          ></motion.div>
        </div>
      </div>
      
      <div className="w-0 md:w-5/12"></div>
    </div>
  );
};

export const CompanyTimeline = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -30]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -20]);
  
  const timelineEvents = [
    {
      year: "1992",
      title: "Foundation",
      description: "BMA Capital was established, marking the beginning of a premier investment banking firm in Pakistan."
    },
    {
      year: "2000",
      title: "Expansion",
      description: "The company expanded its operations to include comprehensive securities brokerage services."
    },
    {
      year: "2008",
      title: "International Recognition",
      description: "BMA Capital received international recognition for its excellence in investment banking services."
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Launched innovative digital platforms to enhance client services and market accessibility."
    },
    {
      year: "2022",
      title: "33 Years of Excellence",
      description: "Celebrated three decades of leadership in Pakistan's financial services industry."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <motion.div 
        className="absolute top-right opacity-20 pointer-events-none z-0"
        style={{ 
          backgroundImage: "url('/placeholder.svg')",
          backgroundSize: "cover",
          width: "40%",
          height: "50%",
          top: "10%",
          right: "5%",
          y: y1,
          willChange: "transform"
        }}
      />
      
      <motion.div 
        className="absolute bottom-center opacity-20 pointer-events-none z-0"
        style={{ 
          backgroundImage: "url('/placeholder.svg')",
          backgroundSize: "cover",
          width: "100%",
          height: "30%",
          bottom: "5%",
          left: "0%",
          y: y3,
          willChange: "transform"
        }}
      />
      
      <div className="w-full h-24 absolute top-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-current text-background"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-current text-background"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
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
            <Badge className="mb-2">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Company Timeline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore BMA Capital's journey from its founding to becoming Pakistan's premier investment bank.
            </p>
          </motion.div>
        </div>
        
        <div className="relative">
          {/* Vertical line for mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border/50 md:hidden"></div>
          
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <React.Fragment key={event.year}>
                {/* Mobile timeline item */}
                <div className="md:hidden relative mb-8 pl-12">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.15 }}
                    className="absolute left-2 top-2 h-4 w-4 rounded-full border-4 border-primary bg-background"
                  ></motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.15 }}
                    className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50"
                  >
                    <span className="text-sm font-semibold text-primary">{event.year}</span>
                    <h3 className="text-lg font-bold mt-1 mb-1">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </motion.div>
                </div>
                
                {/* Desktop timeline item */}
                <div className="hidden md:block">
                  <TimelineItem 
                    year={event.year}
                    title={event.title}
                    description={event.description}
                    isLeft={index % 2 === 1}
                    delay={index * 0.1}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-full h-24 absolute bottom-0 left-0 right-0 overflow-hidden transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-current text-background"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-current text-background"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-current text-background"
          ></path>
        </svg>
      </div>
    </section>
  );
};
