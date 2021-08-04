import { createContext, useState } from "react";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  const [graduationList, setGraduationList] = useState([]);

  return (
    <GraduationContext.Provider value={{ graduationList, setGraduationList }}>
      {children}
    </GraduationContext.Provider>
  );
};
