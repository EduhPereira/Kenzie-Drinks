import { useContext } from "react";
import { DrinksContext } from "../../providers/drinks/drinks";
import { DrinkCard } from "../../components/DrinkCard";
import {
  DrinksList,
  Title,
  Buttons,
  NextButton,
  PreviousButton,
} from "./styles";
export const Drinks = () => {
  const { drinks, page, nextPage, previousPage } = useContext(DrinksContext);
  return (
    <DrinksList id="DrinkList">
      <Title>Drinks</Title>
      {drinks.map((drink) => {
        return <DrinkCard key={drink.id} drink={drink} />;
      })}
      <Buttons>
        <a href="#DrinkList">
          <PreviousButton onClick={previousPage}>Previous</PreviousButton>
        </a>
        <span>{page}</span>
        <a href="#DrinkList">
          <NextButton onClick={nextPage}>Next</NextButton>
        </a>
      </Buttons>
    </DrinksList>
  );
};
