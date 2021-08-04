import { useContext } from "react";
import { GraduationContext } from "../../providers/graduation/graduation";
import {
  Title,
  AlternativeContainer,
  Container,
  Card,
  Content,
} from "./styles";
import { toast } from "react-toastify";
export const Graduation = () => {
  const { graduationList, setGraduationList } = useContext(GraduationContext);
  return (
    <Container>
      <Title>Graduation</Title>
      {graduationList.length > 0 ? (
        graduationList.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.image_url} alt="" />
              <Content>
                <h2>{item.name}</h2>
                <button
                  onClick={() => {
                    const newList = graduationList.filter(
                      (drink) => drink.id !== item.id
                    );
                    setGraduationList(newList);
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
