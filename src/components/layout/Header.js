// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Section, H1, Link } from '~components';
import { commonsCSS } from '~theme';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const Header = styled.header`
  ${({ theme }) => theme.layout.header === 'narrow' && commonsCSS.narrow};
  ${({ theme }) => theme.layout.header === 'wide' && commonsCSS.wide};
  max-width: 100%;

  ${Section} {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  ${H1},
  a {
    text-transform: uppercase;
  }
`;
