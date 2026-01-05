
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from '../GlassCard';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
}

export function MetricCard({ title, value, change }: MetricCardProps) {
  return (
    <GlassCard className="p-6">
      <h3 className="text-sm font-medium text-gray-200 mb-2">{title}</h3>
      <div className="text-2xl font-bold text-white">{value}</div>
      <p className="text-sm text-green-400 flex items-center mt-2">
        <ArrowUpRight className="h-3 w-3 mr-1" /> {change} vs yesterday
      </p>
    </GlassCard>
  );
}
