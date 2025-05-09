import { Card } from "@/components/ui/card";
import { chartConfig } from "@/constants/config";
import { mockHistoricalData } from "@/constants/mock";
import { convertUnixTimeStampToDate } from "@/helpers/data.helpers";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartFilter from "./ChartFilter";
import { useTheme } from "@/context/ThemeContext";

function Chart() {
  const { theme } = useTheme();
  const [data, setData] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");

  const formatData = () => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimeStampToDate(data.t[index]),
      };
    });
  };

  const isDarkMode = theme === "dark";
  return (
    <Card className="p-4 py-8 h-full relative">
      <ul className="flex absolute top-2 right-2 z-40 gap-2">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={item === filter}
              onClick={() => setFilter(item)}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={formatData()}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={isDarkMode ? "#312e81" : "rgb(199,210,254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={isDarkMode ? "#312e81" : "rgb(199,210,254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey={"value"}
            stroke="#312e81"
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#chartColor)"
          />
          <Tooltip
            contentStyle={isDarkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={isDarkMode ? { color: "#818cf8" } : null}
          />
          <XAxis data="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default Chart;
