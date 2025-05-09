import React from "react";

export const fetchHistoricalData = async (
  stockSymbol,
  resolution,
  from,
  to
) => {
  const baseUrl = import.meta.env.VITE_FINN_API_URL.replace(/\/$/, ""); // Remove trailing slash
  const url = new URL(`${baseUrl}/stock/candle`);

  url.searchParams.set("symbol", stockSymbol);
  url.searchParams.set("resolution", resolution);
  url.searchParams.set("from", from);
  url.searchParams.set("to", to);
  url.searchParams.set("token", import.meta.env.VITE_FINN_API_KEY);

  const response = await fetch(url.toString(), {
    method: "GET",
  });
  if (!response.ok)
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  return response.json();
};
