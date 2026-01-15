import { useEffect, useState } from 'react';
import { BarChart4, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { LoadingSpinner } from '../LoadingSpinner';
import { API_ENDPOINTS } from '@/services/api-config';

interface IndexData {
  symbol: string;
  current: string;
  change: number;
  changePercent: string;
}

export function MarketIndicesCard() {
  const [indices, setIndices] = useState<IndexData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndices = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.INDICES.OVERVIEW());

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
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

            return {
              symbol: indexName,
              current: current,
              change: changeValue,
              changePercent: changePercent
            };
          })
          .sort((a, b) => {
            const aValue = parseFloat(a.current.replace(/,/g, '')) || 0;
            const bValue = parseFloat(b.current.replace(/,/g, '')) || 0;
            return bValue - aValue;
          })
          .slice(0, 6); // Get top 5 indices

        setIndices(mappedData);
      } catch (err) {
        console.error("Error fetching indices data:", err);
        setIndices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchIndices();
  }, []);


  return (
    <Card className="bg-card/30 backdrop-blur-sm border border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg font-bold">Market Indices</span>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <BarChart4 className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1 px-6">
          {loading ? (
            <LoadingSpinner />
          ) : indices.length > 0 ? (
            indices.map((index, idx) => (
              <div key={index.symbol} className={`flex justify-between items-center py-3 ${idx !== indices.length - 1 ? "border-b border-white/5" : ""}`}>
                <div>
                  <div className="font-medium text-white">{index.symbol}</div>
                  <div className="text-xs text-gray-400">Index Value</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white">{index.current}</div>
                  <div className={index.change >= 0 ? "text-positive flex items-center justify-end text-sm" : "text-negative flex items-center justify-end text-sm"}>
                    {index.change >= 0 ? (
                      <><ArrowUpRight className="h-3 w-3 mr-0.5" /> +{index.change.toFixed(2)}%</>
                    ) : (
                      <><ArrowDownRight className="h-3 w-3 mr-0.5" /> {index.change.toFixed(2)}%</>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-4 text-center text-gray-400 text-sm">
              No indices data available
            </div>
          )}
        </div>
      </CardContent>
      {/* <CardFooter className="pt-2 pb-4">
        <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary/90 hover:bg-primary/10">
          View All Indices <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter> */}
    </Card>
  );
}
