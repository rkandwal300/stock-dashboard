import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { useStock } from "@/context/StockContext";
import { fetchStockNews } from "@/api/fetchStockNews";

function NewsList() {
  const { stockSymbol } = useStock();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getStockNews = async () => {
      try {
        const response = await fetchStockNews(stockSymbol); 
        setData(response.data.news);
        setLoading(false)
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getStockNews();
  }, [stockSymbol]);
    if (loading)
      return (
        <div className="flex h-screen w-full justify-center items-center font-medium">
          Loading......
        </div>
      );
  return (
    <section className="flex flex-wrap justify-center p-4 md:p-6 gap-4 md:gap-6">
      {data.map((val) => (
        <NewsCard key={val.post_time_utc} article={val} />
      ))}
    </section>
  );
}

export default NewsList;
