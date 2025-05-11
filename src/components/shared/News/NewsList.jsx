import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { useStock } from "@/context/StockContext";
import { fetchStockNews } from "@/api/fetchStockNews";

function NewsList() {
  const { stockSymbol } = useStock();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getStockNews = async () => {
      try {
        const response = await fetchStockNews(stockSymbol);
        console.log({ response });
        setData(response.data.news);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getStockNews();
  }, [stockSymbol]);
  return (
    <section className="flex flex-wrap justify-center p-4 md:p-6 gap-4 md:gap-6">
      {data.map((val) => (
        <NewsCard key={val.post_time_utc} article={val} />
      ))}
    </section>
  );
}

export default NewsList;
