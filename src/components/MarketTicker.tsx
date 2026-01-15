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
    const fetchKSE100Constituents = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_ENDPOINTS.KSE100.CONSTITUENTS());

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
            const symbol = (item.symbol || item.col_0 || '').toString().trim();
            const current = (item.current || item.col_3 || '').toString().trim();
            return symbol !== '' && current !== '' && current !== '0';
          })
          .map((item) => {
            const symbol = (item.symbol || item.col_0 || '').toString().trim();
            const current = (item.current || item.col_3 || item.col_4 || '0').toString();
            // Try multiple field name variations for change percentage
            const changePercent = (
              item.change_percent || 
              item['change_%'] || 
              item.change || 
              item.col_5 || 
              item.col_6 || 
              '0%'
            ).toString();

            // Extract numeric value from change percent (remove % and parse)
            const changeValue = parseFloat(changePercent.replace(/[%,\s]/g, '')) || 0;
            const currentValue = parseFloat(current.replace(/,/g, '')) || 0;

            return {
              symbol: symbol,
              current: current,
              change: changeValue,
              currentNum: currentValue
            };
          })
          .sort((a, b) => b.currentNum - a.currentNum);

        if (mappedData.length > 0) {
          setIndices(mappedData);
        } else {
          console.warn("No valid KSE100 constituents data after mapping. Raw data sample:", data[0]);
          setIndices([]);
        }
      } catch (err) {
        console.error("Error fetching KSE100 constituents data:", err);
        setIndices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchKSE100Constituents();
  }, []);
  
  return (
    <div className={`w-full overflow-hidden glass-effect py-2 border-t border-b ${theme === 'dark' ? 'border-primary/30' : 'border-gray-200'} relative`}>
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
          animation: ticker ${indices.length > 50 ? '120s' : '60s'} linear infinite;
        }
        `}
      </style>
    </div>
  );
}
