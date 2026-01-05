
import React, { ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AnimatedScrollAreaProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  maxHeight?: string;
  animation?: "fade" | "scale" | "slide" | "none";
  threshold?: number; // Visibility threshold for animation trigger
  once?: boolean; // Whether to animate only once
}

export const AnimatedScrollArea = ({
  children,
  className = "",
  delay = 0,
  maxHeight = "auto",
  animation = "fade",
  threshold = 0.1,
  once = true,
}: AnimatedScrollAreaProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  // Use Intersection Observer for better performance
  useEffect(() => {
    if (!ref || animation === "none" || prefersReducedMotion) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );
    
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, animation, once, threshold, prefersReducedMotion]);

  const animationVariants = {
    fade: {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }
      }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay,
        }
      }
    },
    slide: {
      initial: { opacity: 0, x: -20 },
      animate: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay,
        }
      }
    },
    none: {
      initial: {},
      animate: {}
    }
  };

  // If reduced motion is enabled, skip animations
  if (prefersReducedMotion && animation !== "none") {
    return (
      <div className={className} style={{ maxHeight }}>
        <ScrollArea className="h-full">
          {children}
        </ScrollArea>
      </div>
    );
  }

  return (
    <motion.div
      ref={setRef}
      initial={animation !== "none" ? animationVariants[animation].initial : undefined}
      animate={isInView || animation === "none" ? animationVariants[animation].animate : undefined}
      className={className}
      style={{ maxHeight, willChange: 'transform, opacity' }}
    >
      <ScrollArea className="h-full">
        {children}
      </ScrollArea>
    </motion.div>
  );
};
