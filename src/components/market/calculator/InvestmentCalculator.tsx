
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Calculator, Sliders, Info } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function InvestmentCalculator() {
  const { toast } = useToast();
  const [initialAmount, setInitialAmount] = useState<number>(10000);
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(1000);
  const [years, setYears] = useState<number>(5);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [result, setResult] = useState<number | null>(null);
  const [inflation, setInflation] = useState<number>(6);
  const [breakdown, setBreakdown] = useState<{ year: number; value: number; contributions: number; earnings: number; }[]>([]);

  const calculateInvestment = () => {
    const monthlyRate = expectedReturn / 100 / 12;
    const inflationRate = inflation / 100;
    const months = years * 12;
    
    const futureValue = initialAmount * Math.pow(1 + monthlyRate, months) +
      monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    const inflationAdjustedValue = futureValue / Math.pow(1 + inflationRate, years);
    
    // Generate breakdown by year
    const yearlyBreakdown = [];
    let runningTotal = initialAmount;
    let totalContributions = initialAmount;
    
    for (let year = 1; year <= years; year++) {
      const yearlyMonths = year * 12;
      const yearContributions = monthlyInvestment * 12;
      totalContributions += yearContributions;
      
      const yearEndValue = initialAmount * Math.pow(1 + monthlyRate, yearlyMonths) +
        monthlyInvestment * ((Math.pow(1 + monthlyRate, yearlyMonths) - 1) / monthlyRate);
      
      yearlyBreakdown.push({
        year,
        value: Math.round(yearEndValue),
        contributions: Math.round(totalContributions),
        earnings: Math.round(yearEndValue - totalContributions)
      });
      
      runningTotal = yearEndValue;
    }
    
    setBreakdown(yearlyBreakdown);
    setResult(Math.round(futureValue));

    toast({
      title: "Calculation Complete",
      description: `Your investment could be worth PKR ${Math.round(futureValue).toLocaleString()} in ${years} years.`,
    });
  };

  useEffect(() => {
    if (result) calculateInvestment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inflation]);

  return (
    <GlassCard className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="h-5 w-5 text-primary" />
        <h3 className="text-lg text-white font-bold">Investment Calculator</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="initial">Initial Investment (PKR)</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-[200px] text-sm">The amount you start with. This is your first investment.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="initial"
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(Number(e.target.value))}
              className="bg-background/50"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="monthly">Monthly Investment (PKR)</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-[200px] text-sm">The amount you'll add to your investment every month.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="monthly"
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="bg-background/50"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="years">Investment Period (Years)</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-[200px] text-sm">How long you plan to keep your money invested.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="bg-background/50"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="return">Expected Annual Return (%)</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-[200px] text-sm">The yearly percentage you expect your investment to grow by.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="return"
              type="number"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="bg-background/50"
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="inflation">Estimated Inflation (%)</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-[200px] text-sm">The yearly percentage that prices tend to rise, reducing purchasing power.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="inflation"
              type="number"
              value={inflation}
              onChange={(e) => setInflation(Number(e.target.value))}
              className="bg-background/50"
            />
          </div>
          
          <Button onClick={calculateInvestment} className="w-full gap-2">
            <Calculator className="h-4 w-4" />
            Calculate Returns
          </Button>
        </div>
        
        <div>
          {result ? (
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-gray-300">Estimated Future Value:</p>
                <p className="text-2xl font-bold text-primary">
                  PKR {result.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Inflation-adjusted value: PKR {Math.round(result / Math.pow(1 + inflation / 100, years)).toLocaleString()}
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sliders className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-medium text-white">Year-by-Year Breakdown</h4>
                </div>
                <div className="bg-background/30 rounded-lg p-3 max-h-[200px] overflow-y-auto text-sm">
                  <table className="w-full">
                    <thead className="text-xs text-gray-400">
                      <tr>
                        <th className="text-left p-1">Year</th>
                        <th className="text-right p-1">Value</th>
                        <th className="text-right p-1">Contributions</th>
                        <th className="text-right p-1">Earnings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {breakdown.map((item) => (
                        <tr key={item.year} className="border-t border-white/10">
                          <td className="p-1">{item.year}</td>
                          <td className="text-right p-1 text-primary">{item.value.toLocaleString()}</td>
                          <td className="text-right p-1">{item.contributions.toLocaleString()}</td>
                          <td className="text-right p-1 text-green-400">{item.earnings.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-background/20 p-3 rounded-lg">
                <p className="text-xs text-gray-400">
                  This calculator provides estimates based on the information you provide. 
                  Actual results may vary based on market conditions, tax implications, and other factors.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full justify-center items-center p-6 text-center">
              <Calculator className="h-12 w-12 text-primary/40 mb-4" />
              <p className="text-gray-400">
                Enter your investment details and calculate to see projected returns and a year-by-year breakdown.
              </p>
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
