import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: #0f0f0f;
  color: #eeeeee;
  padding: 18px;
  margin: 18px 0;
  border-radius: 3px;
  box-shadow: 14px 13px 14px 0px rgba(39, 39, 39, 0.75);
  -webkit-box-shadow: 14px 13px 14px 0px rgba(39, 39, 39, 0.75);
  -moz-box-shadow: 14px 13px 14px 0px rgba(39, 39, 39, 0.75);
  img {
    width: 150;
    height: 250px;
    background-color: #cfcfcf;
    border-radius: 5px;
  }

  @media (min-width: 1024px) {
    width: 500px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  h2 {
    margin: 30px 0 10px 0;
    color: #61bd00;
  }
  h3 {
    margin: 20px 0 5px;
  }
  p {
    margin: 0;
    text-align: justify;
  }
`;

export const Button = styled.button`
  background-color: #61bd00;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 8px;
  width: 150px;
  margin: 12px auto;
  text-transform: capitalize;
  color: #f7f7f7;
  font-weight: 700;
  transition: all 0.3s linear;
  boxbox-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
  -webkit-box-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
  -moz-box-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
  :hover {
    background-color: #70d602;
    transform: scale(1.05);
  }
`;

export const GraduationButton = styled(Button)`
  background-color: #61bd;
  boxbox-shadow: 10px 11px 0px 0px #390a68dd;
  -webkit-box-shadow: 10px 11px 0px 0px #390a68dd;
  -moz-box-shadow: 10px 11px 0px 0px #390a68dd;
  :hover {
    background-color: #831aecdd;
  }
`;
export const ConfraternizationButton = styled(Button)`
  background-color: #26b5ee;
  boxbox-shadow: 10px 11px 0px 0px #006891;
  -webkit-box-shadow: 10px 11px 0px 0px #006891;
  -moz-box-shadow: 10px 11px 0px 0px #006891;
  :hover {
    background-color: #37c0f7;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
