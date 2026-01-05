import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltipContent, ChartLegend } from "@/components/ui/chart";
import { TrendingUp, TrendingDown, Info, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { useTheme } from './theme/ThemeProvider';
import { usePSXData, formatPrice } from '@/services/psx-data';

const generateTimeframeData = (timeframe: string, baseValue: number) => {
  const variation = baseValue * 0.05; // 5% variation for realistic data
  
  if (timeframe === 'day') {
    const hours = ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', 
                  '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'];
    return hours.map((time, i) => {
      // Create a slightly random walk pattern
      const randomFactor = Math.sin(i / 2) * variation * 0.7 + (Math.random() - 0.5) * variation * 0.3;
      return { 
        time, 
        value: baseValue + randomFactor
      };
    });
  } 
  else if (timeframe === 'week') {
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => {
      const randomFactor = Math.sin(i / 1.5) * variation + (Math.random() - 0.5) * variation * 0.5;
      return { 
        time: day, 
        value: baseValue + randomFactor
      };
    });
  }
  else { // month
    return ['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, i) => {
      const trend = i / 3 * variation * 2; // Overall upward trend
      const randomFactor = (Math.random() - 0.3) * variation;
      return { 
        time: week, 
        value: baseValue + trend + randomFactor
      };
    });
  }
};

