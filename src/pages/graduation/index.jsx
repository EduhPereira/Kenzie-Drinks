import { useContext } from "react";
import { GraduationContext } from "../../providers/graduation/graduation";
import { Title, Container, Card, Content } from "./styles";
import { toast } from "react-toastify";
export const Graduation = () => {
  const { graduationList, setGraduationList } = useContext(GraduationContext);
  return (
    <Container>
      <Title>Graduation</Title>
      {graduationList.map((item) => {
        return (
          <Card>
            <img src={item.image_url} alt="" />
            <Content>
              <h2>{item.name}</h2>
              <button
                onClick={() => {
                  const newList = graduationList.filter(
                    (drink) => drink.id !== item.id
                  );
                  setGraduationList(newList);
                  toast.success("Successfully Removed");
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
