// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const Error = styled.div`
  background-color: var(--color-bg);
  border-radius: 1rem;
  transition: 100ms;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1rem;
  color: white;

  top: calc(100% + 1rem);
  position: absolute;
  z-index: 999;

  &::after {
    content: '';
    border-width: 0.5rem;
    border-style: solid;
    position: absolute;
    bottom: 100%;
    left: 1rem;

    border-color: transparent transparent var(--color-danger) transparent;
  }
`;
