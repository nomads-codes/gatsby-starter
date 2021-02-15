// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────────────

const ButtonPrimary = css`
  background-color: rgba(var(--color-bg), 0.05);
  box-shadow: var(--shadow-active);
  color: var(--color-text);

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    box-shadow: inset 0 0 0 2px var(--color-text);
    color: var(--color-text);
  }
`;

const ButtonSecondary = css`
  ${ButtonPrimary}// TODO:
`;

const ButtonTertiary = css`
  ${ButtonPrimary}// TODO:
`;

const ButtonInverse = css`
  ${ButtonPrimary}// TODO:
`;

const ButtonEllipsis = css`
  text-overflow: ellipsis;
  /* max-width: ${ellipsis}; */
  white-space: nowrap;
  overflow: hidden;
`;

const ButtonGrouped = css`
  &:not(:last-of-type) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    margin-right: 2px;
  }

  & + & {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const Button = styled.button`
  --shadow-active: inset 0 0 0 2px rgba(var(--color-text), 0.25);
  --shadow: inset 0 0 0 2px rgba(var(--color-text), 0.1);

  background-color: transparent;
  -webkit-appearance: none;
  outline: none;
  border: none;

  border-radius: 0.5rem;
  line-height: 1em;
  padding: 2rem;

  transition: box-shadow 250ms;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    transform: translateY(-1px);
    opacity: 1; /* fix non-hover opacity changes */
    color: var(--color-text);
  }

  &:not(:disabled):active {
    transform: translateY(1px);
    opacity: 1; /* fix non-hover opacity changes */
  }

  ${({ look }) => look === 'secondary' && ButtonSecondary};
  ${({ look }) => look === 'tertiary' && ButtonTertiary};
  ${({ look }) => look === 'inverse' && ButtonInverse};
  ${({ look }) => look === 'primary' && ButtonPrimary};

  ${({ ellipsis }) => ellipsis && ButtonEllipsis};
  ${({ grouped }) => grouped && ButtonGrouped};
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

Button.propTypes = {
  look: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'inverse']),
  ellipsis: PropTypes.string,
  grouped: PropTypes.bool,
};

Button.defaultProps = {
  look: undefined,
  ellipsis: '10px',
  grouped: undefined,
};
