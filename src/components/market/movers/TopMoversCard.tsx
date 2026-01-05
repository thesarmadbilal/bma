
import React from 'react';
import { TrendingUp, Briefcase, ChevronRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card';
import { LoadingSpinner } from '../LoadingSpinner';
import { formatPrice, formatPercentChange } from '@/services/psx-data';

export function TopMoversCard() {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);


    // Duplicate the stock array for smooth infinite scrolling
    useEffect(() => {
      fetch("https://test.bmacapital.com/backend/")
        .then((res) => res.json())
        .then((data) => {
          setStocks(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error A gya:", err);
        });
    }, []);

  return (
    <Card className="bg-card/30 backdrop-blur-sm border border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg">Top Movers</span>
          <div className="flex">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <TrendingUp className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Briefcase className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1 px-6">
          {loading ? (
            <LoadingSpinner />
          ) : (
            [...stocks]
              .sort((a, b) => b.change - a.change)
              .slice(0, 7)
              .map((stock, idx) => (
                <div key={stock.symbol} className={`flex justify-between items-center py-3 ${idx !== 4 ? "border-b border-white/5" : ""}`}>
                  <div>
                    <div className="font-medium text-white flex items-center">
                      {stock.symbol}
                      <span className="ml-2 text-xs py-0.5 px-1.5 rounded-sm bg-white/10">{stock["change_(%)"] >= 5 ? "🔥" : ""}</span>
                    </div>
                    <div className="text-xs text-gray-400">{stock.symbol}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-white">{formatPrice(stock.current)}</div>
                    <div className={stock.change >= 0 ? "text-positive flex items-center justify-end text-sm" : "text-negative flex items-center justify-end text-sm"}>
                      {stock.change >= 0 ? (
                        <><ArrowUpRight className="h-3 w-3 mr-0.5" /> +{stock.change} ({stock["change_(%)"]})</>
                      ) : (
                        <><ArrowDownRight className="h-3 w-3 mr-0.5" /> {stock.change} ({stock["change_(%)"]})</>
                      )}
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </CardContent>
      {/* <CardFooter className="pt-2 pb-4">
        <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary/90 hover:bg-primary/10">
          View All Top Movers <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter> */}
    </Card>
  );
}
