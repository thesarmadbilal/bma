
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ResearchReport {
  id: number;
  title: string;
  type: string;
  date: string;
  preview: string;
  pages: number;
  author: string;
  category: string;
  impact: string;
  relatedTopics: string[];
  color: string;
}

interface ResearchCardProps {
  report: ResearchReport;
}

export function ResearchCard({ report }: ResearchCardProps) {
  const { toast } = useToast();

  return (
    <div className="report-card group relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
      <div className={`absolute inset-0 bg-gradient-to-br ${report.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40 group-hover:bg-black/30 transition-colors"></div>
      
      <div className="relative p-6 flex flex-col h-full z-10">
        <div className="flex justify-between items-start">
          <Badge className="bg-white/10 text-white hover:bg-white/20">{report.type}</Badge>
          <div className="flex items-center gap-1">
            <Badge className={`
              ${report.impact === 'High' ? 'bg-red-500/20 text-red-400' : 
                report.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                'bg-blue-500/20 text-blue-400'}
            `}>
              {report.impact} Impact
            </Badge>
          </div>
        </div>
        
        <h4 className="text-xl font-medium text-white mt-3 group-hover:text-primary transition-colors">{report.title}</h4>
        <p className="text-sm text-gray-300 mt-2 flex-grow">{report.preview}</p>
        
        <div className="mt-4 flex justify-between items-end">
          <div className="text-xs text-gray-400">
            <div className="flex items-center">
              <span>{report.pages} pages</span>
            </div>
            <div className="mt-1">{report.author}</div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 text-primary hover:text-white hover:bg-primary/20"
            onClick={() => toast({
              title: "Premium Content",
              description: "Please sign in to access this research report."
            })}
          >
            Read Report
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="mt-4 pt-3 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {report.relatedTopics.map((topic, idx) => (
              <span 
                key={idx} 
                className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
