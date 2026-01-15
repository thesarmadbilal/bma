import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "./ui/button";
import { ChartContainer, ChartTooltipContent } from "./ui/chart";
import { useTheme } from "./theme/ThemeProvider";
import { API_ENDPOINTS } from "@/services/api-config";

/* ================= TYPES ================= */

type RawKSEIntradayPoint = [number, number, number];
type RawKSEEODPoint = [number, number, number, number];
type RawKSEPoint = RawKSEIntradayPoint | RawKSEEODPoint;
type TimeRange = "1D" | "1M" | "6M" | "YTD" | "1Y" | "3Y" | "5Y";

interface ChartPoint {
  time: number;
  value: number;
}

interface HeaderValues {
  current: number;
  previous: number;
  change: number;
  percent: number;
}


/* ================= CONSTANTS ================= */

const TIME_RANGES: TimeRange[] = ["1D", "1M", "6M", "YTD", "1Y", "3Y", "5Y"];

const CHART_CONFIG = {
  primary: { theme: { light: "#ea384c", dark: "#ea384c" }, label: "KSE-100" },
  support: { theme: { light: "#22c55e", dark: "#22c55e" }, label: "Support" },
  resistance: { theme: { light: "#ef4444", dark: "#ef4444" }, label: "Resistance" },
};

/* ================= HELPERS ================= */

const toDate = (ts: number): Date => new Date(ts * 1000);

const getFromTimestamp = (range: TimeRange): number | null => {
  const now = new Date();
  
  switch (range) {
    case "1D":
      return null;
    case "1M": {
      const date = new Date(now);
      date.setMonth(date.getMonth() - 1);
      return Math.floor(date.getTime() / 1000);
    }
    case "6M": {
      const date = new Date(now);
      date.setMonth(date.getMonth() - 6);
      return Math.floor(date.getTime() / 1000);
    }
    case "YTD": {
      // January 1st of current year at 00:00:00 local time
      const ytdDate = new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0);
      return Math.floor(ytdDate.getTime() / 1000);
    }
    case "1Y": {
      const date = new Date(now);
      date.setFullYear(date.getFullYear() - 1);
      return Math.floor(date.getTime() / 1000);
    }
    case "3Y": {
      const date = new Date(now);
      date.setFullYear(date.getFullYear() - 3);
      return Math.floor(date.getTime() / 1000);
    }
    case "5Y": {
      const date = new Date(now);
      date.setFullYear(date.getFullYear() - 5);
      return Math.floor(date.getTime() / 1000);
    }
    default:
      return null;
  }
};

const sortDataByTimestamp = (data: RawKSEPoint[]): RawKSEPoint[] => {
  return [...data].sort((a, b) => a[0] - b[0]);
};

const parseApiResponse = (data: any): RawKSEPoint[] | null => {
  if (data?.status === 1 && Array.isArray(data.data)) {
    return sortDataByTimestamp(data.data);
  }
  return null;
};

const extractPreviousClose = (eodData: any): number | null => {
  if (eodData?.status === 1 && Array.isArray(eodData.data) && eodData.data.length > 1) {
    return eodData.data[1][1]; // Index [1] is previous day's close
  }
  return null;
};

