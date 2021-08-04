import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/confraternization/confraternization";
import { Title, Container, Card, Content } from "./styles";
export const Confraternization = () => {
  const { confraternizationList, setConfraternizationList } = useContext(
    ConfraternizationContext
  );
  return (
    <Container>
      <Title>Confraternization</Title>
      {confraternizationList.map((item) => {
        return (
          <Card>
            <img src={item.image_url} alt="" />
            <Content>
              <h2>{item.name}</h2>
              <button
                onClick={() => {
                  const newList = confraternizationList.filter(
                    (drink) => drink.id !== item.id
                  );
                  setConfraternizationList(newList);
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
