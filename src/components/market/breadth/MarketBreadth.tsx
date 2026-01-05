
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';

interface MarketBreadthProps {
  marketStats: {
    advancers: number;
    decliners: number;
    unchanged: number;
  };
}

export function MarketBreadth({ marketStats }: MarketBreadthProps) {
  return (
    <Card className="glass-effect backdrop-blur-md border border-white/10">
      <CardHeader>
        <CardTitle className="text-lg">Market Breadth</CardTitle>
        <CardDescription>Today's market sentiment</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-6 bg-black/30 rounded-full overflow-hidden mb-3">
          <div 
            className="absolute top-0 left-0 h-full bg-green-500/80"
            style={{ width: `${(marketStats.advancers / (marketStats.advancers + marketStats.decliners + marketStats.unchanged) * 100).toFixed(1)}%` }}
          ></div>
          <div 
            className="absolute top-0 right-0 h-full bg-red-500/80"
            style={{ width: `${(marketStats.decliners / (marketStats.advancers + marketStats.decliners + marketStats.unchanged) * 100).toFixed(1)}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-white">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span>Advancers: {marketStats.advancers}</span>
          </div>
          <div>
            <span className="text-gray-400">Unchanged: {marketStats.unchanged}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span>Decliners: {marketStats.decliners}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
