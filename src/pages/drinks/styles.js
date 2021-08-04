import styled from "styled-components";
export const DrinksList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  margin: 20px;
  gap: 16px;
`;

export const NextButton = styled.button`
  background-color: #61bd00;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 8px;
  width: 150px;
  margin: 16px auto;
  text-transform: capitalize;
  color: #f7f7f7;
  font-weight: 700;
  transition: all 0.3s linear;
  :hover {
    background-color: #70d602;
  }
`;

export const PreviousButton = styled(NextButton)`
  background-color: #f7f7f7;
  color: #61bd00;
  border: 1px solid #4e9601;
  :hover {
    background-color: #fff;
  }
`;
