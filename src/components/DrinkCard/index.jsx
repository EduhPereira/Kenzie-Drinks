import { Card, Content } from "./styles";
export const DrinkCard = ({ drink }) => {
  return (
    <Card>
      <img src={drink.image_url} alt="" />
      <Content>
        <h2>{drink.name}</h2>
        <h3>First Brewed</h3>
        <span>{drink.first_brewed}</span>
        <h3>Description</h3>
        <p>{drink.description}</p>
        <h3>Volume</h3>
        <span>
          {drink.volume.value} {drink.volume.unit}
        </span>
        <h3>Add to</h3>
        <button>wedding</button>
        <button>graduation</button>
        <button>confraternization</button>
      </Content>
    </Card>
  );
};
