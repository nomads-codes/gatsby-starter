// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import PropTypes from 'prop-types';
import React from 'react';

import { SEOContainer, HeaderContainer, FooterContainer } from '~containers';
import { View, Main } from '~components';
import { ThemeProvider } from '~theme';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const RootContainer = ({ children, layout, meta }) => {
  return (
    <ThemeProvider>
      <>
        <SEOContainer meta={meta} />
        <View>
          <HeaderContainer />
          <Main>{children}</Main>
          <FooterContainer />
        </View>
      </>
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
