import React, { useEffect, useMemo, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Brush,
} from "recharts";
import { Button } from "./ui/button";
import { ChartContainer, ChartTooltipContent } from "./ui/chart";
import { useTheme } from "./theme/ThemeProvider";
import { formatPrice } from "@/services/psx-data";


type RawKSEPoint = [number, number, number, number];
type TimeRange = "1M" | "6M" | "YTD" | "1Y" | "3Y" | "5Y";

interface ChartPoint {
  time: number; 
  value: number;
}


const toDate = (ts: number) => new Date(ts * 1000);

const getFromDate = (range: TimeRange) => {
  const now = new Date();
  switch (range) {
    case "1M":
      return new Date(new Date().setMonth(now.getMonth() - 1));
    case "6M":
      return new Date(new Date().setMonth(now.getMonth() - 6));
    case "YTD":
      return new Date(now.getFullYear(), 0, 1);
    case "1Y":
      return new Date(new Date().setFullYear(now.getFullYear() - 1));
    case "3Y":
      return new Date(new Date().setFullYear(now.getFullYear() - 3));
    case "5Y":
      return new Date(new Date().setFullYear(now.getFullYear() - 5));
    default:
      return null;
  }
};


const intervalMap: Record<TimeRange, number> = {
  "1M": 5,
  "6M": 10,
  YTD: 20,
  "1Y": 20,
  "3Y": 60,
  "5Y": 120,
} as const;


export function StockAdvancedChart({ className }: { className?: string }) {
  const { theme } = useTheme();
  const [timeRange, setTimeRange] = useState<TimeRange>("1M");
  const [rawData, setRawData] = useState<RawKSEPoint[]>([]);

 
  useEffect(() => {
    fetch("https://test.bmacapital.com/backend/index.php?action=kse100")
      .then((res) => res.json())
      .then(
        (res: { status: number; message: string; data: RawKSEPoint[] }) => {
          if (res.status === 1 && Array.isArray(res.data)) {
            setRawData(res.data.sort((a, b) => a[0] - b[0]));
          } else {
            console.error("Invalid API response", res);
          }
        }
      )
      .catch(console.error);
  }, []);

  const chartData: ChartPoint[] = useMemo(() => {
    if (!rawData.length) return [];

    const fromDate = getFromDate(timeRange);

    let filtered = fromDate
      ? rawData.filter(([ts]) => toDate(ts) >= fromDate)
      : rawData;

    return filtered.map(([ts, close]) => ({ time: ts, value: close }));
  }, [rawData, timeRange]);


  const highest = Math.max(...chartData.map((d) => d.value));
  const lowest = Math.min(...chartData.map((d) => d.value));
  const isPositive =
    chartData.length > 1 &&
    chartData.at(-1)!.value > chartData[0].value;


  const ticks = useMemo(() => {
    const interval = intervalMap[timeRange] || 10;
    return chartData.filter((_, idx) => idx % interval === 0).map((d) => d.time);
  }, [chartData, timeRange]);


  const chartConfig = {
    primary: {
      theme: { light: "#ea384c", dark: "#ea384c" },
      label: "KSE-100",
    },
    support: {
      theme: { light: "#22c55e", dark: "#22c55e" },
      label: "Support",
    },
    resistance: {
      theme: { light: "#ef4444", dark: "#ef4444" },
      label: "Resistance",
    },
  };


  return (
    <div className={`w-full ${className}`}>
      {/* Time Range Buttons */}
      <div className="flex gap-2 mb-4">
        {(["1M", "6M", "YTD", "1Y", "3Y", "5Y"] as TimeRange[]).map((r) => (
          <Button
            key={r}
            size="sm"
            variant={timeRange === r ? "default" : "outline"}
            onClick={() => setTimeRange(r)}
          >
            {r}
          </Button>
        ))}
      </div>

      <div className="bg-black/20 rounded-lg p-4 border border-white/10">
        {/* Header */}
        <div className="flex justify-between mb-4">
          <div>
            <div className="text-sm text-gray-400">Current</div>
            <div className="text-2xl font-bold text-white">
              {formatPrice(chartData.at(-1)?.value || 0)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Change</div>
            <div
              className={`text-lg font-medium ${
                isPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              {chartData.length > 1 &&
                `${(
                  ((chartData.at(-1)!.value - chartData[0].value) /
                    chartData[0].value) *
                  100
                ).toFixed(2)}%`}
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[160px]">
  <ChartContainer
    config={chartConfig}
    className="[&_.recharts-cartesian-grid-horizontal_line]:stroke-border/40 [&_.recharts-cartesian-grid-vertical_line]:stroke-border/40"
  >
      <AreaChart
        data={chartData}
        margin={{ top: 10, right: 20, left: 10, bottom: 50 }}
      >
        <defs>
          <linearGradient id="kseFill" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="#ea384c"
              stopOpacity={theme === "light" ? 0.25 : 0.35}
            />
            <stop offset="95%" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="2 6" vertical={false} />

        <XAxis
          dataKey="time"
          height={28}
          tickMargin={8}
          interval="preserveStartEnd"
          tickFormatter={(ts) =>
            new Date(ts * 1000).toLocaleDateString("en-PK", {
              day: "2-digit",
              month: "short",
              year: timeRange.includes("Y") ? "2-digit" : undefined,
            })
          }
        />

        <YAxis tickFormatter={(v) => v.toLocaleString("en-PK")} />

        <Tooltip content={<ChartTooltipContent />} />

        <ReferenceLine y={highest} stroke="#ef4444" />
        <ReferenceLine y={lowest} stroke="#22c55e" />

        <Area
          type="monotone"
          dataKey="value"
          stroke="#ea384c"
          fill="url(#kseFill)"
          strokeWidth={2.5}
          dot={false}
        />

        {timeRange !== "1M" && (
          <Brush dataKey="time" height={16} tickFormatter={() => ""} />
        )}
      </AreaChart>
  </ChartContainer>
</div>

      </div>
    </div>
  );
}
