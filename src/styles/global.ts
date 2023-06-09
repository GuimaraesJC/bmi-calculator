import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }

  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a, button {
    cursor: pointer;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    height: 100vh;
    width: 90rem;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
