
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { GlassCard } from '../GlassCard';

export function InvestmentCTA() {
  return (
    <GlassCard variant="primary" className="p-6 relative">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-white mb-2">Ready to invest in PSX?</h3>
        <p className="text-gray-300 text-sm mb-4">
          Get started with BMA Capital's premium trading platform for real-time analysis and expert insights.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white w-full">
          Open Trading Account <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </GlassCard>
  );
}
