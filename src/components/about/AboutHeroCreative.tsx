import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HexagonGrid } from "@/components/vectors/HexagonGrid";
import { useTheme } from "@/components/theme/ThemeProvider";
import { ArrowRight, Users, Calendar, Award } from "lucide-react";

export const AboutHeroCreative = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const { theme } = useTheme();
  
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
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[#1A1F2C]' : 'bg-gradient-to-br from-gray-50 to-white'}`}></div>
        <HexagonGrid className={`absolute inset-0 ${theme === 'dark' ? 'text-primary/5' : 'text-primary/10'}`} />
        
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl bg-primary/10"></div>
        <div className="absolute top-20 right-0 w-64 h-64 rounded-full blur-3xl bg-purple-500/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-2 px-3 py-1 text-sm" variant="outline">Est. 1992</Badge>
            </motion.div>
            <motion.h1 
              variants={itemVariants}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${theme === 'dark' ? '' : 'text-gray-900'}`}
            >
              Three Decades of 
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-primary via-purple-400 to-primary'
                  : 'from-primary via-purple-600 to-primary'
              }`}>Financial Excellence</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-xl`}
            >
              BMA Capital has been at the forefront of Pakistan's financial landscape, pioneering solutions 
              that empower our clients to achieve their investment goals with confidence.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 group" asChild>
                <a href="#team">
                  <span>Meet Our Team</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              {/* <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#journey">Our Journey</a>
              </Button> */}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className={`relative rounded-xl overflow-hidden ${theme === 'dark' ? 'backdrop-blur-lg bg-white/5 border border-white/10 neo-glow' : 'bg-white/90 border border-gray-200 shadow-xl backdrop-blur-sm'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Moazzam M. Malik */}
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src="/lovable-uploads/moazam.jpg" 
                    alt="BMA Capital Office" 
                    className="object-cover w-full h-full transition-transform duration-5000 hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-black/50 to-transparent' : 'bg-gradient-to-t text-white from-black/30 to-transparent'}`}></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Moazzam M. Malik</h3>
                    <p className="text-md opacity-90">Chairman & CEO</p>
                  </div>
                </div>
                {/* Miral Malik */}
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src="/lovable-uploads/miral.jpg" 
                    alt="BMA Capital Team" 
                    className="object-cover w-full h-full transition-transform duration-5000 hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-black/50 to-transparent' : 'bg-gradient-to-t from-black/30 to-transparent'}`}></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="text-lg font-bold">Miral Malik</h3>
                    <p className="text-md opacity-90">Director</p>
                  </div>
                </div>
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src="/lovable-uploads/jawad.jpg" 
                    alt="BMA Capital Team" 
                    className="object-cover w-full h-full transition-transform duration-5000 hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-black/50 to-transparent' : 'bg-gradient-to-t from-black/30 to-transparent'}`}></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="text-lg font-bold">Jawad Bhatti</h3>
                    <p className="text-md opacity-90">COO</p>
                  </div>
                </div>
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src="/lovable-uploads/hammad.jpeg" 
                    alt="BMA Capital Team" 
                    className="object-cover w-full h-full transition-transform duration-5000 hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-black/50 to-transparent' : 'bg-gradient-to-t from-black/30 to-transparent'}`}></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="text-lg font-bold">Syed Hammad</h3>
                    <p className="text-md opacity-90">CFO</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 rounded-full blur-3xl bg-primary/20"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 rounded-full blur-3xl bg-purple-500/20"></div>
          </motion.div>
        </div>
        
        
      </div>
    </section>
  );
};
