import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Zap } from 'lucide-react';
import { useTheme } from './theme/ThemeProvider';
import { formatPrice } from '@/services/psx-data';
import { API_ENDPOINTS } from '@/services/api-config';

interface IndexData {
  symbol: string;
  current: string;
  change: number;
  currentNum: number;
}

export function MarketTicker() {
  const { theme } = useTheme();
  const [indices, setIndices] = useState<IndexData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchIndices = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_ENDPOINTS.INDICES.OVERVIEW());

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          console.warn("Invalid data format received from API:", data);
          setIndices([]);
          setLoading(false);
          return;
        }

        if (data.length === 0) {
          console.warn("No data received from API");
          setIndices([]);
          setLoading(false);
          return;
        }

        const mappedData = data
          .filter((item) => {
            const indexName = (item.index || item.col_0 || '').toString().trim();
            const current = (item.current || item.col_3 || '').toString().trim();
            return indexName !== '' && current !== '' && current !== '0';
          })
          .map((item) => {
            const indexName = (item.index || item.col_0 || '').toString().trim();
            const current = (item.current || item.col_3 || '0').toString();
            const changePercent = (item["%_change"] || item["change_(%)"] || item.col_5 || '0%').toString();

            const changeValue = parseFloat(changePercent.replace(/[%,\s]/g, '')) || 0;
            const currentValue = parseFloat(current.replace(/,/g, '')) || 0;

            return {
              symbol: indexName,
              current: current,
              change: changeValue,
              currentNum: currentValue
            };
          })
          .sort((a, b) => b.currentNum - a.currentNum);

        if (mappedData.length > 0) {
          setIndices(mappedData);
        } else {
          console.warn("No valid indices data after mapping. Raw data sample:", data[0]);
          setIndices([]);
        }
      } catch (err) {
        console.error("Error fetching market data:", err);
        setIndices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchIndices();
  }, []);
  
  return (
    <div className={`w-full overflow-hidden glass-effect py-2 border-t border-b ${theme === 'dark' ? 'border-primary/30' : 'border-gray-200'} relative`}>
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center">
        <div className="absolute w-6 h-6 rounded-full bg-primary/10 animate-pulse"></div>
        <Zap className="h-3 w-3 text-primary relative z-10" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center">
        <div className="absolute w-6 h-6 rounded-full bg-primary/10 animate-pulse"></div>
        <Zap className="h-3 w-3 text-primary relative z-10" />
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center py-2">
          <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-muted-foreground'}`}>
            Loading market data...
          </span>
        </div>
      ) : indices.length > 0 ? (
        <div className="flex gap-6 animate-ticker">
          {[...indices, ...indices].map((item, index) => (
            <div key={`${item.symbol}-${index}`} className="flex items-center gap-2 whitespace-nowrap">
              <span className={`font-semibold ${theme === 'light' ? 'text-red-700' : 'text-primary'}`}>
                {item.symbol}
              </span>
              <span className={theme === 'light' ? 'text-gray-800' : ''}>
                {item.current}
              </span>
              <span 
                className={item.change >= 0 
                  ? "text-positive flex items-center" 
                  : "text-negative flex items-center"
                }
              >
                {item.change >= 0 ? (
                  <TrendingUp className="h-3 w-3 mr-0.5" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-0.5" />
                )}
                {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-2">
          <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-muted-foreground'}`}>
            No market data available
          </span>
        </div>
      )}
      
      <style>
        {`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-ticker {
          animation: ticker 60s linear infinite;
        }
        `}
      </style>
    </div>
  );
}
