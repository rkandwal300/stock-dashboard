import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Details from "./details/Details";
import Overview from "./overview/overview";
import Chart from "./chart/Chart";
import { useStock } from "@/context/StockContext";
import { fetchQuote } from "@/api/fetchQuote.api";

export default function Dashboard() {
  const { stockSymbol } = useStock();
  console.log({ stockSymbol });
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateStockOverview = async () => {
      try {
        const { data } = await fetchQuote(stockSymbol);
        setQuote(data);
        setLoading(false);
      } catch (error) {
        console.log("error:", { error });
      }
    };
    updateStockOverview();
  }, [stockSymbol]);

  if (loading)
    return (
      <div className="flex flex-col">
        <Header name={""} />
        <div className="flex h-screen w-full justify-center items-center font-medium">
          Loading......
        </div>
      </div>
    );

  return (
    <div className="flex flex-col h-screen md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 bg-muted overflow-auto">
      <Header name={quote.name} />
      <div className="row-span-4 md:col-span-2">
        <Chart />
      </div>

      <div className="h-full">
        <Overview
          symbol={stockSymbol}
          price={quote.price}
          change={quote.change}
          changePercentage={quote.change_percent}
        />
      </div>
      <div className="row-span-2 md:col-span-1 xl:pt-4">
        <Details details={quote} />
      </div>
    </div>
  );
}
