// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Section, H1, Link } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const Header = styled.header`
  /* ${({ theme }) => theme.layout.header === 'narrow' && commonsCSS.narrow}; TODO: */
  /* ${({ theme }) => theme.layout.header === 'wide' && commonsCSS.wide}; TODO: */
  max-width: 100%;

  ${Section} {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;
