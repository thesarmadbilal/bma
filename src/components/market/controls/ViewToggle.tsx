
import React from 'react';
import { Button } from '../../ui/button';
import { BarChart3, Sigma } from 'lucide-react';

interface ViewToggleProps {
  view: 'overview' | 'detailed';
  setView: (view: 'overview' | 'detailed') => void;
}

export function ViewToggle({ view, setView }: ViewToggleProps) {
  return (
    <div className="flex gap-2 mb-6">
      <Button 
        variant={view === 'overview' ? "default" : "outline"} 
        size="sm"
        onClick={() => setView('overview')}
        className="gap-2"
      >
        <BarChart3 className="h-4 w-4" />
        Overview
      </Button>
      {/* <Button 
        variant={view === 'detailed' ? "default" : "outline"} 
        size="sm"
        onClick={() => setView('detailed')}
        className="gap-2"
      >
        <Sigma className="h-4 w-4" />
        Advanced Metrics
      </Button> */}
    </div>
  );
}
