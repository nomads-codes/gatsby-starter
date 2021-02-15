// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const Radio = styled.input.attrs({ type: 'radio' })`
  --color-primary: ${({ theme }) => theme.color.primary};
  --color-text: ${({ theme }) => theme.color.text};

  appearance: none;
  outline: none;
  border: none;

  margin: 0 1rem 0 0;
  cursor: pointer;
  font-size: 2rem;
  height: 1em;
  width: 1em;

  box-shadow: inset 0 0 0 2px rgba(var(--color-text), 0.1);
  background-color: rgba(var(--color-text), 0.05);
  transition: box-shadow 250ms;
  border-radius: 50%;

  & ~ span {
    color: rgba(var(--color-text), 0.5);
    text-transform: initial;
    font-size: 2rem;
    cursor: pointer;
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      box-shadow: inset 0 0 0 2px var(--color-primary);
      & ~ span {
        color: var(--color-text);
      }
    }

    &:checked {
      box-shadow: inset 0 0 0 0.3em var(--color-primary);
      & ~ span {
        color: var(--color-text);
      }
      &:focus ~ span {
        color: var(--color-primary);
      }
    }
  }
`;
