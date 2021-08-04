import { useContext } from "react";
import { DrinksContext } from "../../providers/drinks/drinks";
import { DrinkCard } from "../../components/DrinkCard";
import { DrinksList, Buttons, NextButton, PreviousButton } from "./styles";
export const Drinks = () => {
  const { drinks, page, nextPage, previousPage } = useContext(DrinksContext);
  return (
    <DrinksList>
      {drinks.map((drink) => {
        return <DrinkCard drink={drink} />;
      })}
      <Buttons>
        <PreviousButton onClick={previousPage}>Previous</PreviousButton>
        <span>{page}</span>
        <NextButton onClick={nextPage}>Next</NextButton>
      </Buttons>
    </DrinksList>
  );
};
