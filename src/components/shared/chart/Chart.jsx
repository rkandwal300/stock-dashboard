import { Card } from "@/components/ui/card";
import { chartConfig } from "@/constants/config";
import React, { useEffect, useState } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartFilter from "./ChartFilter";
import { useStock } from "@/context/StockContext";
import { fetchHistoricalData } from "@/api/fetchHistoricalData.api";

function Chart() {
  const { stockSymbol } = useStock();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1D");

  useEffect(() => {
    const updateChartData = async () => {
      try {
        const response = await fetchHistoricalData(stockSymbol, filter);
        const chartData = Object.entries(response.data.time_series).map(
          ([time, values]) => ({
            time, // or format it as needed
            price: values.price,
            change: values.change,
            change_percent: values.change_percent,
            volume: values.volume,
          })
        );
        setData(chartData);
      } catch (error) {
        console.log("error: ", { error });
      }
    };
    updateChartData();
  }, [stockSymbol, filter]);

  return (
    <Card className="p-4 py-8 h-fit relative">
      <ul className="flex absolute top-2 right-2 z-40 gap-2">
        {chartConfig.map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={item === filter}
              onClick={() => setFilter(item)}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis yAxisId="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            name="Price"
            dot={false}
          />
          <Bar
            yAxisId="right"
            dataKey="volume"
            fill="#82ca9d"
            name="Volume"
            barSize={10}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default Chart;
