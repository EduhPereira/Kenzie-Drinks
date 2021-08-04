import { Card, Content } from "./styles";
import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/confraternization/confraternization";
import { GraduationContext } from "../../providers/graduation/graduation";
import { WeddingContext } from "../../providers/wedding/wedding";
import { toast } from "react-toastify";
export const DrinkCard = ({ drink }) => {
  const { confraternizationList, setConfraternizationList } = useContext(
    ConfraternizationContext
  );
  const { graduationList, setGraduationList } = useContext(GraduationContext);
  const { weddingList, setWeddingList } = useContext(WeddingContext);

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
        <button
          onClick={() => {
            const newDrink = {
              id: drink.id,
              image_url: drink.image_url,
              name: drink.name,
            };
            setWeddingList([...weddingList, newDrink]);
            toast.success("Successfully Added");
          }}
        >
          wedding
        </button>
        <button
          onClick={() => {
            const newDrink = {
              id: drink.id,
              image_url: drink.image_url,
              name: drink.name,
            };
            setGraduationList([...graduationList, newDrink]);
            toast.success("Successfully Added");
          }}
        >
          graduation
        </button>
        <button
          onClick={() => {
            const newDrink = {
              id: drink.id,
              image_url: drink.image_url,
              name: drink.name,
            };
            setConfraternizationList([...confraternizationList, newDrink]);
            toast.success("Successfully Added");
          }}
        >
          confraternization
        </button>
      </Content>
    </Card>
  );
};
