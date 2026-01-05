import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from './ui/button';
import { 
  Shield, 
  Award, 
  RefreshCcw, 
  ChevronRight, 
  ArrowRight,
  ChartPieIcon, 
  BarChart3, 
  Building2, 
  BadgeDollarSign,
  LineChart,
  DollarSign,
  BookOpenCheck,
} from 'lucide-react';
import { HexagonGrid } from './vectors/HexagonGrid';
import { useTheme } from './theme/ThemeProvider';
import { FinancialHouse } from './vectors/FinancialHouse';
import { ServiceTooltip } from './ServiceTooltip';
import { ServiceCarousel } from './carousel/ServiceCarousel';

export function HeroSection() {
  const { theme } = useTheme();
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isCarouselMode, setIsCarouselMode] = useState(false);
  
  const services = [
    {
      id: "equities",
      title: "Equities",
      icon: ChartPieIcon,
      description: "Access Pakistan's stock market with expert research and execution",
      tooltipType: "equities" as const,
    },
    {
      id: "investment-banking",
      title: "Investment Banking",
      icon: Building2,
      description: "Strategic advisory, mergers & acquisitions, and capital raising",
      tooltipType: "investment-banking" as const,
    },
    {
      id: "asset-management",
      title: "Asset Management",
      icon: BarChart3,
      description: "Professional portfolio management with a focus on long-term growth",
      tooltipType: "asset-management" as const,
    },
    {
      id: "financial-services",
      title: "Financial Services",
      icon: BadgeDollarSign,
      description: "Comprehensive advisory services for individuals and businesses",
      tooltipType: "financial-services" as const,
    },
    {
      id: "commodities",
      title: "Commodities",
      icon: LineChart,
      description: "Trade commodities with sophisticated tools and expert guidance",
      tooltipType: "financial-services" as const,
    },
    {
      id: "money-market",
      title: "Money Market/Forex",
      icon: DollarSign,
      description: "Access global currency markets and money market instruments",
      tooltipType: "financial-services" as const,
    },
    {
      id: "research",
      title: "Research",
      icon: BookOpenCheck,
      description: "In-depth market analysis and investment recommendations",
      tooltipType: "financial-services" as const,
    }
  ];

  useEffect(() => {
    if (!isCarouselMode) return;
    
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isCarouselMode, services.length]);

  return (
    <section className={`relative min-h-screen pt-32 pb-20 overflow-hidden transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 to-gray-950' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 lg:pt-8">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${
                theme === 'light' ? 'text-gray-900' : ''
              }`}>
                Your Complete
                <span className={`block mt-2 text-transparent bg-clip-text bg-gradient-to-r ${
                  theme === 'dark' 
                    ? 'from-primary via-purple-400 to-primary'
                    : 'from-primary via-purple-600 to-primary'
                }`}>
                  Financial Partner
                </span>
              </h1>
              <p className={`text-xl max-w-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                BMA Capital provides integrated financial solutions across equities, investment banking, asset management, and advisory services – all under one trusted roof.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className={`rounded-full py-6 px-8 text-lg ${
                  theme === 'dark' 
                    ? 'border-white/20 text-white hover:bg-white/10' 
                    : 'border-gray-300 text-gray-800 hover:bg-gray-100'
                }`}
                asChild
              >
                <a href="#service-offerings">
                  Explore Services
                </a>
              </Button>
              <Button 
                size="lg" 
                variant={isCarouselMode ? "default" : "secondary"}
                className="gap-2 rounded-full py-6 px-8 text-lg"
                onClick={() => setIsCarouselMode(!isCarouselMode)}
              >
                {isCarouselMode ? "View All" : "Showcase"}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2">
                <Shield className={`h-5 w-5 ${theme === 'dark' ? 'text-primary' : 'text-primary'} animate-pulse-glow`} />
                <span className={theme === 'dark' ? 'text-sm text-gray-300' : 'text-sm text-gray-700 font-medium'}>
                  Robust Trading Application
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className={`h-5 w-5 ${theme === 'dark' ? 'text-primary' : 'text-primary'} animate-pulse-glow`} />
                <span className={theme === 'dark' ? 'text-sm text-gray-300' : 'text-sm text-gray-700 font-medium'}>
                  Award-winning research
                </span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCcw className={`h-5 w-5 ${theme === 'dark' ? 'text-primary' : 'text-primary'} animate-pulse-glow`} />
                <span className={theme === 'dark' ? 'text-sm text-gray-300' : 'text-sm text-gray-700 font-medium'}>
                  24/7 customer support
                </span>
              </div>
            </motion.div>
            
            <AnimatePresence mode="wait">
              {isCarouselMode ? (
                <motion.div
                  key="carousel"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="pt-4"
                >
                  <ServiceCarousel 
                    services={services} 
                    activeIndex={activeServiceIndex}
                    onIndexChange={setActiveServiceIndex}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  key="grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="pt-4 grid grid-cols-2 gap-4 md:grid-cols-4"
                >
                  {services.slice(0, 4).map((service, index) => (
                    <ServiceTooltip key={service.id} serviceType={service.tooltipType}>
                      <motion.div 
                        className={`relative group cursor-pointer p-4 rounded-lg transition-all hover:bg-card/50 border border-transparent hover:border-primary/20 hover:shadow-md ${
                          theme === 'dark' ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100/80'
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className={`mb-3 p-3 rounded-full ${
                            theme === 'dark' 
                              ? 'bg-gray-800/80 text-primary'
                              : 'bg-gray-100 text-primary'
                          } group-hover:bg-primary/20 transition-colors`}>
                            <service.icon className="h-6 w-6" />
                          </div>
                          <h3 className="font-medium text-sm mb-1">{service.title}</h3>
                          <motion.div 
                            className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1 }}
                          >
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </ServiceTooltip>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            
            {!isCarouselMode && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="text-center pt-4"
              >
                <Button 
                  variant="link" 
                  size="sm" 
                  className="gap-2 group"
                  asChild
                >
                  <a href="#service-offerings">
                    View all our services
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
          
          <motion.div 
            className="relative lg:mt-0 mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`rounded-xl overflow-hidden ${
              theme === 'dark'
                ? 'backdrop-blur-lg bg-white/5 border border-white/10 neo-glow'
                : 'bg-white/95 border border-gray-200 shadow-xl backdrop-blur-sm'
            }`}>
              <FinancialHouse className="w-full h-full px-4 py-8" />
            </div>
            
            <div className={`absolute -z-10 -bottom-6 -right-6 w-48 h-48 rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-primary/20' : 'bg-primary/20'
            }`}></div>
            <div className={`absolute -z-10 -top-6 -left-6 w-48 h-48 rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-500/20'
            }`}></div>
            
            <div className="absolute -z-20 inset-0 overflow-hidden">
              <HexagonGrid className={`w-full h-full pointer-events-none ${
                theme === 'dark' ? 'opacity-5' : 'opacity-5'
              } text-primary`} />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl rounded-full blur-3xl -z-10 ${
        theme === 'dark' ? 'bg-primary/5' : 'bg-primary/10'
      }`}></div>
    </section>
  );
}
