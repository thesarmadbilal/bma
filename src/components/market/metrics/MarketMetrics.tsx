
import React from 'react';
import { MetricCard } from './MetricCard';

interface MarketMetricsProps {
  marketStats: {
    volume: string;
    value: string;
    trades: string;
  };
}

export function MarketMetrics({ marketStats }: MarketMetricsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-white">Market Metrics</h3>
      <div className="grid grid-cols-3 gap-6">
        <MetricCard
          title="Market Volume"
          value={marketStats.volume}
          change="+12.4%"
        />
        <MetricCard
          title="Trading Value"
          value={marketStats.value}
          change="+8.7%"
        />
        <MetricCard
          title="Total Trades"
          value={marketStats.trades}
          change="+5.2%"
        />
      </div>
    </div>
  );
}
