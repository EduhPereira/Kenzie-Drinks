import styled from "styled-components";

export const Icon = styled.div`
  display: none;
  font-size: 32px;
  color: #70d602;
  @media (min-width: 768px) {
    display: unset;
  }
`;

export const Menu = styled.header`
  display: flex;
  padding: 10px;
  gap: 10px;
  width: 100%;
  font-size: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: black;
  color: white;

  @media (min-width: 768px) {
    width: unset;
    font-size: 14px;
    flex-direction: column;
    height: 100vh;
  }

  span {
    font-weight: 700;
    margin: 20px 0;
    cursor: pointer;
    transition: all 0.3s linear;

    :hover {
      color: #70d602;
    }
  }
`;
