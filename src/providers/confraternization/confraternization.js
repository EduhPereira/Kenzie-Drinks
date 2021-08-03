import { createContext, useState } from "react";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [confraternizationList, setConfraternizationList] = useState([]);

  const addToConfraternizationList = (drink) => {
    setConfraternizationList([...confraternizationList, drink]);
  };

  const removeFromConfraternizationList = (drink) => {
    const newList = confraternizationList.filter(
      (product) => product.id !== drink.id
    );
    setConfraternizationList(newList);
  };

  return (
    <ConfraternizationContext.Provider
      value={{ addToConfraternizationList, removeFromConfraternizationList }}
    >
      {children}
    </ConfraternizationContext.Provider>
  );
};
