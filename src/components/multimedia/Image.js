// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { animationsKeyframes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const Image = ({ pictureProps, onMouseMove, onError, onLoad, ratio, zoom, ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlers = {
    onLoad: (event) => {
      setIsLoaded(true);
      onLoad(event);
    },

    onError: (event) => {
      const { target } = event;
      // use a transparent svg as a default image
      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E";
      setIsLoaded(true);
      onError(event);
    },

    onMouseMove: (event) => {
      if (zoom) {
        const { offsetX, offsetY, target } = event?.nativeEvent;
        const x = (offsetX / target.offsetWidth) * 100;
        const y = (offsetY / target.offsetHeight) * 100;
        target.style.transformOrigin = `${x}% ${y}%`;
      }
      onMouseMove(event);
    },
  };

  return (
    <Picture {...pictureProps} ratio={ratio} isLoaded={isLoaded}>
      <StyledImage {...rest} zoom={zoom} {...handlers} />
    </Picture>
  );
};

export default Image;

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const spinnerAnimation = animationsKeyframes({
  to: { transform: 'rotate(360deg)' },
  properties: '1s infinite',
});

// ─────────────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────────────

const PictureRatio = css`
  &::before {
    padding-bottom: ${({ ratio }) => ratio && `${ratio * 100}%`};
    display: block;
    content: '';
  }
`;

const PictureIsLoaded = css`
  --border-color: ${({ theme }) => theme.color.primary};

  &::after {
    border: 0.125em solid rgba(var(--border-color), 0.1);
    border-top-color: rgba(var(--border-color), 1);
    animation: ${spinnerAnimation};
    border-radius: 50%;
    content: '';
    height: 1em;
    width: 1em;
    z-index: 1;
  }
`;

const zoomImage = css`
  transition: transform 250ms;

  &:hover {
    transform: ${({ zoom }) => zoom && `scale(${zoom})`};
    z-index: var(--z-index-modal);
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const Picture = styled.picture`
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;

  ${({ isLoaded }) => !isLoaded && PictureIsLoaded}
  ${({ ratio }) => ratio && PictureRatio}
`;

const StyledImage = styled.img`
  background-color: hsla(var(--hsl-text), 0.1);
  position: absolute;
  object-fit: cover;
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  user-drag: none;

  ${({ zoom }) => zoom && zoomImage}
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

Picture.defaultProps = {
  overflow: 'hidden',
  as: 'picture',
};

Image.propTypes = {
  pictureProps: PropTypes.instanceOf(PropTypes.object),
  ratio: PropTypes.instanceOf(PropTypes.number),
  src: PropTypes.instanceOf(PropTypes.string).isRequired,
  alt: PropTypes.instanceOf(PropTypes.string).isRequired,
  zoom: PropTypes.instanceOf(PropTypes.number),
  onLoad: PropTypes.instanceOf(PropTypes.func),
  onError: PropTypes.instanceOf(PropTypes.func),
  onMouseMove: PropTypes.instanceOf(PropTypes.func),
};

Image.defaultProps = {
  pictureProps: {},
  ratio: 1,
  zoom: undefined,
  onLoad: () => {},
  onError: () => {},
  onMouseMove: () => {},
};
