// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import PropTypes from 'prop-types';
import React from 'react';

import { parseLinks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const HeroBlock = ({ title }) => {
  return (
    <header>
      <p>{parseLinks(title, { type: 'primary' })}</p>
    </header>
  );
};

export default HeroBlock;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

HeroBlock.displayName = 'HeroBlock';

HeroBlock.propTypes = {
  title: PropTypes.string.isRequired,
};

HeroBlock.defaultProps = {
  title: null,
};
