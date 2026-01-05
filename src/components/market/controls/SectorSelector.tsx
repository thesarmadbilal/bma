
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs';

interface SectorSelectorProps {
  selectedSector: string;
  setSelectedSector: (sector: string) => void;
}

export function SectorSelector({ selectedSector, setSelectedSector }: SectorSelectorProps) {
  const sectors = [
    { id: 'all', name: 'All Sectors' },
    { id: 'oil', name: 'Oil & Gas' },
    { id: 'bank', name: 'Banking' },
    { id: 'cement', name: 'Cement' },
    { id: 'fertilizer', name: 'Fertilizer' },
    { id: 'power', name: 'Power' },
  ];

  return (
    <div className="mb-6">
      <Tabs defaultValue={selectedSector} onValueChange={setSelectedSector as any}>
        <TabsList className="bg-black/20 border border-white/10 p-1 w-full overflow-x-auto flex whitespace-nowrap scrollbar-none">
          {sectors.map(sector => (
            <TabsTrigger 
              key={sector.id} 
              value={sector.id}
              className="flex-shrink-0"
            >
              {sector.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
