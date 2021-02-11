import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  /* #___gatsby, #gatsby-focus-wrapper, */
  html, body {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    min-height: 100%;
    color: #353535;
  }

  ol, ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    font-size: 1.8rem;
    color: #353535;

    &:hover,
    &.is-active {
      text-decoration: underline;
    }
  }

  header h1 {
    text-transform: uppercase;
  }
`;
