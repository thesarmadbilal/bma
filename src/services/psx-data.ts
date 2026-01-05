
import { useState, useEffect } from 'react';

// Define the types for the PSX data
export interface PSXIndexData {
  name: string;
  current: number;
  change: number;
  percentChange: number;
  high: number;
  low: number;
  volume: string;
  timestamp: string;
}

export interface PSXStockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
  volume: string;
}

// Mock data in case the API fails
const mockIndices: PSXIndexData[] = [
  { 
    name: 'KSE-100', 
    current: 79852.64, 
    change: 423.75, 
    percentChange: 0.53, 
    high: 79945.22, 
    low: 79428.89, 
    volume: '235.4M',
    timestamp: new Date().toISOString()
  },
  { 
    name: 'KSE-30', 
    current: 28723.12, 
    change: -112.45, 
    percentChange: -0.39, 
    high: 28835.57, 
    low: 28701.32,
    volume: '105.2M',
    timestamp: new Date().toISOString()
  },
  { 
    name: 'KMI-30', 
    current: 132546.91, 
    change: 612.34, 
    percentChange: 0.46, 
    high: 132780.23, 
    low: 131934.57,
    volume: '189.7M',
    timestamp: new Date().toISOString()
  },
  { 
    name: 'PSX', 
    current: 9583.26, 
    change: 32.16, 
    percentChange: 0.34,
    high: 9598.44, 
    low: 9551.10,
    volume: '422.8M',
    timestamp: new Date().toISOString()
  }
];

const mockStocks: PSXStockData[] = [
  { symbol: 'OGDC', name: 'Oil & Gas Dev.', price: 132.50, change: 1.85, percentChange: 1.42, volume: '3.7M' },
  { symbol: 'PPL', name: 'Pakistan Petroleum', price: 93.35, change: -0.65, percentChange: -0.69, volume: '2.1M' },
  { symbol: 'LUCK', name: 'Lucky Cement', price: 724.40, change: 6.25, percentChange: 0.87, volume: '0.9M' },
  { symbol: 'MCB', name: 'MCB Bank', price: 158.35, change: -1.45, percentChange: -0.91, volume: '1.2M' },
  { symbol: 'PSO', name: 'Pakistan State Oil', price: 192.25, change: 3.75, percentChange: 1.99, volume: '1.8M' },
  { symbol: 'ENGRO', name: 'Engro Corporation', price: 327.75, change: 4.25, percentChange: 1.31, volume: '1.3M' },
  { symbol: 'HBL', name: 'Habib Bank', price: 97.42, change: -0.73, percentChange: -0.74, volume: '2.5M' },
  { symbol: 'UBL', name: 'United Bank', price: 149.85, change: 2.95, percentChange: 2.01, volume: '1.7M' },
  { symbol: 'MEBL', name: 'Meezan Bank', price: 142.75, change: 2.45, percentChange: 1.75, volume: '4.8M' },
  { symbol: 'FABL', name: 'Faysal Bank', price: 26.35, change: 0.90, percentChange: 3.54, volume: '3.2M' },
  { symbol: 'HUBC', name: 'Hub Power', price: 78.38, change: 0.79, percentChange: 1.02, volume: '1.4M' },
  { symbol: 'MLCF', name: 'Maple Leaf Cement', price: 45.12, change: 1.43, percentChange: 3.27, volume: '3.7M' }
];

// Create a hook to fetch real PSX data
export const usePSXData = (refreshInterval = 60000) => {
  const [indices, setIndices] = useState<PSXIndexData[]>(mockIndices);
  const [stocks, setStocks] = useState<PSXStockData[]>(mockStocks);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchPSXData = async () => {
      setLoading(true);
      try {
        // In a real implementation, we would fetch data from the PSX API
        // For example:
        // const response = await fetch('https://dps.psx.com.pk/api/indices');
        // const data = await response.json();
        
        // Since we don't have API access, we'll use the mock data with slight variations
        const varianceFactor = Math.random() * 0.01 - 0.005; // small random change between -0.5% and +0.5%
        
        // Update mock indices with random variations to simulate real-time data
        const updatedIndices = mockIndices.map(index => {
          const change = index.current * varianceFactor;
          const newValue = index.current + change;
          
          return {
            ...index,
            current: Number(newValue.toFixed(2)),
            change: Number(change.toFixed(2)),
            percentChange: Number((change / index.current * 100).toFixed(2)),
            timestamp: new Date().toISOString()
          };
        });
        
        // Update mock stocks with random variations
        const updatedStocks = mockStocks.map(stock => {
          const change = stock.price * (Math.random() * 0.02 - 0.01); // random between -1% and 1%
          const newPrice = stock.price + change;
          
          return {
            ...stock,
            price: Number(newPrice.toFixed(2)),
            change: Number(change.toFixed(2)),
            percentChange: Number((change / stock.price * 100).toFixed(2))
          };
        });
        
        setIndices(updatedIndices);
        setStocks(updatedStocks);
        setError(null);
      } catch (err) {
        console.error("Error fetching PSX data:", err);
        setError("Failed to fetch market data");
      } finally {
        setLoading(false);
      }
    };
    
    fetchPSXData();
    
    // Set up the refresh interval
    const intervalId = setInterval(fetchPSXData, refreshInterval);
    
    return () => clearInterval(intervalId);
  }, [refreshInterval]);
  
  return { indices, stocks, loading, error };
};

// Helper function to format price with currency symbol
export const formatPrice = (price: number): string => {
  return `₨${price}`;
};

// Helper function to format percent change with sign
export const formatPercentChange = (change: number): string => {
  return change >= 0 ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`;
};

// Helper to format large numbers (like volume)
export const formatVolume = (volume: string | number): string => {
  if (typeof volume === 'string') {
    return volume;
  }
  
  if (volume >= 1000000) {
    return `${(volume / 1000000).toFixed(1)}M`;
  } else if (volume >= 1000) {
    return `${(volume / 1000).toFixed(1)}K`;
  }
  
  return volume.toString();
};
