import { useEffect, useState, useRef } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useTheme } from './theme/ThemeProvider';
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
  const [loading, setLoading] = useState(true);
  const tickerRef = useRef<HTMLDivElement>(null);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_ENDPOINTS.KSE100.CONSTITUENTS());
        const data = await res.json();

        if (!Array.isArray(data)) return;

        const mapped = data
          .map((item) => {
            const symbol = String(item.symbol || item.col_0 || '').trim();
            const current = String(item.current || item.col_3 || item.col_4 || '0');
            const changeRaw =
              item.change_percent ||
              item['change_%'] ||
              item.change ||
              item.col_5 ||
              item.col_6 ||
              '0';

            return {
              symbol,
              current,
              change: parseFloat(String(changeRaw).replace(/[%,\s]/g, '')) || 0,
              currentNum: parseFloat(current.replace(/,/g, '')) || 0,
            };
          })
          .filter((i) => i.symbol && i.currentNum > 0);

        if (mounted) setIndices(mapped);
      } catch (e) {
        console.error(e);
        if (mounted) setIndices([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  /* ================= FIX TICKER ================= */
  useEffect(() => {
    if (!tickerRef.current || indices.length === 0) return;

    const el = tickerRef.current;

    requestAnimationFrame(() => {
      // Force layout read
      void el.offsetWidth;

      const contentWidth = el.scrollWidth / 2;
      const speed = 80; // px/sec
      const duration = Math.max(contentWidth / speed, 20);

      el.style.setProperty('--ticker-duration', `${duration}s`);
    });
  }, [indices]);

  /* ================= RENDER (UNCHANGED UI) ================= */
  return (
    <div
      className={`w-full overflow-hidden glass-effect py-2 border-t border-b ${
        theme === 'dark' ? 'border-primary/30' : 'border-gray-200'
      }`}
    >
      {loading ? (
        <div className="flex justify-center py-2 text-sm">Loading market data...</div>
      ) : indices.length > 0 ? (
        <div ref={tickerRef} className="flex gap-6 animate-ticker">
          {[...indices, ...indices].map((item, index) => {
            const isPositive = item.change >= 0;
            return (
              <div key={`${item.symbol}-${index}`} className="flex items-center gap-6">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className="font-semibold">{item.symbol}</span>
                  <span>{item.current}</span>
                  <span
                    className={
                      isPositive
                        ? 'text-positive flex items-center'
                        : 'text-negative flex items-center'
                    }
                  >
                    {isPositive ? (
                      <TrendingUp className="h-3 w-3 mr-0.5" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-0.5" />
                    )}
                    {isPositive ? '+' : ''}
                    {item.change.toFixed(2)}%
                  </span>
                </div>
                <div
                  className={`h-6 w-px ${
                    theme === 'dark' ? 'bg-primary/30' : 'bg-gray-300'
                  }`}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center py-2 text-sm">No market data available</div>
      )}

      {/* 🔒 STATIC CSS – DO NOT TOUCH UI */}
      <style>
        {`
        .animate-ticker {
          width: max-content;                /* 🔑 CRITICAL */
          animation: ticker var(--ticker-duration, 30s) linear infinite;
          will-change: transform;
        }

        @keyframes ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        `}
      </style>
    </div>
  );
}
