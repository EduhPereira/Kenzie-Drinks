import { createContext, useState } from "react";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
  const [confraternizationList, setConfraternizationList] = useState([]);

  return (
    <ConfraternizationContext.Provider
      value={{ confraternizationList, setConfraternizationList }}
    >
      {children}
    </ConfraternizationContext.Provider>
  );
};
