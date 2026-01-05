
import React from 'react';
import { Button } from '../../ui/button';
import { Clock, Calendar, Filter } from 'lucide-react';
import { StockAdvancedChart } from '../../StockAdvancedChart';
import { GlassCard } from '../GlassCard';

export function MarketChart() {
  return (
    <GlassCard className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white">KSE-100 Index Live Chart</h3>
          {/* <p className="text-gray-200 text-sm flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" /> Trading hours: 9:30 AM - 3:30 PM (PST)
          </p> */}
        </div>
      </div>
      <StockAdvancedChart className="h-[450px]" />
    </GlassCard>
  );
}
