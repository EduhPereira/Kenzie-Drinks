import { createContext, useState } from "react";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const addToWeddingList = (drink) => {
    setWeddingList([...weddingList, drink]);
  };
  const removeFromWeddingList = (drink) => {
    const newList = weddingList.filter((product) => product.id !== drink.id);
    setWeddingList(newList);
  };

  return (
    <WeddingContext.Provider
      value={{ addToWeddingList, removeFromWeddingList }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
