
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";

export const FinancialHouse = ({ className = "" }: { className?: string }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const controls = useAnimation();
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false, amount: 0.3 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Start animations when component comes into view
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  // Color definitions based on theme
  const colors = {
    primary: isDark ? "#9b87f5" : "#8B5CF6",
    secondary: isDark ? "#D946EF" : "#D946EF",
    tertiary: isDark ? "#F97316" : "#F97316",
    quaternary: isDark ? "#0EA5E9" : "#0EA5E9",
    background: isDark ? "#111827" : "#f8fafc",
    secondaryBg: isDark ? "#1f2937" : "#f1f5f9",
    subtle: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)",
    gridLines: isDark ? "rgba(99, 102, 241, 0.1)" : "rgba(165, 180, 252, 0.1)",
    glow: isDark ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0.1)",
    text: isDark ? "#FFFFFF" : "#1e293b",
    textSecondary: isDark ? "#94a3b8" : "#64748b"
  };

  // Animation variants - optimized for performance
  const networkVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: isReducedMotion ? 0 : 0.1,
        delayChildren: 0.2
      }
    }
  };

  const elementVariants = {
    initial: { opacity: 0, y: 5 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.8 },
    animate: { 
      scale: isReducedMotion ? 1 : [1, 1.03, 1],
      opacity: isReducedMotion ? 0.8 : [0.8, 1, 0.8],
      transition: { 
        duration: 3, 
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  const flowVariants = {
    initial: { pathLength: 0, opacity: 0.4 },
    animate: { 
      pathLength: isReducedMotion ? 1 : [0, 1],
      opacity: isReducedMotion ? 1 : [0.4, 1],
      transition: { 
        duration: 2, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay: 1
      }
    }
  };

  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i: number) => ({
      opacity: isReducedMotion ? 0.8 : [0.4, 0.8, 0.4],
      scale: isReducedMotion ? 1 : [0.8, 1, 0.8],
      x: isReducedMotion ? 0 : [0, i % 2 === 0 ? 10 : -10, 0],
      y: isReducedMotion ? 0 : [0, i % 3 === 0 ? -5 : 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: i * 0.4,
        ease: "easeInOut"
      }
    })
  };

  // Helper function to create optimized waves
  const createWavePath = (
    baseY: number, 
    amplitude: number, 
    frequency: number, 
    phase: number, 
    width: number
  ) => {
    const points = [];
    const segments = 20; // Limited number of segments for performance
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      const y = baseY + amplitude * Math.sin((i / segments) * frequency * Math.PI + phase);
      points.push(`${x},${y}`);
    }
    
    return `M0,${baseY} L${points.join(' L')}`;
  };

  return (
    <div ref={containerRef} className={`${className} overflow-hidden`}>
      <motion.svg
        ref={svgRef}
        viewBox="0 0 800 600"
        className="w-full h-full"
        variants={networkVariants}
        initial="initial"
        animate={controls}
        style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
      >
        {/* Definitions and filters - optimized */}
        <defs>
          <radialGradient id="centerGlow" cx="400" cy="300" r="250" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.15" />
            <stop offset="100%" stopColor={colors.background} stopOpacity="0" />
          </radialGradient>
          
          <pattern id="gridPattern" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="50" stroke={colors.gridLines} strokeWidth="0.5" />
            <line x1="0" y1="0" x2="50" y2="0" stroke={colors.gridLines} strokeWidth="0.5" />
          </pattern>
          
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.8" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.secondary} stopOpacity="0.8" />
            <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.tertiary} stopOpacity="0.8" />
            <stop offset="100%" stopColor={colors.tertiary} stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="flowGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.quaternary} stopOpacity="0.8" />
            <stop offset="100%" stopColor={colors.quaternary} stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Base layers */}
        <rect width="800" height="600" fill={colors.background} />
        <rect width="800" height="600" fill="url(#gridPattern)" opacity="0.5" />
        
        {/* Central glow */}
        <motion.ellipse 
          cx="400" 
          cy="300" 
          rx="300" 
          ry="200" 
          fill="url(#centerGlow)"
          variants={pulseVariants}
        />

        {/* Landscape/terrain base - circuit board foundation */}
        <motion.path
          d={createWavePath(500, 20, 3, 0, 800)}
          fill={colors.secondaryBg}
          stroke="none"
          variants={elementVariants}
        />
        
        {/* Circuit board traces - base layer */}
        <motion.path
          d="M150,300 Q250,200 400,300 Q550,400 650,300"
          fill="none"
          stroke={colors.subtle}
          strokeWidth="40"
          strokeLinecap="round"
          variants={elementVariants}
        />
        
        {/* Central hub - BMA core */}
        <motion.circle
          cx="400"
          cy="300"
          r="45"
          fill={isDark ? "#1E293B" : "#f1f5f9"}
          stroke="#ea384c"
          strokeWidth="3"
          variants={pulseVariants}
          filter="url(#softGlow)"
          style={{ transformOrigin: '400px 300px' }}
        />
        
        <motion.text
          x="400"
          y="307"
          textAnchor="middle"
          fill={colors.text}
          fontWeight="bold"
          fontSize="22"
          variants={elementVariants}
        >
          BMA
        </motion.text>
        
        {/* Neural connections - four main service pathways */}
        {/* Equities Path */}
        <motion.path
          d="M400,300 C350,280 300,320 250,350"
          fill="none"
          stroke={colors.primary}
          strokeWidth="3"
          strokeDasharray="1,6"
          opacity="0.8"
          variants={flowVariants}
        />
        
        {/* Investment Banking Path */}
        <motion.path
          d="M400,300 C420,250 380,200 350,150"
          fill="none"
          stroke={colors.secondary}
          strokeWidth="3"
          strokeDasharray="1,6"
          opacity="0.8"
          variants={flowVariants}
        />
        
        {/* Asset Management Path */}
        <motion.path
          d="M400,300 C450,320 500,280 550,350"
          fill="none"
          stroke={colors.tertiary}
          strokeWidth="3"
          strokeDasharray="1,6"
          opacity="0.8"
          variants={flowVariants}
        />
        
        {/* Financial Services Path */}
        <motion.path
          d="M400,300 C380,250 420,200 450,150"
          fill="none"
          stroke={colors.quaternary}
          strokeWidth="3"
          strokeDasharray="1,6"
          opacity="0.8"
          variants={flowVariants}
        />

        {/* Service nodes - four main service areas */}
        {/* Equities Node */}
        <motion.circle
          cx="250"
          cy="350"
          r="30"
          fill={isDark ? "#1E293B" : "#f1f5f9"}
          stroke={colors.primary}
          strokeWidth="3"
          variants={pulseVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          style={{ transformOrigin: '250px 350px', cursor: 'pointer' }}
        />
        
        <motion.text
          x="250"
          y="355"
          textAnchor="middle"
          fill={colors.primary}
          fontWeight="bold"
          fontSize="24"
          variants={elementVariants}
        >
          📈
        </motion.text>
        
        <motion.text
          x="250"
          y="400"
          textAnchor="middle"
          fill={colors.text}
          fontSize="14"
          fontWeight="medium"
          variants={elementVariants}
        >
          Equities
        </motion.text>
        
        {/* Investment Banking Node */}
        <motion.circle
          cx="350"
          cy="150"
          r="30"
          fill={isDark ? "#1E293B" : "#f1f5f9"}
          stroke={colors.secondary}
          strokeWidth="3"
          variants={pulseVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          style={{ transformOrigin: '350px 150px', cursor: 'pointer' }}
        />
        
        <motion.text
          x="350"
          y="155"
          textAnchor="middle"
          fill={colors.secondary}
          fontWeight="bold"
          fontSize="24"
          variants={elementVariants}
        >
          🏢
        </motion.text>
        
        <motion.text
          x="350"
          y="200"
          textAnchor="middle"
          fill={colors.text}
          fontSize="14"
          fontWeight="medium"
          variants={elementVariants}
        >
          Investment Banking
        </motion.text>
        
        {/* Asset Management Node */}
        <motion.circle
          cx="550"
          cy="350"
          r="30"
          fill={isDark ? "#1E293B" : "#f1f5f9"}
          stroke={colors.tertiary}
          strokeWidth="3"
          variants={pulseVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          style={{ transformOrigin: '550px 350px', cursor: 'pointer' }}
        />
        
        <motion.text
          x="550"
          y="355"
          textAnchor="middle"
          fill={colors.tertiary}
          fontWeight="bold"
          fontSize="24"
          variants={elementVariants}
        >
          📊
        </motion.text>
        
        <motion.text
          x="550"
          y="400"
          textAnchor="middle"
          fill={colors.text}
          fontSize="14"
          fontWeight="medium"
          variants={elementVariants}
        >
          Asset Management
        </motion.text>
        
        {/* Financial Services Node */}
        <motion.circle
          cx="450"
          cy="150"
          r="30"
          fill={isDark ? "#1E293B" : "#f1f5f9"}
          stroke={colors.quaternary}
          strokeWidth="3"
          variants={pulseVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          style={{ transformOrigin: '450px 150px', cursor: 'pointer' }}
        />
        
        <motion.text
          x="450"
          y="155"
          textAnchor="middle"
          fill={colors.quaternary}
          fontWeight="bold"
          fontSize="24"
          variants={elementVariants}
        >
          💹
        </motion.text>
        
        <motion.text
          x="450"
          y="200"
          textAnchor="middle"
          fill={colors.text}
          fontSize="14"
          fontWeight="medium"
          variants={elementVariants}
        >
          Financial Services
        </motion.text>

        {/* Secondary neural connections - cross-service connections */}
        <motion.path
          d="M250,350 Q300,250 350,150"
          fill="none"
          stroke={`${colors.primary}40`}
          strokeWidth="2"
          strokeDasharray="1,8"
          variants={flowVariants}
        />
        
        <motion.path
          d="M350,150 Q400,200 450,150"
          fill="none"
          stroke={`${colors.secondary}40`}
          strokeWidth="2"
          strokeDasharray="1,8"
          variants={flowVariants}
        />
        
        <motion.path
          d="M450,150 Q500,250 550,350"
          fill="none"
          stroke={`${colors.quaternary}40`}
          strokeWidth="2"
          strokeDasharray="1,8"
          variants={flowVariants}
        />
        
        <motion.path
          d="M550,350 Q400,400 250,350"
          fill="none"
          stroke={`${colors.tertiary}40`}
          strokeWidth="2"
          strokeDasharray="1,8"
          variants={flowVariants}
        />

        {/* Data flow particles - animated along the network */}
        {/* Optimized to use fewer particles */}
        {[...Array(12)].map((_, i) => {
          // Calculate positions along the neural network paths
          const pathIndex = i % 4;
          const positions = [
            { x: 250 + (i % 3) * 40, y: 350 - (i % 3) * 20 }, // Equities path
            { x: 350 + (i % 3) * 15, y: 150 + (i % 3) * 40 }, // Investment Banking path
            { x: 550 - (i % 3) * 40, y: 350 - (i % 3) * 20 }, // Asset Management path
            { x: 450 - (i % 3) * 15, y: 150 + (i % 3) * 40 }, // Financial Services path
          ];
          
          const colors = [
            "#8B5CF6", // Equities color
            "#D946EF", // Investment Banking color
            "#F97316", // Asset Management color
            "#0EA5E9", // Financial Services color
          ];
          
          return (
            <motion.circle
              key={i}
              cx={positions[pathIndex].x}
              cy={positions[pathIndex].y}
              r={3 + (i % 2)}
              fill={colors[pathIndex]}
              variants={particleVariants}
              custom={i}
              style={{ 
                filter: "url(#softGlow)",
                opacity: isReducedMotion ? 0.4 : 0,
                willChange: 'transform, opacity'
              }}
            />
          );
        })}

        {/* Circuit board background traces */}
        <motion.path
          d="M100,400 L200,400 L200,500 L300,500"
          fill="none"
          stroke={colors.gridLines}
          strokeWidth="2"
          variants={elementVariants}
        />
        
        <motion.path
          d="M500,500 L600,500 L600,400 L700,400"
          fill="none"
          stroke={colors.gridLines}
          strokeWidth="2"
          variants={elementVariants}
        />
        
        <motion.path
          d="M150,150 L150,250 L250,250"
          fill="none"
          stroke={colors.gridLines}
          strokeWidth="2"
          variants={elementVariants}
        />
        
        <motion.path
          d="M550,250 L650,250 L650,150"
          fill="none"
          stroke={colors.gridLines}
          strokeWidth="2"
          variants={elementVariants}
        />
        
        {/* Interactive connector nodes */}
        <motion.circle
          cx="300"
          cy="300"
          r="10"
          fill={isDark ? "#1E293B" : "#f1f5f9"}
          stroke={`${colors.primary}80`}
          strokeWidth="2"
          variants={pulseVariants}
          whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          style={{ transformOrigin: '300px 300px' }}
        />
        
        <motion.circle
          cx="500"
          cy="300"
          r="10"
          fill={isDark ? "#1E293B" : "#f1f5f9"}
          stroke={`${colors.tertiary}80`}
          strokeWidth="2"
          variants={pulseVariants}
          whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          style={{ transformOrigin: '500px 300px' }}
        />
        
        <motion.circle
          cx="400"
          cy="220"
          r="10"
          fill={isDark ? "#1E293B" : "#f1f5f9"}
          stroke={`${colors.secondary}80`}
          strokeWidth="2"
          variants={pulseVariants}
          whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          style={{ transformOrigin: '400px 220px' }}
        />
        
        <motion.circle
          cx="400"
          cy="380"
          r="10"
          fill={isDark ? "#1E293B" : "#f1f5f9"}
          stroke={`${colors.quaternary}80`}
          strokeWidth="2"
          variants={pulseVariants}
          whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          style={{ transformOrigin: '400px 380px' }}
        />
        
        {/* Financial landscape elements */}
        <motion.path
          d={createWavePath(520, 8, 4, 2, 800)}
          fill="none"
          stroke={colors.gridLines}
          strokeWidth="1"
          variants={elementVariants}
        />

        {/* Additional connecting paths - creates a more complete network */}
        <motion.path
          d="M400,300 C380,320 340,330 300,300"
          fill="none"
          stroke={`${colors.primary}40`}
          strokeWidth="2"
          strokeDasharray="1,4"
          variants={flowVariants}
        />
        
        <motion.path
          d="M400,300 C420,280 460,270 500,300"
          fill="none"
          stroke={`${colors.tertiary}40`}
          strokeWidth="2"
          strokeDasharray="1,4"
          variants={flowVariants}
        />
        
        <motion.path
          d="M400,300 C400,260 400,240 400,220"
          fill="none"
          stroke={`${colors.secondary}40`}
          strokeWidth="2"
          strokeDasharray="1,4"
          variants={flowVariants}
        />
        
        <motion.path
          d="M400,300 C400,340 400,360 400,380"
          fill="none"
          stroke={`${colors.quaternary}40`}
          strokeWidth="2"
          strokeDasharray="1,4"
          variants={flowVariants}
        />
      </motion.svg>
    </div>
  );
};
