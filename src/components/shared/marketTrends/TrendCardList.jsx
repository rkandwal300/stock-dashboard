import { fetchMarketTrends } from "@/api/fetchMarketTrends";
import React, { useEffect, useState } from "react";
import TrendCard from "./TrendCard";

function TrendCardList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getStockNews = async () => {
      try {
        const response = await fetchMarketTrends(); 
        setData(response.data.trends);
        setLoading(false);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    getStockNews();
  }, []); 
  if (loading)
    return (
      <div className="flex h-screen w-full justify-center items-center font-medium">
        Loading......
      </div>
    );
  return (
    <section className="flex flex-wrap justify-center p-4 md:p-6 gap-4 md:gap-6">
      {data.map((val) => (
        <TrendCard key={val.post_time_utc} {...val} />
      ))}
    </section>
  );
}

export default TrendCardList;
