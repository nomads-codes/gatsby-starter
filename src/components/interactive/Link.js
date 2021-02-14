// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { isExternalURL } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const Link = ({ href, to, children, ...rest }) => {
  const link = href || to;

  const props = {
    external: {
      rel: 'noopener noreferrer',
      target: '_blank',
      ...rest,
    },
    internal: {
      activeClassName: 'is-active',
      ...rest,
    },
  };

  if (isExternalURL(link)) {
    return (
      <Anchor href={link} {...props.external}>
        {children}
      </Anchor>
    );
  }

  return (
    <Anchor as={GatsbyLink} to={link} {...props.internal}>
      {children}
    </Anchor>
  );
};

export default Link;

// ─────────────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────────────

const AnchorPrimary = css`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  text-decoration: none;

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    text-decoration: underline;
  }
`;

const AnchorSecondary = css`
  ${AnchorPrimary}// TODO:
`;

const AnchorTertiary = css`
  ${AnchorPrimary}// TODO:
`;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const Anchor = styled.a`
  ${({ look }) => look === 'secondary' && AnchorSecondary};
  ${({ look }) => look === 'tertiary' && AnchorTertiary};
  ${({ look }) => look === 'primary' && AnchorTertiary};
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

Link.displayName = 'Link';

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
};

Link.defaultProps = {
  href: null,
  to: null,
};
