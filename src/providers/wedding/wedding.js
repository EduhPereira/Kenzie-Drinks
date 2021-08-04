import { createContext, useState } from "react";

export const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  return (
    <WeddingContext.Provider value={{ weddingList, setWeddingList }}>
      {children}
    </WeddingContext.Provider>
  );
};
