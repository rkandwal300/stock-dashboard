import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const TrendCard = ({
  symbol,
  name,
  price,
  change,
  change_percent,
  previous_close,
  last_update_utc,
  exchange,
  currency,
}) => {
  const isPositive = change >= 0; 
  return (
    <Card className={"p-6 w-full max-w-md border"}>
      <CardHeader className="flex justify-between items-start ">
        <div>
          <CardTitle className="text-xl font-bold">{name}</CardTitle>

          <p className="text-sm text-muted-foreground">
            {symbol} · {exchange}
          </p>
        </div>
        <div
          className={`text-right ${
            isPositive ? "text-green-600" : "text-destructive"
          }`}
        >
          <p className="text-2xl font-semibold">
            {price.toFixed(2)} {currency}
          </p>
          <p className="text-sm">
            {isPositive ? "+" : ""}
            {change.toFixed(2)} ({change_percent.toFixed(2)}%)
          </p>
        </div>
      </CardHeader>
      <CardFooter className="mt-4 text-sm text-muted-foreground">
        Previous Close: {previous_close.toFixed(2)} {currency}
        <br />
        Last Updated: {new Date(last_update_utc).toLocaleString()}
      </CardFooter>
    </Card>
  );
};

export default TrendCard;
