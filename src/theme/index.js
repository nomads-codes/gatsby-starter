import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { isNotDefined } from '~utils';

export const themeDataSet = (l) => ({
  footer: isNotDefined(l, 'footer') ? l.footer : 'narrow',
  header: isNotDefined(l, 'header') ? l.header : 'narrow',
  main: isNotDefined(l, 'main') ? l.main : 'narrow',
});

export const commonsCSS = {
  narrow: css`
    width: var(--main-max-width);
    margin: 0 auto;
  `,
  wide: css`
    width: 100%;
  `,
};

export const theme = {
  font: {
    sans: 'Open Sans, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
};

const root = css`
  :root {
    --color-bg: #ffffff;
    --color-text: #1f262e;

    --main-max-width: 1200px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${root}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 10px;
  }

  body {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-family: ${({ theme }) => theme.font.sans};
    background-color: var(--color-bg);
    color: var(--color-text);
    letter-spacing: 0;
  }

  a {
    color: var(--color-text);
  }

  h1, h2, h3 {
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
