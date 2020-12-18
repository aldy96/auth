import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.mainText};
  }
  h1,h2,h3{
    text-align: center;
    margin: 16px 32px;
  }
`;

export default GlobalStyle;
