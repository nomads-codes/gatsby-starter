// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// H1
// ─────────────────────────────────────────────────────────────────────────────

export const H1 = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size['4xl']};
`;

// ─────────────────────────────────────────────────────────────────────────────
// H2
// ─────────────────────────────────────────────────────────────────────────────

export const H2 = styled.h2`
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.size['3xl']};
`;

// ─────────────────────────────────────────────────────────────────────────────
// H3
// ─────────────────────────────────────────────────────────────────────────────

export const H3 = styled.h3`
  font-weight: ${({ theme }) => theme.font.weight.thin};
  font-size: ${({ theme }) => theme.font.size['2xl']};
`;