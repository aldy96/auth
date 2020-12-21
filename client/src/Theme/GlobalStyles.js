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
    color: ${({ theme }) => theme.mainTextColor};
    // User do not see transition when open app/site
    transition: ${({ isMounted, theme }) => isMounted && theme.themeTransition};
  }
  h1{
    text-align: center;
    margin: 48px;
  }
  h2,h3{
    text-align: center;
    margin: 32px;
  }
  a{
    display: block;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.mainTextColor};
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