const formatNumber = (value: number, decimals: number = 2): string => {
  return value.toLocaleString("en-PK", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

const formatYAxisValue = (value: number): string => {
  if (value >= 100000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toFixed(0);
};

const formatXAxisTick = (ts: number, range: TimeRange): string => {
  const date = new Date(ts * 1000);
  
  if (range === "1D") {
    return date.toLocaleTimeString("en-PK", { hour: "2-digit", minute: "2-digit" });
  }
  if (range === "3Y" || range === "5Y") {
    return date.getFullYear().toString();
  }
  if (range === "YTD") {
    return date.toLocaleDateString("en-PK", { month: "short" });
  }
  return date.toLocaleDateString("en-PK", { day: "2-digit", month: "short" });
};

const formatTooltipTimestamp = (value: number | string, range: TimeRange): string => {
  const date = new Date(typeof value === "number" ? value * 1000 : value);
  return date.toLocaleString("en-PK", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: range === "1D" ? "2-digit" : undefined,
  });
};

/* ================= COMPONENT ================= */

export function StockAdvancedChart({ className }: { className?: string }) {
  const { theme } = useTheme();
  const [timeRange, setTimeRange] = useState<TimeRange>("1D");
  const [intradayData, setIntradayData] = useState<RawKSEPoint[]>([]);
  const [eodData, setEodData] = useState<RawKSEPoint[]>([]);
  const [previousClose, setPreviousClose] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  /* -------- Data Fetching -------- */

  // Fetch all data in parallel on mount
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        // Fetch both intraday and EOD data in parallel
        const [intradayRes, eodRes] = await Promise.all([
          fetch(API_ENDPOINTS.KSE100.INTRADAY()),
          fetch(API_ENDPOINTS.KSE100.EOD()),
        ]);

        // Process intraday data
        if (intradayRes.ok) {
          const intradayJson = await intradayRes.json();
          const sortedIntraday = parseApiResponse(intradayJson);
          if (sortedIntraday) {
            setIntradayData(sortedIntraday);
          }
        }

        // Process EOD data and extract previous close
        if (eodRes.ok) {
          const eodJson = await eodRes.json();
          const sortedEod = parseApiResponse(eodJson);
          if (sortedEod) {
            setEodData(sortedEod);
          }
          
          // Extract previous close from EOD data
          const prevClose = extractPreviousClose(eodJson);
          if (prevClose !== null) {
            setPreviousClose(prevClose);
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  /* -------- Data Processing -------- */

  // Select the appropriate dataset based on time range
  const rawData = useMemo(() => {
    return timeRange === "1D" ? intradayData : eodData;
  }, [timeRange, intradayData, eodData]);

  const chartData: ChartPoint[] = useMemo(() => {
    if (!rawData.length) return [];
    
    const fromTimestamp = getFromTimestamp(timeRange);
    
    return rawData
      .filter(([ts]) => (fromTimestamp ? ts >= fromTimestamp : true))
      .map((point) => ({
        time: point[0],
        value: point[1],
      }));
  }, [rawData, timeRange]);

  const yAxisDomain = useMemo(() => {
    if (!chartData.length) return [0, 0];
    
    const values = chartData.map((d) => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const padding = (maxValue - minValue) * 0.1;
    
    return [Math.max(0, minValue - padding), maxValue + padding];
  }, [chartData]);

  const xTicks = useMemo(() => {
    if (!chartData.length) return [];
    
    if (timeRange === "1D") {
      const ticks: number[] = [];
      const hours: Record<number, boolean> = {};
      
      chartData.forEach((d) => {
        const hour = new Date(d.time * 1000).getHours();
        if (!hours[hour]) {
          hours[hour] = true;
          ticks.push(d.time);
        }
      });
      
      // Limit to 12 ticks max
      if (ticks.length > 12) {
        return ticks.filter((_, i) => i % 2 === 0);
      }
      
      return ticks;
    }
    
    if (timeRange === "YTD") {
      const months: Record<string, boolean> = {};
      const ticks: number[] = [];
      
      chartData.forEach((d) => {
        const date = new Date(d.time * 1000);
        const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
        if (!months[monthKey]) {
          months[monthKey] = true;
          ticks.push(d.time);
        }
      });
      
      // Limit to 12 ticks max for YTD
      if (ticks.length > 12) {
        const step = Math.ceil(ticks.length / 12);
        return ticks.filter((_, i) => i % step === 0);
      }
      
      return ticks;
    }
    
    if (timeRange === "3Y" || timeRange === "5Y") {
      const years: Record<number, boolean> = {};
      return chartData
        .filter((d) => {
          const year = new Date(d.time * 1000).getFullYear();
          if (!years[year]) {
            years[year] = true;
            return true;
          }
          return false;
        })
        .map((d) => d.time);
    }
    
    // Sample evenly for other ranges
    if (chartData.length > 20) {
      const step = Math.ceil(chartData.length / 15);
      return chartData.filter((_, i) => i % step === 0).map((d) => d.time);
    }
    
    return chartData.map((d) => d.time);
  }, [chartData, timeRange]);

  const headerValues = useMemo((): HeaderValues | null => {
    if (intradayData.length === 0 || previousClose === null) return null;
    
    const current = intradayData.at(-1)![1];
    const previous = previousClose;
    const change = current - previous;
    const percent = (change / previous) * 100;
    
    return { current, previous, change, percent };
  }, [intradayData, previousClose]);

  const isPositive = headerValues ? headerValues.change >= 0 : false;

  /* -------- Render Helpers -------- */

  const renderHeader = () => (
    <div className="flex justify-between mb-4">
      <div>
        <div className="text-sm text-gray-400">Current</div>
        <div className="text-2xl font-bold text-white">
          {headerValues ? formatNumber(headerValues.current) : "Loading..."}
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm text-gray-400">Change</div>
        {headerValues ? (
          <div className="flex items-center gap-2 justify-end">
            <span className={`text-lg font-medium ${isPositive ? "text-green-400" : "text-red-400"}`}>
              {isPositive ? "+" : ""}
              {formatNumber(headerValues.change)}
            </span>
            <span className={`text-lg font-medium ${isPositive ? "text-green-400" : "text-red-400"}`}>
              ({isPositive ? "+" : ""}
              {headerValues.percent.toFixed(2)}%)
            </span>
          </div>
        ) : (
          <div className="text-lg font-medium text-gray-400">-</div>
        )}
      </div>
    </div>
  );

  const renderTimeRangeButtons = () => (
    <div className="flex gap-2 mb-4">
      {TIME_RANGES.map((range) => (
        <Button
          key={range}
          size="sm"
          variant={timeRange === range ? "default" : "outline"}
          onClick={() => setTimeRange(range)}
        >
          {range}
        </Button>
      ))}
    </div>
  );

  /* ================= RENDER ================= */

  return (
    <div className={`w-full ${className}`}>
      {renderTimeRangeButtons()}

      <div className="rounded-lg p-4 border border-white/10">
        {renderHeader()}

        <div>
          <ChartContainer config={CHART_CONFIG}>
            <div style={{ width: "100%", height: "100%" }}>
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart
                  data={chartData}
                  style={{ aspectRatio: 0 }}
                  margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
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

                  <CartesianGrid
                    strokeDasharray="2 6"
                    vertical={false}
                    stroke="#334155"
                    opacity={0.3}
                  />

                  <XAxis
                    dataKey="time"
                    ticks={xTicks}
                    tickFormatter={(ts) => formatXAxisTick(ts, timeRange)}
                    stroke="#94a3b8"
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={{ stroke: "#334155" }}
                    style={{ userSelect: "none" }}
                  />

                  <YAxis
                    domain={yAxisDomain}
                    tickFormatter={formatYAxisValue}
                    stroke="#94a3b8"
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    axisLine={{ stroke: "#334155" }}
                    tickLine={{ stroke: "#334155" }}
                    width={75}
                    style={{ userSelect: "none" }}
                  />

                  <Tooltip
                    content={
                      <ChartTooltipContent
                        labelFormatter={(value, payload) => {
                          if (!payload || !payload.length) return "";
                          // Get the timestamp from the payload data point
                          const timestamp = payload[0]?.payload?.time;
                          if (!timestamp) return "";
                          return formatTooltipTimestamp(timestamp, timeRange);
                        }}
                        formatter={(value) => formatNumber(Number(value))}
                      />
                    }
                    cursor={{ stroke: "#94a3b8", strokeWidth: 1, strokeDasharray: "3 3" }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#ea384c"
                    fill="url(#kseFill)"
                    strokeWidth={2.5}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
