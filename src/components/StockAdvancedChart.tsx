import React, { useEffect, useMemo, useState } from "react";
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
import { formatPrice } from "@/services/psx-data";

/* ================= TYPES ================= */

type RawKSEPoint = [number, number, number, number];
type TimeRange = "1M" | "6M" | "1Y" | "3Y" | "5Y";

interface ChartPoint {
  time: number;
  value: number;
}

/* ================= HELPERS ================= */

const toDate = (ts: number) => new Date(ts * 1000);

const getFromDate = (range: TimeRange) => {
  const now = new Date();
  switch (range) {
    case "1M":
      return new Date(now.setMonth(now.getMonth() - 1));
    case "6M":
      return new Date(now.setMonth(now.getMonth() - 6));
    case "1Y":
      return new Date(now.setFullYear(now.getFullYear() - 1));
    case "3Y":
      return new Date(now.setFullYear(now.getFullYear() - 3));
    case "5Y":
      return new Date(now.setFullYear(now.getFullYear() - 5));
    default:
      return null;
  }
};

/* ================= COMPONENT ================= */

export function StockAdvancedChart({ className }: { className?: string }) {
  const { theme } = useTheme();
  const [timeRange, setTimeRange] = useState<TimeRange>("1M");
  const [rawData, setRawData] = useState<RawKSEPoint[]>([]);

  /* -------- Fetch Data -------- */
  useEffect(() => {
    fetch("https://test.bmacapital.com/backend/index.php?action=kse100")
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === 1 && Array.isArray(res.data)) {
          setRawData(res.data.sort((a: RawKSEPoint, b: RawKSEPoint) => a[0] - b[0]));
        }
      })
      .catch(console.error);
  }, []);

  /* -------- Filter + Map Data -------- */
  const chartData: ChartPoint[] = useMemo(() => {
    if (!rawData.length) return [];
    const fromDate = getFromDate(timeRange);

    return rawData
      .filter(([ts]) => (fromDate ? toDate(ts) >= fromDate : true))
      .map(([ts, close]) => ({
        time: ts,
        value: close,
      }));
  }, [rawData, timeRange]);

  /* -------- Y Axis Scaling -------- */
  const minValue = Math.min(...chartData.map((d) => d.value));
  const maxValue = Math.max(...chartData.map((d) => d.value));
  const padding = (maxValue - minValue) * 0.05;

  const yDomain: [number, number] = [
    minValue - padding,
    maxValue + padding,
  ];
  const yTicks = Array.from({ length: 6 }, (_, i) =>
    Math.round(minValue + ((maxValue - minValue) / 5) * i)
  );

  const chartConfig = {
  primary: { theme: { light: "#ea384c", dark: "#ea384c" }, label: "KSE-100" },
  support: { theme: { light: "#22c55e", dark: "#22c55e" }, label: "Support" },
  resistance: { theme: { light: "#ef4444", dark: "#ef4444" }, label: "Resistance" },
};

  /* -------- Trend -------- */
  const isPositive =
    chartData.length > 1 &&
    chartData.at(-1)!.value > chartData[0].value;

  /* ================= RENDER ================= */

  return (
    <div className={`w-full ${className}`}>
      {/* Range Buttons */}
      <div className="flex gap-2 mb-4">
        {(["1M", "6M", "1Y", "3Y", "5Y"] as TimeRange[]).map((r) => (
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
        <div>
          <ChartContainer config={chartConfig}>
            <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer  width="100%" height="50%">
              <AreaChart
                data={chartData}
                style={{aspectRatio: 0}}
                margin={{
                  top: 20,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
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
                  tickMargin={6}
                  tickFormatter={(ts) =>
                    new Date(ts * 1000).toLocaleDateString("en-PK", {
                      day: "2-digit",
                      month: "short",
                    })
                  }
                />

                <YAxis/>

                <Tooltip content={<ChartTooltipContent />} />

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
