import styled from "styled-components";

import GlobalStyle from "./styles/global";

export const Header = styled.header`
  display: flex;
  background-color: var(--grey-20);
  height: 100px;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }

  img {
    margin: 7px 0;
  }

  div {
    display: flex;
  }

  input {
    background-color: #fff;
    width: 250px;
    height: 40px;
    border: 2px solid var(--grey-100);
    padding: 0 10px 0 15px;
    border-radius: 8px;
  }
`;

export const Button = styled.button`
  background-color: var(--color-primary);
  font-size: 17px;
  padding: 0 20px;
  height: 40px;
  border-radius: 8px;
`;
