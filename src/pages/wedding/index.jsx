import { useContext } from "react";
import { WeddingContext } from "../../providers/wedding/wedding";
import { Title, Container, Card, Content } from "./styles";
export const Wedding = () => {
  const { weddingList, setWeddingList } = useContext(WeddingContext);
  return (
    <Container>
      <Title>Wedding</Title>
      {weddingList.map((item) => {
        return (
          <Card>
            <img src={item.image_url} alt="" />
            <Content>
              <h2>{item.name}</h2>
              <button
                onClick={() => {
                  const newList = weddingList.filter(
                    (drink) => drink.id !== item.id
                  );
                  setWeddingList(newList);
                }}
              >
                Remove
              </button>
            </Content>
          </Card>
        );
      })}
    </Container>
  );
};
