import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: #f0f0f0;
  color: #000;
  margin: 10px;
  padding: 18px;
  img {
    width: 30%;
    height: 150px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  p {
    text-align: justify;
  }
`;
