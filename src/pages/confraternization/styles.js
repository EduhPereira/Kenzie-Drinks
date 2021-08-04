import styled from "styled-components";
export const Title = styled.h1`
  font-size: 22px;
  width: 280px;
  margin: 100px auto;
  padding: 10px;
  text-align: center;
  border: 2px solid #70d602;
  color: #70d602;
  boxbox-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
  -webkit-box-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
  -moz-box-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
  @media (min-width: 768px) {
    margin: 0px auto;
  }
`;

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: #eeeeee;
  color: #141414;
  padding: 18px;
  margin: 18px 0;
  border-radius: 3px;
  box-shadow: 14px 13px 14px 0px rgba(39, 39, 39, 0.75);
  -webkit-box-shadow: 14px 13px 14px 0px rgba(39, 39, 39, 0.75);
  -moz-box-shadow: 14px 13px 14px 0px rgba(39, 39, 39, 0.75);
  img {
    width: 30%;
    height: 150px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  h2 {
    margin: 0 0 10px 0;
    text-align: center;
  }
  button {
    background-color: #bb0000;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 8px;
    width: 150px;
    margin: 8px auto;
    text-transform: capitalize;
    color: #f7f7f7;
    font-weight: 700;
    transition: all 0.3s linear;
    boxbox-shadow: 10px 11px 0px 0px #7c0000;
    -webkit-box-shadow: 10px 11px 0px 0px #7c0000;
    -moz-box-shadow: 10px 11px 0px 0px #7c0000;
    :hover {
      background-color: #d30000;
    }
  }
`;
