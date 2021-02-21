// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import PropTypes from 'prop-types';
import React from 'react';

import { SEOContainer, HeaderContainer, FooterContainer } from '~containers';
import { ThemeProvider } from '~theme';
import { View } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const RootContainer = ({ children, layout, meta }) => (
  <ThemeProvider>
    <SEOContainer meta={meta} />
    <View>
      <HeaderContainer />
      {children}
      <FooterContainer />
    </View>
  </ThemeProvider>
);

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
