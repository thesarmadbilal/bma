
import React from 'react';
import { useEffect, useState } from 'react';
import { BarChart4, ChevronRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card';
import { LoadingSpinner } from '../LoadingSpinner';
import { formatPrice, formatPercentChange } from '@/services/psx-data';


export function MarketIndicesCard() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

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
        const shuffledStocks = shuffleArray(data);
        //Get random 7 stocks
        const selectedStocks = shuffledStocks.slice(0, 7);
        setStocks(selectedStocks);
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
          ) : (
            stocks.map((index, idx) => (
              <div key={index.symbol} className={`flex justify-between items-center py-3 ${idx !== stocks.length - 1 ? "border-b border-white/5" : ""}`}>
                <div>
                  <div className="font-medium text-white">{index.symbol}</div>
                  <div className="text-xs text-gray-400">Vol: {index.volume}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white">{index.current}</div>
                  <div className={index.change >= 0 ? "text-positive flex items-center justify-end text-sm" : "text-negative flex items-center justify-end text-sm"}>
                    {index.change >= 0 ? (
                      <><ArrowUpRight className="h-3 w-3 mr-0.5" /> +{index.change} ({index["change_(%)"]})</>
                    ) : (
                      <><ArrowDownRight className="h-3 w-3 mr-0.5" /> {index.change} ({index["change_(%)"]})</>
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
          View All Indices <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter> */}
    </Card>
  );
}
