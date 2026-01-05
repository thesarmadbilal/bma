
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Investment {
  id: number;
  title: string;
  sector: string;
  investmentType: string;
  minInvestment: string;
  expectedReturn: string;
  riskLevel: string;
  region: string;
  description: string;
}

interface InvestmentCardProps {
  investment: Investment;
}

export function InvestmentCard({ investment }: InvestmentCardProps) {
  const { toast } = useToast();

  return (
    <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex justify-between">
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30">{investment.sector}</Badge>
          <Badge 
            className={`
              ${investment.riskLevel.includes('Low') ? 'bg-green-500/20 text-green-400' : 
                investment.riskLevel.includes('Medium') ? 'bg-yellow-500/20 text-yellow-400' : 
                'bg-red-500/20 text-red-400'}
            `}
          >
            {investment.riskLevel} Risk
          </Badge>
        </div>
        <CardTitle className="text-xl mt-2">{investment.title}</CardTitle>
        <div className="text-xs text-gray-400 mt-1">
          Region: {investment.region}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300">{investment.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mt-4 bg-black/20 rounded-lg p-3">
          <div>
            <div className="text-xs text-gray-400">Investment Type</div>
            <div className="text-sm text-white font-medium">{investment.investmentType}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Minimum Investment</div>
            <div className="text-sm text-white font-medium">{investment.minInvestment}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Expected Return</div>
            <div className="text-sm text-green-400 font-medium">{investment.expectedReturn}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Currency</div>
            <div className="text-sm text-white font-medium">USD / PKR</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" className="text-primary">
          More Details
        </Button>
        <Button 
          className="bg-primary hover:bg-primary/90"
          onClick={() => toast({
            title: "Investment Interest Registered",
            description: "Our team will contact you with more information."
          })}
        >
          Express Interest
        </Button>
      </CardFooter>
    </Card>
  );
}
