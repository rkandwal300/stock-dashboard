import { Card } from "@/components/ui/card";
import React from "react";

function Details({ details }) {
  const detailList = {
    name: "Name",
    country: "Country",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number) => (number / 100).toFixed(2);

  return (
    <Card className='p-4'>
      <ul className={"h-full w-full flex flex-col jb divide-y-1"}>
        {Object.keys(detailList).map((item) => (
          <li key={item} className="flex justify-between items-center py-2 gap-2">
            <span className="font-medium">{detailList[item]}</span>
            <span>
              {item === "marketCapitalization"
                ? `${convertMillionToBillion(detailList[item])}B`
                : details[item]}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Details;
