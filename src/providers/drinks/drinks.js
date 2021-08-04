import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DrinksContext = createContext([]);

export const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page === 13) {
      setPage(13);
    } else {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page === 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}`)
      .then((response) => setDrinks(response.data))
      .catch((e) => console.log(e.message));
  }, [page]);

  return (
    <DrinksContext.Provider value={{ drinks, page, nextPage, previousPage }}>
      {children}
    </DrinksContext.Provider>
  );
};
