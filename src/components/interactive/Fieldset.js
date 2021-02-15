// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Tooltip } from '~components/text/Tooltip';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────────────────s───────────────────

export const Fieldset = styled.fieldset`
  position: relative;
  border: none;

  & > ${Tooltip} {
    transform: translateY(1rem);
    visibility: hidden;
    opacity: 0;
  }

  &:hover > ${Tooltip}, &:focus > ${Tooltip}, &:focus-within > ${Tooltip} {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }
`;
