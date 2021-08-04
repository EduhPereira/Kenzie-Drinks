import styled from "styled-components";

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
  }
  h3 {
    margin: 10px 0 5px;
  }
  p {
    margin: 0;
    text-align: justify;
  }
  button {
    background-color: #61bd00;
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
    boxbox-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
    -webkit-box-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
    -moz-box-shadow: 10px 11px 0px 0px rgba(7, 64, 2, 0.75);
    :hover {
      background-color: #70d602;
    }
  }
`;
