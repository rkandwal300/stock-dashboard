export const fetchCompanyOverview = async (stockSymbol) => {
  const baseUrl = import.meta.env.VITE_RAPID_API_URL;
  const url = new URL(`${baseUrl}/stock-overview`);

  url.searchParams.set("symbol", stockSymbol); 
  url.searchParams.set("language", "en");
  console.log({ url: url.toString() });
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
