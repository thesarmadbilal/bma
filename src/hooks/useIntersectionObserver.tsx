
import { useEffect, useRef, useState, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

/**
 * A hook for using the Intersection Observer API
 */
export const useIntersectionObserver = <T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0.15,
  once = true,
}: IntersectionObserverOptions = {}): [RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when intersection status changes
        setIsIntersecting(entry.isIntersecting);
        
        // If 'once' is true and the element is intersecting, disconnect the observer
        if (once && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );
    
    observer.observe(node);
    
    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, once]);
  
  return [ref, isIntersecting];
};
