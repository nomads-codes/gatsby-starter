// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

import { SEOContainer, HeaderContainer, FooterContainer } from '~containers';
import { GlobalStyle, theme, themeDataSet } from '~theme';
import { View, Main } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const RootContainer = ({ children, layout, meta }) => {
  theme['layout'] = themeDataSet(layout);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {meta && <SEOContainer meta={meta} />}

      <View>
        <HeaderContainer />
        <Main>{children}</Main>
        <FooterContainer />
      </View>
    </ThemeProvider>
  );
};

export default RootContainer;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

RootContainer.displayName = 'RootContainer';

RootContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
  layout: PropTypes.oneOfType([PropTypes.object]),
  meta: PropTypes.oneOfType([PropTypes.object]),
};
