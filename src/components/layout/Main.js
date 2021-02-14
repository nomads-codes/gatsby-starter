// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import { commonsCSS } from '~theme';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const Main = styled.main`
  ${({ theme }) => theme.layout.main === 'narrow' && commonsCSS.narrow};
  ${({ theme }) => theme.layout.main === 'wide' && commonsCSS.wide};

  padding-right: 1rem;
  padding-left: 1rem;
  max-width: 100%;
`;
