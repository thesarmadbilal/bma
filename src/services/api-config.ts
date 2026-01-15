/**
 * API Configuration
 * 
 * Centralized configuration for API endpoints
 * Automatically detects current domain URL for backend API calls
 */

const getApiBaseUrl = (): string => {

  // Priority 2: Always construct URL from current domain
  if (typeof window !== 'undefined') {
    const { protocol, hostname, port } = window.location;
    
    // Construct full URL from current domain
    const currentPort = port ? `:${port}` : '';
    const baseUrl = `${protocol}//${hostname}${currentPort}`;
    
    // Append /backend path
    // Works in both development and production
    // In development: uses current dev server URL + /backend (proxied to PHP server)
    // In production: uses production domain + /backend
    return `${baseUrl}/backend`;
  }
  
  // Fallback: relative path (for SSR or edge cases)
  return '/backend';
};

export const API_ENDPOINTS = {
  KSE100: {
    EOD: () => `${getApiBaseUrl()}/kse100.php`,
    INTRADAY: () => `${getApiBaseUrl()}/kse100.php?type=intraday`,
  },
  INDICES: {
    OVERVIEW: () => `${getApiBaseUrl()}/indices.php`,
  },
  PERFORMERS: () => `${getApiBaseUrl()}/performers.php`,
} as const;
