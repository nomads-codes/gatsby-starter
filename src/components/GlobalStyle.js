import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 100%;
  }
`;
