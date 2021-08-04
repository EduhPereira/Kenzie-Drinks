import { useContext } from "react";
import { ConfraternizationContext } from "../../providers/confraternization/confraternization";
import {
  Title,
  AlternativeContainer,
  Container,
  Card,
  Content,
} from "./styles";
import { toast } from "react-toastify";
export const Confraternization = () => {
  const { confraternizationList, setConfraternizationList } = useContext(
    ConfraternizationContext
  );
  return (
    <Container>
      <Title>Confraternization</Title>
      {confraternizationList.length > 0 ? (
        confraternizationList.map((item) => {
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
                    toast.warning("Successfully Removed");
                  }}
                >
                  Remove
                </button>
              </Content>
            </Card>
          );
        })
      ) : (
        <AlternativeContainer>
          Looks like you haven't added any items to this event yet.
        </AlternativeContainer>
      )}
    </Container>
  );
};
