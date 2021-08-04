import { Menu, Icon } from "./styles";
import { useHistory } from "react-router";
import { BiDrink } from "react-icons/bi";
export const Header = () => {
  const history = useHistory();
  return (
    <Menu>
      <Icon>
        <BiDrink />
      </Icon>
      <span
        onClick={() => {
          history.push("/");
        }}
      >
        Drinks
      </span>
      <span
        onClick={() => {
          history.push("/wedding");
        }}
      >
        Wedding
      </span>
      <span
        onClick={() => {
          history.push("/graduation");
        }}
      >
        Graduation
      </span>
      <span
        onClick={() => {
          history.push("/confraternization");
        }}
      >
        Confraternization
      </span>
    </Menu>
  );
};
