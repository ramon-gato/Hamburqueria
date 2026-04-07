import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --color-primary: #27ae60;
  --color-primary-50: #93d7af;
  --color-secundary: #eb5757;
  --grey-100: #333333;
  --grey-50: #828282;
  --grey-20: #e0e0e0;
  --grey-0: #f5f5f5;
  --negative: #e60000;
  --warning: #ffcd07;
  --sucess: #168821;
  --information: #155bcb;
}
@media (min-width: 700px) {
    
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
  }
  body{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: #fff;
    color: var(--grey-100);
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3 {
    font-weight: 500;
    color: #000;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
