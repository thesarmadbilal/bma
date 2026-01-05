
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatedScrollArea } from "@/components/AnimatedScrollArea";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChartPieIcon, BarChart3, BadgeDollarSign, Building2, ArrowRight, LineChart, DollarSign, BookOpenCheck } from "lucide-react";

interface ServiceTooltipProps {
  serviceType: "equities" | "investment-banking" | "asset-management" | "financial-services";
  children: React.ReactNode;
}

export const ServiceTooltip = ({ serviceType, children }: ServiceTooltipProps) => {
  const prefersReducedMotion = useReducedMotion();

  const services = {
    "equities": {
      title: "Equities",
      icon: ChartPieIcon,
      description: "BMA Equity Sales desk ranks amongst the top in the industry by market share and offers equity execution to local as well as international clients. BMA is proud to have the largest setup of international broker-dealers in Pakistan and our desks have been the recipient of multiple awards including being ranked amongst the top 3 in Pakistan by Asia Money for local brokerage house, most improved brokerage house and best sales person. BMA Equity team has a strength of over 19 seasoned professionals with a combined equity sales experience of 225 years. Our sales traders provide constant and timely color on market moves and news flow which impact price action. We ensure best execution through our utmost emphasis on compliance, order security and the highest ethical standards. BMA follows an agency brokerage model which further minimizes risk and conflict of interest.",
      features: [
        "Online trading platform",
        "Research reports",
        "Market analysis",
        "Dedicated broker support"
      ],
      color: "bg-purple-500",
      ctaLabel: "Explore Trading Solutions"
    },
    "investment-banking": {
      title: "Investment Banking",
      icon: Building2,
      description: "Strategic advisory, mergers & acquisitions, and capital raising",
      features: [
        "IPO management",
        "M&A advisory",
        "Debt & equity offerings",
        "Corporate restructuring"
      ],
      color: "bg-pink-500",
      ctaLabel: "Discover Advisory Services"
    },
    "asset-management": {
      title: "Asset Management",
      icon: BarChart3,
      description: "Professional portfolio management with a focus on long-term growth",
      features: [
        "Mutual funds",
        "Pension management",
        "Private wealth",
        "Institutional portfolios"
      ],
      color: "bg-orange-500",
      ctaLabel: "Explore Investment Options"
    },
    "financial-services": {
      title: "Financial Services",
      icon: BadgeDollarSign,
      description: "Comprehensive advisory services for individuals and businesses",
      features: [
        "Financial planning",
        "Corporate advisory",
        "Risk management",
        "International investments"
      ],
      color: "bg-blue-500",
      ctaLabel: "Get Financial Guidance"
    }
  };

  const service = services[serviceType];
  const ServiceIcon = service.icon;

  const tooltipVariants = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: 10, 
      scale: 0.95,
      transition: { duration: prefersReducedMotion ? 0 : 0.1, ease: "easeIn" }
    }
  };

  const featureItemVariants = {
    initial: prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 },
    animate: (i: number) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { 
        delay: prefersReducedMotion ? 0 : 0.05 * i,
        duration: prefersReducedMotion ? 0 : 0.2
      } 
    })
  };

  // Adding interactive elements
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent 
          side="bottom"
          align="center"
          className="w-72 p-0 border-primary/20 overflow-hidden"
          sideOffset={5}
        >
          <motion.div 
            className="flex flex-col bg-card/95 backdrop-blur-sm rounded-md overflow-hidden border border-primary/20 shadow-lg"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={tooltipVariants}
            style={{ willChange: 'transform, opacity' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`p-3 flex items-center gap-3 ${service.color} bg-opacity-20 relative overflow-hidden`}>
              {/* Animated background effect */}
              <motion.div 
                className={`absolute inset-0 ${service.color} bg-opacity-10`}
                initial={{ x: '-100%' }}
                animate={{ x: isHovered ? '0%' : '-100%' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              
              <div className={`${service.color} p-2 rounded-full bg-opacity-25 relative z-10`}>
                <ServiceIcon className="h-5 w-5 text-white" />
              </div>
              <div className="relative z-10">
                <h4 className="font-medium">{service.title}</h4>
                <p className="text-xs text-muted-foreground">{service.description}</p>
              </div>
            </div>
            <div className="p-3">
              <ul className="text-sm space-y-1.5 mb-4">
                {service.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-2"
                    variants={featureItemVariants}
                    custom={index}
                    initial="initial"
                    animate="animate"
                    style={{ willChange: prefersReducedMotion ? 'auto' : 'transform, opacity' }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${service.color}`} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                size="sm" 
                className={`w-full text-xs group relative overflow-hidden ${
                  isHovered ? 'border-primary' : ''
                }`}
                asChild
              >
                <a href={`/#${serviceType}`}>
                  {/* Button background animation */}
                  <motion.div 
                    className={`absolute inset-0 ${service.color} bg-opacity-10`}
                    initial={{ x: '-100%' }}
                    animate={{ x: isHovered ? '0%' : '-100%' }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  
                  <span className="flex items-center justify-center gap-1 relative z-10">
                    {service.ctaLabel}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Button>
            </div>
          </motion.div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
