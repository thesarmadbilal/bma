import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to handle hash-based navigation and scrolling
 * Automatically scrolls to elements with matching IDs when hash changes
 * Also scrolls when search params change if a hash is present
 */
export function useHashNavigation() {
  const location = useLocation();
  const prevHashRef = useRef<string>('');
  const prevSearchRef = useRef<string>('');
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToHash = (hash: string) => {
    // Clear any pending scroll
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        // Calculate offset for fixed headers/navbars
        const offset = 80; // Adjust based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  useEffect(() => {
    // Get hash from location or window (fallback)
    const currentHash = (location.hash || window.location.hash || '').substring(1);
    const currentSearch = location.search || '';
    
    // Scroll if:
    // 1. Hash changed, OR
    // 2. Search params changed and there's a hash present (e.g., service param changed but hash is same)
    const hashChanged = currentHash && currentHash !== prevHashRef.current;
    const searchChanged = currentSearch !== prevSearchRef.current;
    const shouldScroll = hashChanged || (searchChanged && currentHash);
    
    if (shouldScroll && currentHash) {
      prevHashRef.current = currentHash;
      prevSearchRef.current = currentSearch;
      scrollToHash(currentHash);
    } else if (!currentHash) {
      prevHashRef.current = '';
    }
    
    // Update search ref even if we don't scroll
    if (searchChanged) {
      prevSearchRef.current = currentSearch;
    }
  }, [location.pathname, location.hash, location.search, location.key]); // Watch all location properties

  // Also listen to browser hashchange events for same-page navigation
  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      if (newHash && newHash !== prevHashRef.current) {
        prevHashRef.current = newHash;
        scrollToHash(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []); // Only set up once
}
