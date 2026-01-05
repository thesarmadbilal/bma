
import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Zap } from 'lucide-react';
import { useTheme } from './theme/ThemeProvider';
import { formatPrice } from '@/services/psx-data';

export function MarketTicker() {
  const { theme } = useTheme();
  const [stocks, setStocks] = useState([]);
  
  const shuffleArray = (array) => {
    const shuffled = [...array]; // Copy the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }
    return shuffled;
  }
  // Duplicate the stock array for smooth infinite scrolling
  useEffect(() => {
    fetch("https://test.bmacapital.com/backend/")
      .then((res) => res.json())
      .then((data) => {
        setStocks(shuffleArray(data));
      })
      .catch((err) => {
        console.error("Error A gya:", err);
      });
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
      
      <div className="flex gap-6 animate-ticker">
        {stocks.map((item, index) => (
          <div key={index} className="flex items-center gap-2 whitespace-nowrap">
            <span className={`font-semibold ${theme === 'light' ? 'text-red-700' : 'text-primary'}`}>{item.symbol}</span>
            <span className={theme === 'light' ? 'text-gray-800' : ''}>{formatPrice(item.current)}</span>
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
              {item.change >= 0 ? '+' : ''}{item.change}%
            </span>
            <span className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-muted-foreground'} ml-1`}>Vol: {item.volume}</span>
          </div>
        ))}
      </div>
      
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
