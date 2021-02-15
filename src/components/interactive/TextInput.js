// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { animationsKeyframes } from '~utils';
import { Tooltip, Label, Error } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const TextInput = forwardRef(({ onChange, ...rest }, ref) => {
  const handleChange = (event) => {
    if (event.target.type === 'url') {
      // intentional check for state of one slash deleted
      if (event.target.value === 'https:/') {
        event.target.value = ''; // eslint-disable-line no-param-reassign
      }

      if (!event.target.value.includes('https://')) {
        event.target.value = `https://${event.target.value}`; // eslint-disable-line no-param-reassign
      }
    }

    if (onChange) {
      onChange(event);
    }
  };

  return <Input ref={ref} onChange={handleChange} {...rest} />;
});

export default TextInput;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

export const Input = styled.input`
  --shadow: inset 0 0 0 2px var(--color-text);

  appearance: none;
  outline: none;
  border: none;
  resize: none;

  background-color: rgba(var(--color-text), 0.05);
  border-radius: 0.5rem;
  line-height: 1.5em;
  display: block;
  padding: 2rem;
  width: 100%;

  & ~ ${Tooltip} {
    transform: translateY(1rem);
    visibility: hidden;
    opacity: 0;
  }

  &::placeholder {
    color: inherit;
    opacity: 0.5;
  }

  &:not(:read-only):not(:disabled) {
    :hover {
      box-shadow: var(--shadow);
      ::placeholder {
        opacity: 0.75;
      }
    }
    &:focus {
      box-shadow: inset 0 0 0 2px var(--color-primary);
      ::placeholder {
        opacity: 0.75;
      }
    }
    &:hover,
    &:focus {
      & ~ ${Tooltip} {
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &:not(:placeholder-shown) {
    padding: 3rem 1rem 1rem;
  }

  & ~ ${Label} {
    animation: ${animationsKeyframes({
      from: {
        transform: 'translateY(0.5rem)',
        opacity: '0',
      },
      to: {
        transform: 'translateY(0)',
        opacity: '1',
      },
      properties: '250ms both',
    })};
  }

  &:placeholder-shown ~ ${Label} {
    display: none;
  }

  & ~ ${Error} {
    transform: translateY(1rem);
    visibility: hidden;
    opacity: 0;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  onChange: () => {},
};
