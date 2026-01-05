
import React from 'react';
import { usePSXData } from '@/services/psx-data';
import { ViewToggle } from './controls/ViewToggle';
import { SectorSelector } from './controls/SectorSelector';
import { MarketChart } from './chart/MarketChart';
import { MarketMetrics } from './metrics/MarketMetrics';
import { MarketBreadth } from './breadth/MarketBreadth';
import { MarketIndicesCard } from './indices/MarketIndicesCard';
import { TopMoversCard } from './movers/TopMoversCard';
import { InvestmentCTA } from './cta/InvestmentCTA';
import { InvestmentCalculator } from './calculator/InvestmentCalculator';
import { ResourceDownloads } from './downloads/ResourceDownloads';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Gavel } from 'lucide-react';

interface MarketDataTabProps {
  view: 'overview' | 'detailed';
  setView: (view: 'overview' | 'detailed') => void;
  selectedSector: string;
  setSelectedSector: (sector: string) => void;
}

export function MarketDataTab({ 
  view, 
  setView, 
  selectedSector, 
  setSelectedSector 
}: MarketDataTabProps) {
  const { indices, stocks, loading } = usePSXData();
  
  const marketStats = {
    volume: '287.5M',
    value: 'PKR 8.2B',
    trades: '68,423',
    advancers: 152,
    decliners: 127,
    unchanged: 45,
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <ViewToggle view={view} setView={setView} />
          {/* <SectorSelector selectedSector={selectedSector} setSelectedSector={setSelectedSector} /> */}
        </div>
        {/* <Button asChild variant="outline" className="mt-4 md:mt-0 gap-2">
          <Link to="/governance">
            <Gavel className="h-4 w-4" />
            Corporate Governance
          </Link>
        </Button> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Right side - Market Data and Resources */}
        <div>
          <TopMoversCard/>
        </div>

        {/* Left side - Chart and Market Overview */}
        <div>
          <MarketIndicesCard />
        </div>

      </div>

      <div>
        <div className="mt-10">
          <MarketChart />
          {/* <MarketMetrics marketStats={marketStats} /> */}
          {/* <MarketBreadth marketStats={marketStats} /> */}
          <InvestmentCalculator />
        </div>
      </div>
    </>
  );
}
