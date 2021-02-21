// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const Tooltip = styled.div`
  border-radius: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  transition: 100ms;
  padding: 1rem;
  color: white;

  top: calc(100% + 1rem);
  position: absolute;
  z-index: 999;

  &::after {
    content: '';
    border-width: 0.5rem;
    border-style: solid;
    bottom: 100%;

    position: absolute;
    left: 1rem;

    border-color: transparent transparent var(--color-text) transparent;
  }
`;
