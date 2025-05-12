import { fetchCompanyOverview } from "@/api/fetchCompanyOverview";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useStock } from "@/context/StockContext";
import React, { useEffect, useState } from "react";

function CompanyOverview() {
    const { stockSymbol } = useStock();
      const [data, setData] = useState();
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const getStockNews = async () => {
          try {
            const response = await fetchCompanyOverview(stockSymbol); 
            setData(response.data);
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
 
  const isPositive = data?.change >= 0;

  return (
    <Card className="max-w-5xl m-4 md:m-6 rounded-2xl shadow-lg p-6 space-y-6">
    
      <CardHeader className="flex justify-between items-center">
        <div>
          <CardTitle className="text-2xl font-bold">{data.name}</CardTitle>
          <p className="text-sm text-gray-500">
            {data.symbol} · {data.type.toUpperCase()}
          </p>
        </div>
        <div
          className={`text-right ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          <p className="text-3xl font-semibold">${data.price.toFixed(2)}</p>
          <p className="text-sm">
            {isPositive ? "+" : ""}
            {data.change.toFixed(2)} ({data.change_percent.toFixed(2)}%)
          </p>
          <p className="text-xs text-gray-400">
            Last updated: {new Date(data.last_update_utc).toLocaleString()}
          </p>
        </div>
      </CardHeader>

      {/* Quick Stats */}
      <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
        <div>
          <span className="font-semibold">Open:</span> ${data.open}
        </div>
        <div>
          <span className="font-semibold">High:</span> ${data.high}
        </div>
        <div>
          <span className="font-semibold">Low:</span> ${data.low}
        </div>
        <div>
          <span className="font-semibold">Prev Close:</span> $
          {data.previous_close}
        </div>
        <div>
          <span className="font-semibold">Volume:</span>{" "}
          {data.volume.toLocaleString()}
        </div>
        <div>
          <span className="font-semibold">Avg Volume:</span>{" "}
          {data.avg_volume?.toLocaleString()}
        </div>
        <div>
          <span className="font-semibold">52W High:</span> ${data.year_high}
        </div>
        <div>
          <span className="font-semibold">52W Low:</span> ${data.year_low}
        </div>
      </CardContent>

      {/* Company Snapshot */}
      <CardFooter className="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <CardDescription className="text-sm text-gray-600">
            {data.about.slice(0, 350)}...{" "}
            <a
              href="https://en.wikipedia.org/wiki/Apple_Inc."
              className="text-blue-600 underline"
            >
              Read more
            </a>
          </CardDescription>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <h3 className="text-lg font-semibold mb-2">Company Info</h3>
          <p>
            <strong>CEO:</strong> {data.company_ceo}
          </p>
          <p>
            <strong>Employees:</strong>{" "}
            {data.company_employees.toLocaleString()}
          </p>
          <p>
            <strong>Sector:</strong> {data.company_sector}
          </p>
          <p>
            <strong>Industry:</strong> {data.company_industry}
          </p>
          <p>
            <strong>Market Cap:</strong> $
            {(data.company_market_cap / 1e12).toFixed(2)}T
          </p>
          <p>
            <strong>PE Ratio:</strong> {data.company_pe_ratio}
          </p>
          <p>
            <strong>Dividend Yield:</strong> {data.company_dividend_yield}%
          </p>
          <a
            href={data.company_website}
            target="_blank"
            className="text-blue-600 underline"
          >
            Visit Website
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CompanyOverview;
