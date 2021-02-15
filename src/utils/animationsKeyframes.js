// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { keyframes, css } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const animationsKeyframes = ({ from = {}, to = {}, properties = '' } = {}) => {
  const setup = keyframes`
    from {${from}}
    to   {${to}}
  `;

  return css`
    ${setup} ${properties}
  `;
};

export default animationsKeyframes;