export function StockChart() {
  const [timeframe, setTimeframe] = useState('day');
  const { theme } = useTheme();
  const { indices, loading } = usePSXData();
  const [chartData, setChartData] = useState<Array<{time: string, value: number}>>([]);
  
  // Get KSE-100 data or use fallback
  const kse100 = indices.find(i => i.name === 'KSE-100');
  const currentValue = kse100?.current || 79852.64;
  const changeValue = kse100?.change || 423.75;
  const changePercent = kse100?.percentChange || 0.53;
  
  useEffect(() => {
    // Realistic simulated trend (minor uptrend/day, more stable weekly/monthly)
    setChartData(generateTimeframeData(timeframe, currentValue));
  }, [timeframe, currentValue]);
  
  const isPositiveTrend = changeValue >= 0;
  const chartConfig = {
    positive: {
      theme: { light: "#22c55e", dark: "#22c55e" },
      label: "Positive"
    },
    negative: {
      theme: { light: "#ef4444", dark: "#ef4444" },
      label: "Negative"
    },
  };

  const currentTime = new Date().toLocaleTimeString('en-US', { 
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Calculate value domain for better fit
  const yValues = chartData.map(d => d.value);
  const yMin = Math.floor(Math.min(...yValues) * 0.995);
  const yMax = Math.ceil(Math.max(...yValues) * 1.005);

  // Gradients & Filter IDs
  const positiveGradientId = "positiveGradient";
  const negativeGradientId = "negativeGradient";
  const gradientId = isPositiveTrend ? positiveGradientId : negativeGradientId;
  
  return (
    <div className={`w-full rounded-xl p-6 ${theme === 'light' ? 'bg-white shadow-md' : 'bg-card/70 border'} backdrop-blur-sm relative`}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-800' : ''}`}>KSE-100 Index</h3>
            <span className={`text-xs py-1 px-2 rounded-full ${isPositiveTrend ? 'bg-positive/10 text-positive' : 'bg-negative/10 text-negative'} animate-pulse`}>
              Live
            </span>
            <span className="text-xs py-1 px-2 rounded-full bg-primary/10 text-primary">
              <Clock className="h-3 w-3 inline mr-1" /> {currentTime} PKT
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-3xl font-bold tracking-tight ${theme === 'light' ? 'text-gray-900' : ''}`}>
              {loading ? "Loading..." : formatPrice(currentValue).replace('₨', '')}
            </span>
            <span className={`${isPositiveTrend ? "text-positive" : "text-negative"} text-sm font-medium flex items-center gap-1 px-2 py-1 rounded-lg ${isPositiveTrend ? 'bg-positive/10' : 'bg-negative/10'}`}>
              {isPositiveTrend ? (
                <>
                  <TrendingUp className="h-3.5 w-3.5" />
                  +{changeValue.toFixed(2)} (+{changePercent.toFixed(2)}%)
                </>
              ) : (
                <>
                  <TrendingDown className="h-3.5 w-3.5" />
                  {changeValue.toFixed(2)} ({changePercent.toFixed(2)}%)
                </>
              )}
            </span>
          </div>
        </div>
        <Tabs value={timeframe} onValueChange={setTimeframe} className="w-[200px]">
          <TabsList className={`grid w-full grid-cols-3 ${theme === 'light' ? 'bg-gray-100' : ''}`}>
            <TabsTrigger value="day">1D</TabsTrigger>
            <TabsTrigger value="week">1W</TabsTrigger>
            <TabsTrigger value="month">1M</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className={`mb-4 px-3 py-2 rounded-lg text-xs flex items-center justify-between ${
        theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'
      }`}>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-positive animate-pulse"></div>
          <span className={theme === 'light' ? 'text-gray-800 font-medium' : ''}>Market is open</span>
        </div>
        <div className="flex items-center gap-4">
          <span className={`flex items-center gap-1 ${theme === 'light' ? 'text-gray-800' : ''}`}>
            <Clock className="h-3 w-3" /> Trading hours: 9:30 - 15:30 PKT
          </span>
          <span className={`flex items-center gap-1 ${theme === 'light' ? 'text-gray-800' : ''}`}>
            <DollarSign className="h-3 w-3" /> 1 USD = 278.50 PKR
          </span>
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <ChartContainer 
          config={chartConfig} 
          className="[&_.recharts-cartesian-grid-horizontal_line]:stroke-border/50 [&_.recharts-cartesian-grid-vertical_line]:stroke-border/50"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <defs>
                <linearGradient id={positiveGradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop 
                    offset="5%" 
                    stopColor={theme === 'light' ? "#16a34a" : "#22c55e"} 
                    stopOpacity={0.5}
                  />
                  <stop 
                    offset="95%" 
                    stopColor={theme === 'light' ? "#16a34a" : "#22c55e"} 
                    stopOpacity={0.09}
                  />
                </linearGradient>
                <linearGradient id={negativeGradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop 
                    offset="5%" 
                    stopColor={theme === 'light' ? "#b91c1c" : "#ef4444"} 
                    stopOpacity={0.42}
                  />
                  <stop 
                    offset="95%" 
                    stopColor={theme === 'light' ? "#b91c1c" : "#ef4444"} 
                    stopOpacity={0.10}
                  />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <CartesianGrid 
                strokeDasharray="2 6" 
                className="chart-grid" 
                vertical={false} 
                opacity={theme === 'light' ? 0.45 : 0.7}
              />
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                stroke={theme === 'light' ? "#312e81" : "hsl(var(--muted-foreground))"}
                fontSize={14}
                fontWeight={600}
                tick={{ 
                  fill: theme === 'light' ? "#1e293b" : "#e0e7ef",
                  fontWeight: 600,
                  fontSize: 15
                }}
                tickMargin={14}
                height={52}
              />
              <YAxis 
                domain={[yMin, yMax]} 
                axisLine={false}
                tickLine={false}
                stroke={theme === 'light' ? "#312e81" : "hsl(var(--muted-foreground))"}
                fontSize={14}
                fontWeight={700}
                tick={{ 
                  fill: theme === 'light' ? "#d90429" : "#f87171",
                  fontWeight: 700,
                  fontSize: 15
                }}
                tickMargin={14}
                width={72}
                tickFormatter={(value) => `${Math.round(value).toLocaleString("en-PK")}`}
                tickCount={6}
              />
              <Tooltip 
                content={<ChartTooltipContent />}
                cursor={{ stroke: theme === 'dark' ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.10)' }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={isPositiveTrend 
                  ? theme === 'light' ? "#16a34a" : "hsl(142, 76%, 42%)" 
                  : theme === 'light' ? "#b91c1c" : "hsl(0, 84%, 65%)"
                }
                strokeWidth={3.2}
                fill={`url(#${gradientId})`}
                dot={false}
                activeDot={{ 
                  r: 9,
                  stroke: isPositiveTrend 
                    ? theme === 'light' ? "#16a34a" : "hsl(142, 76%, 42%)"
                    : theme === 'light' ? "#b91c1c" : "hsl(0, 84%, 65%)", 
                  strokeWidth: 3.5,
                  fill: theme === 'light' ? "#FFFFFF" : "hsl(var(--background))",
                  filter: "url(#glow)"
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      
      <div className={`mt-6 grid grid-cols-3 gap-4 border-t ${theme === 'light' ? 'border-gray-300' : 'border-border/40'} pt-4`}>
        <div className={`text-center ${theme === 'light' ? 'bg-gray-50 rounded-lg p-3 shadow-sm' : ''}`}>
          <p className={`text-sm ${theme === 'light' ? 'text-gray-700' : 'text-muted-foreground'}`}>24h Volume</p>
          <p className={`font-semibold mt-1 ${theme === 'light' ? 'text-gray-900' : ''}`}>287.5M</p>
        </div>
        <div className={`text-center ${theme === 'light' ? 'bg-gray-50 rounded-lg p-3 shadow-sm border-x border-gray-200' : 'border-x border-border/40'}`}>
          <p className={`text-sm ${theme === 'light' ? 'text-gray-700' : 'text-muted-foreground'}`}>24h High</p>
          <p className={`font-semibold mt-1 text-positive`}>80,245.32</p>
        </div>
        <div className={`text-center ${theme === 'light' ? 'bg-gray-50 rounded-lg p-3 shadow-sm' : ''}`}>
          <p className={`text-sm ${theme === 'light' ? 'text-gray-700' : 'text-muted-foreground'}`}>24h Low</p>
          <p className={`font-semibold mt-1 text-negative`}>79,123.45</p>
        </div>
      </div>

      <div className={`mt-4 ${theme === 'light' ? 'border-t border-gray-300' : 'border-t border-border/20'} pt-3`}>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`w-full text-xs justify-between ${theme === 'light' ? 'text-primary hover:bg-gray-50 font-medium' : 'text-primary hover:bg-white/5'}`}
        >
          View detailed market analysis
          <ArrowRight className="h-3.5 w-3.5 ml-2" />
        </Button>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-background/10"
      >
        <Info className={`h-4 w-4 ${theme === 'light' ? 'text-gray-500' : 'text-muted-foreground'}`} />
      </Button>
    </div>
  );
}
