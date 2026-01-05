import React, { useState } from 'react';
import { Button } from './ui/button';
import { StockAdvancedChart } from './StockAdvancedChart';
import { ChevronRight, TrendingUp, Calendar, Filter, Sigma, ArrowUpRight, ArrowDownRight, Clock, Briefcase, BarChart3, FileText, Users, Search, Star, StarHalf, Tag, TrendingDown, CirclePlus, Award } from 'lucide-react';
import { BarChart4, MessageCircle, BookOpen, Globe, LineChart, PieChart } from './icons/MarketIcons';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { MarketDataTab } from './market/MarketDataTab';
import { CommunityTab } from './market/CommunityTab';
import { ResearchTab } from './market/ResearchTab';
import { GlobalGatewayTab } from './market/GlobalGatewayTab';
export function PakistanStockExchange() {
  const [view, setView] = useState<'overview' | 'detailed'>('overview');
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<string>('market');
  return <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="py-1 px-3 text-xs rounded-full bg-primary/20 text-primary">PSX Live</span>
            {/* <span className="text-xs text-gray-400 flex items-center">
              <Clock className="h-3 w-3 mr-1" /> Last updated: {new Date().toLocaleTimeString()}
            </span> */}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight flex items-center">
            Pakistan Stock Exchange 
            <span className="ml-2 text-primary">All-in-One Platform</span>
          </h2>
          
          <p className="text-gray-300 md:text-lg mt-2 max-w-2xl">
            Advanced metrics, real-time data visualization, and comprehensive market analytics for informed investment decisions.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          

          <TabsContent value="market" className="mt-0">
            <MarketDataTab view={view} setView={setView} selectedSector={selectedSector} setSelectedSector={setSelectedSector} />
          </TabsContent>

          <TabsContent value="community" className="mt-0">
            <CommunityTab />
          </TabsContent>

          <TabsContent value="research" className="mt-0">
            <ResearchTab />
          </TabsContent>

          <TabsContent value="global" className="mt-0">
            <GlobalGatewayTab />
          </TabsContent>
        </Tabs>

        {/* <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-card/20 backdrop-blur-md rounded-lg border border-white/5 p-4 text-xs text-gray-400">
            <p>
              All data provided is for informational purposes only and should not be considered as investment advice.
              Market data is delayed by at least 15 minutes. © 2025 BMA Capital Management Ltd. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center justify-end gap-2">
            <Button variant="outline" size="sm" className="gap-2 border-gray-600">
              <LineChart className="h-4 w-4" />
              Technical Analysis
            </Button>
            <Button variant="outline" size="sm" className="gap-2 border-gray-600">
              <PieChart className="h-4 w-4" />
              Sector Performance
            </Button>
          </div>
        </div> */}
      </div>
    </section>;
}