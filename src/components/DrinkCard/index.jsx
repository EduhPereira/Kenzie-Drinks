import { Card, Content } from "./styles";
export const DrinkCard = ({ drink }) => {
  return (
    <Card>
      <img src={drink.image_url} alt="" />
      <Content>
        <h3>{drink.name}</h3>
        <span>{drink.first_brewed}</span>
        <p>{drink.description}</p>
        <span>{drink.volume.value}</span>
      </Content>
    </Card>
  );
};
