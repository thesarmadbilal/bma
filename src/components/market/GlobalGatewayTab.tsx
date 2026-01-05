import React from 'react';
import { InvestmentCard } from './global/InvestmentCard';
import { RegulatoryRoadmap } from './global/RegulatoryRoadmap';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  Globe, Briefcase, FileText, ChevronRight
} from 'lucide-react';

export function GlobalGatewayTab() {
  const { toast } = useToast();
  
  // Global investments data
  const globalInvestments = [
    {
      id: 1,
      title: 'Karachi Real Estate Development',
      sector: 'Real Estate',
      investmentType: 'Direct Investment',
      minInvestment: '$100,000',
      expectedReturn: '12-15% p.a.',
      riskLevel: 'Medium',
      region: 'Sindh',
      description: 'Premium mixed-use development opportunities in Karachi\'s expanding central business district.'
    },
    {
      id: 2,
      title: 'SME Growth Fund',
      sector: 'Multiple',
      investmentType: 'Private Equity',
      minInvestment: '$250,000',
      expectedReturn: '18-22% IRR',
      riskLevel: 'Medium-High',
      region: 'Nationwide',
      description: 'Fund focusing on high-growth small and medium enterprises across multiple sectors.'
    },
    {
      id: 3,
      title: 'Pakistan Sovereign Bonds',
      sector: 'Government',
      investmentType: 'Fixed Income',
      minInvestment: '$10,000',
      expectedReturn: '7-9% p.a.',
      riskLevel: 'Low-Medium',
      region: 'Federal',
      description: 'Government-backed securities with attractive yields compared to developed markets.'
    },
    {
      id: 4,
      title: 'Renewable Energy Projects',
      sector: 'Energy',
      investmentType: 'Project Finance',
      minInvestment: '$500,000',
      expectedReturn: '14-16% p.a.',
      riskLevel: 'Medium',
      region: 'Punjab/Sindh',
      description: 'Solar and wind energy projects with government-backed power purchase agreements.'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-xl mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">Global Gateway</h3>
          <p className="text-gray-300 mt-1">Invest in Pakistan from anywhere in the world</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button 
            variant="outline" 
            size="sm"
            className="gap-2 border-white/20 hover:bg-white/10"
            onClick={() => toast({
              title: "Schedule Consultation",
              description: "Our international investment team will contact you shortly."
            })}
          >
            <Calendar className="h-4 w-4" />
            Schedule Consultation
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {globalInvestments.map(investment => (
          <InvestmentCard key={investment.id} investment={investment} />
        ))}
      </div>

      <RegulatoryRoadmap />
    </div>
  );
}
