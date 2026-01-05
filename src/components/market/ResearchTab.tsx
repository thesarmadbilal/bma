import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  TrendingUp, FileText, Search, ChevronRight
} from 'lucide-react';
import { ResearchCard } from './research/ResearchCard';
import { TrendTracker } from './research/TrendTracker';

export function ResearchTab() {
  const { toast } = useToast();
  
  // Research reports data
  const researchReports = [
    {
      id: 1,
      title: 'Pakistan Economic Outlook 2025',
      type: 'Macroeconomic Analysis',
      date: 'April 2025',
      preview: 'Comprehensive analysis of Pakistan\'s economic trajectory for the coming fiscal year.',
      pages: 42,
      author: 'BMA Research Team',
      category: 'Economy',
      impact: 'High',
      relatedTopics: ['GDP Growth', 'Inflation', 'Current Account'],
      color: 'from-red-500 to-amber-500'
    },
    {
      id: 2,
      title: 'Banking Sector: Navigating Higher Interest Rates',
      type: 'Sector Report',
      date: 'March 2025',
      preview: 'Impact analysis of monetary policy shifts on banking sector profitability and loan growth.',
      pages: 28,
      author: 'Saad Hashmi, CFA',
      category: 'Banking',
      impact: 'Medium',
      relatedTopics: ['Interest Rates', 'NPLs', 'Deposits'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Renewable Energy Investment Opportunities',
      type: 'Thematic Research',
      date: 'February 2025',
      preview: 'Exploring investment potential in Pakistan\'s expanding renewable energy sector.',
      pages: 36,
      author: 'Ayesha Khan, PhD',
      category: 'Energy',
      impact: 'High',
      relatedTopics: ['Solar', 'Wind', 'Policy Framework'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Technology Sector: Digital Pakistan Initiative',
      type: 'Sector Report',
      date: 'February 2025',
      preview: 'Exploring the impact of digitalization efforts on listed technology companies.',
      pages: 22,
      author: 'Zain Abbas',
      category: 'Technology',
      impact: 'Medium',
      relatedTopics: ['Fintech', 'E-commerce', 'Digital Payments'],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-xl mb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">Insight Cascade</h3>
          <p className="text-gray-300 mt-1">Research reports and analysis from BMA Capital's expert team</p>
        </div>
      </div>

      {/* Report Cards - Floating Cards with Gradients */}
      <div className="grid md:grid-cols-2 gap-6">
        {researchReports.map(report => (
          <ResearchCard key={report.id} report={report} />
        ))}
      </div>

      {/* Trend Tracker Section */}
      <TrendTracker />
    </div>
  );
}
