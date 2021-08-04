import { useContext } from "react";
import { DrinksContext } from "../../providers/drinks/drinks";
import { DrinkCard } from "../../components/DrinkCard";
export const Drinks = () => {
  const { drinks, nextPage, previousPage } = useContext(DrinksContext);
  return (
    <>
      <h1>Drinks</h1>
      {drinks.map((drink) => {
        return <DrinkCard drink={drink} />;
      })}
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </>
  );
};
