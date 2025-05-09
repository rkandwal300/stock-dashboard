import React, { createContext, useContext, useState } from "react";

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stockSymbol, setStockSymbol] = useState('AAPL');

  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => useContext(StockContext);
