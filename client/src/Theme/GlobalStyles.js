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
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.mainText};
    // User do not see transition when open app/site
    transition: ${({ isMounted }) =>
      isMounted &&
      `color 250ms ease-in-out, background-color 250ms ease-in-out`};
    min-height: 200vh;
  }
  h1,h2,h3{
    text-align: center;
    margin: 16px 32px;
  }
  a{
    display: block;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.mainText};
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
