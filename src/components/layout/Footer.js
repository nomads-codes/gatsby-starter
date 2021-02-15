// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { H3 } from '~components';
// import { commonsCSS } from '~theme';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const Footer = styled.footer`
  /* ${({ theme }) => theme.layout.footer === 'narrow' && commonsCSS.narrow}; TODO: */
  /* ${({ theme }) => theme.layout.footer === 'wide' && commonsCSS.wide}; TODO: */

  padding-right: 1rem;
  padding-left: 1rem;
  max-width: 100%;

  ${H3} {
    border-bottom: 1px solid var(--color-text);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;
