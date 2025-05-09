import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

function Overview({ symbol, price, change, changePercentage }) {
  return (
    <Card className="p-4 py-8">
      <span className="left-4 top-4 text-primary/70 font-medium text-lg xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>
      <div className="w-full h-full flex items-center justify-around">
        <span className="text-2xl xl:text-4xl 2xl:text-5xl items-center">
          ${price}
        </span>
        <span
          className={cn(
            "text-lg xl:text-xl 2xl:text-2xl",
            change >= 0 ? "text-lime-500" : "text-destructive"
          )}
        >
          {change}
          <span>({changePercentage || 0}%)</span>
        </span>
      </div>
    </Card>
  );
}

export default Overview;
