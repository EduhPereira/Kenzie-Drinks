import { useContext } from "react";
import { WeddingContext } from "../../providers/wedding/wedding";
import {
  Title,
  AlternativeContainer,
  Container,
  Card,
  Content,
} from "./styles";
import { toast } from "react-toastify";
export const Wedding = () => {
  const { weddingList, setWeddingList } = useContext(WeddingContext);
  return (
    <Container>
      <Title>Wedding</Title>
      {weddingList.length > 0 ? (
        weddingList.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.image_url} alt="" />
              <Content>
                <h2>{item.name}</h2>
                <button
                  onClick={() => {
                    const newList = weddingList.filter(
                      (drink) => drink.id !== item.id
                    );
                    setWeddingList(newList);
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
