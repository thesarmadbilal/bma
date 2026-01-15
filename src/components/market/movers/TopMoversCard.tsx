
import { TrendingUp, Briefcase, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { LoadingSpinner } from '../LoadingSpinner';
import { formatPrice } from '@/services/psx-data';
import { API_ENDPOINTS } from '@/services/api-config';

interface StockData {
  symbol: string;
  current: string;
  change: number;
  "change_(%)": string;
  volume: string;
}

export function TopMoversCard() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchTopMovers = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.PERFORMERS());

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
          console.warn("No data received from API");
          setStocks([]);
          setLoading(false);
          return;
        }

        // Map the data to match component expectations
        const mappedData = data
          .filter((item) => {
            const symbol = item.symbol || '';
            const price = item.price || '';
            return symbol && price && symbol.toString().trim() !== '';
          })
          .map((item) => {
            const symbol = (item.symbol || '').toString().trim();
            const price = (item.price || '0').toString();
            const change = parseFloat(item.change || '0');
            const changePercent = (item["change_(%)"] || '0%').toString();
            const volume = (item.volume || '0').toString();

            return {
              symbol: symbol,
              current: price,
              change: change,
              "change_(%)": changePercent,
              volume: volume
            };
          });

        setStocks(mappedData);
      } catch (err) {
        console.error("Error fetching top movers data:", err);
        setStocks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTopMovers();
  }, []);

  return (
    <Card className="bg-card/30 backdrop-blur-sm border border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg font-bold">Top Movers</span>
          <div className="flex">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <TrendingUp className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1 px-6">
          {loading ? (
            <LoadingSpinner />
          ) : (
            stocks
              .slice(0, 7)
              .map((stock, idx) => {
                const changePercentNum = parseFloat(stock["change_(%)"]?.replace('%', '') || '0');
                return (
                  <div key={stock.symbol} className={`flex justify-between items-center py-3 ${idx !== stocks.length - 1 ? "border-b border-white/5" : ""}`}>
                    <div>
                      <div className="font-medium text-white flex items-center">
                        {stock.symbol}
                      </div>
                      <div className="text-xs text-gray-400">Vol: {stock.volume}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">{stock.current}</div>
                      <div className={stock.change >= 0 ? "text-positive flex items-center justify-end text-sm" : "text-negative flex items-center justify-end text-sm"}>
                        {stock.change >= 0 ? (
                          <><ArrowUpRight className="h-3 w-3 mr-0.5" /> +{stock.change.toFixed(2)} ({stock["change_(%)"]})</>
                        ) : (
                          <><ArrowDownRight className="h-3 w-3 mr-0.5" /> {stock.change.toFixed(2)} ({stock["change_(%)"]})</>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </CardContent>
    </Card>
  );
}
