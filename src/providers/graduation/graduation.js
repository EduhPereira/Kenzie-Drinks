import { createContext, useState } from "react";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [graduationList, setGraduationList] = useState([]);

  const addToGraduationList = (drink) => {
    setGraduationList([...graduationList, drink]);
  };

  const removeFromGraduationList = (drink) => {
    const newList = graduationList.filter((product) => product.id !== drink.id);
    setGraduationList(newList);
  };

  return (
    <GraduationContext.Provider
      value={{ addToGraduationList, removeFromGraduationList }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
