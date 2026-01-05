
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  backgroundImage?: string;
  overlayGradient?: string;
  position?: "top-right" | "center-left" | "bottom-center";
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
  backgroundImage = "/placeholder.svg",
  overlayGradient = "linear-gradient(to bottom, rgba(245, 248, 255, 0.2), transparent)",
  position = "center-left",
  className = "",
}) => {
  const { scrollY } = useScroll();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Check if user prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  
  // Calculate background position based on scroll
  const yPos = useTransform(
    scrollY, 
    [0, 1000], 
    [0, prefersReducedMotion ? 0 : -50]
  );
  
  // Set position styling
  let positionStyles = {};
  
  if (position === "top-right") {
    positionStyles = { top: "10%", right: "5%", width: "40%", height: "50%" };
  } else if (position === "center-left") {
    positionStyles = { top: "25%", left: "5%", width: "40%", height: "60%" };
  } else if (position === "bottom-center") {
    positionStyles = { bottom: "5%", left: "0", width: "100%", height: "30%" };
  }
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div 
        className="absolute opacity-20 pointer-events-none z-0"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          ...positionStyles,
          y: yPos,
          willChange: prefersReducedMotion ? "auto" : "transform",
          animationPlayState: prefersReducedMotion ? "paused" : "running"
        }}
      />
      
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ background: overlayGradient }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
