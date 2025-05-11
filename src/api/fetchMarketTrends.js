export const fetchMarketTrends = async () => {
  const baseUrl = import.meta.env.VITE_RAPID_API_URL;
  const url = new URL(`${baseUrl}/market-trends`);

  url.searchParams.set("trend_type", "MARKET_INDEXES");
  url.searchParams.set("country", "us");
  url.searchParams.set("language", "en");

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
      "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
    },
  });
  if (!response.ok)
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  return response.json();
};
