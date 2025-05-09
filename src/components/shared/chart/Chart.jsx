import { Card } from "@/components/ui/card";
import { chartConfig } from "@/constants/config";
import {
  convertDateToUnixTimeStamp,
  convertUnixTimeStampToDate,
  createDate,
} from "@/helpers/data.helpers";
import React, { useEffect, useState } from "react";
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
import { useStock } from "@/context/StockContext";
import { fetchHistoricalData } from "@/api/fetchHistoricalData.api";
import { mockHistoricalData } from "@/constants/mock";

function Chart() {
  const { theme } = useTheme();
  const { stockSymbol } = useStock();
  const [data, setData] = useState(formatData(mockHistoricalData) ?? []);
  const [filter, setFilter] = useState("1W");

  function formatData(data) {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimeStampToDate(data.t[index]),
      };
    });
  }

  const isDarkMode = theme === "dark";

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];
      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);
      const startUnixTime = convertDateToUnixTimeStamp(startDate);
      const endUnixTime = convertDateToUnixTimeStamp(endDate);
      return {
        startUnixTime,
        endUnixTime,
      };
    };
    const updateChartData = async () => {
      try {
        const { startUnixTime, endUnixTime } = getDateRange();
        const { resolution } = chartConfig[filter];
        const result = await fetchHistoricalData(
          stockSymbol,
          resolution,
          startUnixTime,
          endUnixTime
        );

        setData(formatData(result));
      } catch (error) {
        console.log("error: ", { error });
      }
    };
    // updateChartData();
  }, [stockSymbol, filter]);
  console.log({ data });
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
        <AreaChart data={data}>
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
