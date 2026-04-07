import styled from "styled-components";
import GlobalStyle from "../../styles/global";

export const LiProduct = styled.li`
  background-color: #fff;
  width: 22rem;
  max-height: 17rem;
  list-style: none;
  border: 2px solid var(--grey-20);

  img {
    width: 100%;
    height: 50%;
    background-color: var(--grey-0);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  h2 {
    font-size: 18px;
    font-weight: 800;
  }

  span {
    font-size: 12px;
    color: #828282;
  }

  p {
    font-size: 14px;
    color: var(--color-primary);
  }
`;
