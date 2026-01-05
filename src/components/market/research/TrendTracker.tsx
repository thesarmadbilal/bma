
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function TrendTracker() {
  const { toast } = useToast();

  return (
    <div className="mt-8 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm rounded-xl border border-primary/20 p-6">
      <div className="flex items-center mb-4">
        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
          <TrendingUp className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h4 className="text-lg font-medium text-white">Trend Tracker</h4>
          <p className="text-sm text-gray-300">Follow key market trends with interactive timelines</p>
        </div>
      </div>
      
      <div className="mt-4 pb-3 overflow-x-auto">
        <div className="timeline-track relative min-w-[800px]">
          <div className="absolute h-1 bg-gray-700 top-5 left-0 right-0 z-0"></div>
          
          <div className="flex justify-between relative z-10">
            <TimelinePoint date="Jan 2025" title="Policy Rate Increase" description="SBP raised rates by 100bps to combat inflation" color="primary" />
            <TimelinePoint date="Feb 2025" title="Banking Reforms" description="New regulations to strengthen financial system" color="blue-500" />
            <TimelinePoint date="Mar 2025" title="Energy Sector IPOs" description="Two major renewable energy listings" color="green-500" />
            <TimelinePoint date="Apr 2025" title="Budget Announcement" description="FY25-26 budget with focus on development" color="red-500" />
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <Button 
          variant="ghost" 
          className="text-primary hover:text-primary/90 hover:bg-primary/10"
          onClick={() => toast({
            title: "Coming Soon",
            description: "Interactive timeline is under development."
          })}
        >
          View Full Timeline <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}

interface TimelinePointProps {
  date: string;
  title: string;
  description: string;
  color: string;
}

function TimelinePoint({ date, title, description }: TimelinePointProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-3 w-3 rounded-full bg-primary mb-2"></div>
      <span className="text-xs text-gray-400">{date}</span>
      <div className="mt-2 px-3 py-2 w-40 text-xs bg-primary/10 rounded-lg border border-primary/20">
        <span className="font-medium text-white">{title}</span>
        <p className="text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  );
}
