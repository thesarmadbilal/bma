
import { useState, useEffect, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  onComplete?: () => void;
  easing?: (t: number) => number;
  enabled?: boolean;
}

/**
 * A hook for creating count-up animations
 */
export const useCountUp = ({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  onComplete,
  easing = (t) => t, // Linear easing by default
  enabled = true
}: UseCountUpProps) => {
  const [count, setCount] = useState(start);
  const [isCountingUp, setIsCountingUp] = useState(false);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!enabled) return;
    
    const delayTimeout = setTimeout(() => {
      setIsCountingUp(true);
      
      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }
        
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);
        
        const currentCount = Math.floor(start + easedProgress * (end - start));
        setCount(currentCount);
        
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
          setIsCountingUp(false);
          if (onComplete) onComplete();
        }
      };
      
      frameRef.current = requestAnimationFrame(animate);
    }, delay);
    
    return () => {
      clearTimeout(delayTimeout);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [start, end, duration, delay, onComplete, easing, enabled]);
  
  const reset = () => {
    setCount(start);
    setIsCountingUp(false);
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    startTimeRef.current = null;
  };
  
  return { count, isCountingUp, reset };
};
