
import React from 'react';
import { PerformanceChart } from './vectors/PerformanceChart';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import {
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Calendar,
  Filter,
  Download,
  Share2,
  ZoomIn
} from 'lucide-react';
import { usePSXData, formatPrice, formatPercentChange } from '@/services/psx-data';
import { useTheme } from './theme/ThemeProvider';

export const MarketPerformanceSection = () => {
  const { indices, stocks, loading } = usePSXData();
  const { theme } = useTheme();
  
  // Format the date for display
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(currentDate);
  
  return (
    <section className="py-16 bg-card/20">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Pakistan Stock Exchange <span className="text-red-600">KSE-100 Index</span></h2>
              <p className="text-muted-foreground text-lg">
                Real-time market data and analytics from Pakistan's premier stock exchange.
              </p>
              <p className="text-sm text-muted-foreground mt-1">Last updated: {formattedDate} • {currentDate.toLocaleTimeString()}</p>
            </div>
            
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="gap-2 border-gray-600">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="gap-2 border-gray-600">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2 border-gray-600">
                <ZoomIn className="h-4 w-4" />
                Zoom
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <Tabs defaultValue="1d" className="w-[300px]">
              <TabsList className="border border-gray-600">
                <TabsTrigger value="1h" className="text-xs">1H</TabsTrigger>
                <TabsTrigger value="1d" className="text-xs">1D</TabsTrigger>
                <TabsTrigger value="1w" className="text-xs">1W</TabsTrigger>
                <TabsTrigger value="1m" className="text-xs">1M</TabsTrigger>
                <TabsTrigger value="1y" className="text-xs">1Y</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex ml-auto gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Clock className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Calendar className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-xl overflow-hidden border border-gray-600 shadow-lg glass-effect p-4">
          <div className="absolute top-4 left-4 z-10 space-y-1">
            {indices.slice(0, 3).map((index, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span className="text-sm font-medium">{index.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  index.change >= 0 
                    ? 'bg-green-500/20 text-green-400 flex items-center' 
                    : 'bg-red-500/20 text-red-400 flex items-center'
                }`}>
                  {index.change >= 0 
                    ? <><ArrowUpRight className="h-3 w-3 mr-1" /> {formatPercentChange(index.percentChange)}</> 
                    : <><ArrowDownRight className="h-3 w-3 mr-1" /> {formatPercentChange(index.percentChange)}</>
                  }
                </span>
              </div>
            ))}
          </div>
          
          <PerformanceChart className="w-full h-[400px] text-red-600/50" />
          
          <div className="absolute bottom-4 left-4 z-10">
            <div className="inline-block px-2 py-1 rounded bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-xs font-mono">
              {loading ? "Loading..." : `Market Cap: PKR ${(indices[0]?.current * 100000 / 1000000000000).toFixed(2)}T`}
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 z-10">
            <div className="inline-block px-2 py-1 rounded bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-xs font-mono">
              Trading Volume: {loading ? "Loading..." : "287.5M"}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {stocks.slice(0, 4).map((stock, idx) => (
            <div key={idx} className="glass-effect rounded-lg p-4 border border-gray-600">
              <div className="text-sm text-muted-foreground mb-1">{stock.symbol}</div>
              <div className="text-2xl font-bold">{formatPrice(stock.price)}</div>
              <div className={`text-xs flex items-center mt-1 ${
                stock.change >= 0 ? "text-green-400" : "text-red-400"
              }`}>
                {stock.change >= 0 
                  ? <><ArrowUpRight className="h-3 w-3 mr-1" /> {formatPercentChange(stock.percentChange)}</> 
                  : <><ArrowDownRight className="h-3 w-3 mr-1" /> {formatPercentChange(stock.percentChange)}</>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
