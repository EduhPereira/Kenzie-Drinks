import styled from "styled-components";
export const Title = styled.h1`
  font-size: 28px;
  width: 200px;
  margin: 100px auto;
  padding: 10px;
  text-align: center;
  border: 2px solid #70d602;
  color: #70d602;
  boxbox-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
  -webkit-box-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
  -moz-box-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
  @media (min-width: 768px) {
    margin: 20px auto;
  }
`;

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
