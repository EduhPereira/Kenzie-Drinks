import { Menu } from "./styles";
import { useHistory } from "react-router";
export const Header = () => {
  const history = useHistory();
  return (
    <Menu>
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
