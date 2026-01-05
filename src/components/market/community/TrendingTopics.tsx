
import React from 'react';
import { TrendingUp } from 'lucide-react';

interface TrendingTopic {
  id: number;
  name: string;
  size: 'large' | 'medium' | 'small' | 'xsmall';
  count: number;
}

interface TrendingTopicsProps {
  topics: TrendingTopic[];
}

export function TrendingTopics({ topics }: TrendingTopicsProps) {
  return (
    <div className="bg-gray-900/30 rounded-lg p-4 mb-6">
      <div className="flex items-center mb-3">
        <TrendingUp className="h-4 w-4 text-primary mr-2" />
        <h4 className="text-white font-medium">Trending Topics</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map(topic => {
          let sizeClass = "text-xs px-2 py-1";
          let bgClass = "bg-white/10";
          
          if (topic.size === 'large') {
            sizeClass = "text-sm px-3 py-1.5 font-medium";
            bgClass = "bg-primary/20 hover:bg-primary/30";
          } else if (topic.size === 'medium') {
            sizeClass = "text-xs px-2.5 py-1.5";
            bgClass = "bg-blue-500/20 hover:bg-blue-500/30";
          } else if (topic.size === 'small') {
            sizeClass = "text-xs px-2 py-1";
            bgClass = "bg-gray-500/20 hover:bg-gray-500/30";
          } else {
            sizeClass = "text-[10px] px-1.5 py-0.5";
            bgClass = "bg-gray-600/20 hover:bg-gray-600/30";
          }
          
          return (
            <button 
              key={topic.id} 
              className={`rounded-full ${sizeClass} ${bgClass} text-white transition-all hover:scale-105`}
            >
              {topic.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
