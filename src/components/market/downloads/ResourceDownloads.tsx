
import React from 'react';
import { GlassCard } from '../GlassCard';
import { Button } from '@/components/ui/button';
import { Download, Link, FileText, Book, Calculator } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ResourceDownloads() {
  const { toast } = useToast();
  
  const resources = [
    {
      title: "PSX Trading Guide 2025",
      description: "Comprehensive guide for new investors",
      type: "PDF",
      size: "2.4 MB",
      category: "guides"
    },
    {
      title: "Market Analysis Templates",
      description: "Excel templates for technical analysis",
      type: "XLSX",
      size: "1.8 MB",
      category: "tools"
    },
    {
      title: "Investment Risk Assessment",
      description: "Tool for evaluating investment risks",
      type: "PDF",
      size: "3.1 MB",
      category: "tools"
    },
    {
      title: "Sector Performance Report",
      description: "Annual sector analysis and outlook",
      type: "PDF",
      size: "4.2 MB",
      category: "reports"
    },
    {
      title: "Pakistan Economic Outlook",
      description: "Quarterly economic analysis",
      type: "PDF",
      size: "5.7 MB",
      category: "reports"
    },
    {
      title: "Beginner's Guide to Stocks",
      description: "Introduction to equity investments",
      type: "PDF",
      size: "1.5 MB",
      category: "guides"
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  
  const filteredResources = selectedCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const handleDownload = (resourceTitle: string) => {
    toast({
      title: "Download Started",
      description: `${resourceTitle} is being downloaded.`
    });
  };

  return (
    <GlassCard className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Download className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-white">Downloadable Resources</h3>
      </div>
      
      <div className="mb-4">
        <Tabs 
          defaultValue="all" 
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 h-9 w-full bg-background/30">
            <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
            <TabsTrigger value="reports" className="text-xs">Reports</TabsTrigger>
            <TabsTrigger value="guides" className="text-xs">Guides</TabsTrigger>
            <TabsTrigger value="tools" className="text-xs">Tools</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
        {filteredResources.map((resource, index) => (
          <div 
            key={index}
            className="p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <ResourceIcon category={resource.category} />
                  <h4 className="font-medium text-white">{resource.title}</h4>
                </div>
                <p className="text-sm text-gray-400 mt-1">{resource.description}</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  <span>{resource.type}</span>
                  <span>•</span>
                  <span>{resource.size}</span>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => handleDownload(resource.title)}
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        
        {filteredResources.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            <Download className="h-8 w-8 mx-auto mb-2 opacity-30" />
            <p>No resources available in this category</p>
          </div>
        )}
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/10">
        <Button variant="link" className="text-primary hover:text-primary/90 w-full" asChild>
          <Link to="/governance" className="flex items-center justify-center">
            <FileText className="h-4 w-4 mr-2" />
            View Corporate Documents
          </Link>
        </Button>
      </div>
    </GlassCard>
  );
}

function ResourceIcon({ category }: { category: string }) {
  switch (category) {
    case 'reports':
      return <FileText className="h-4 w-4 text-blue-400" />;
    case 'guides':
      return <Book className="h-4 w-4 text-green-400" />;
    case 'tools':
      return <Calculator className="h-4 w-4 text-amber-400" />;
    default:
      return <FileText className="h-4 w-4 text-gray-400" />;
  }
}
