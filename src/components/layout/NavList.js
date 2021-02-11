// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';

import { Ul, Li } from '~components';
import { isExternal } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const NavItem = ({ url, text }) => {
  return (
    <Li key={url}>
      {isExternal(url) ? (
        <a target="_blank" rel="noopener" href={url}>
          {text}
        </a>
      ) : (
        <Link activeClassName="is-active" to={url}>
          {text}
        </Link>
      )}
    </Li>
  );
};

export const NavList = ({ links }) => {
  return (
    <NavStyled>
      <Ul>
        {links.map((props) => (
          <NavItem key={props.url} {...props} />
        ))}
      </Ul>
    </NavStyled>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const NavStyled = styled.nav`
  ${Ul} {
    justify-content: space-between;
    align-items: center;
    display: flex;

    ${Li} {
      padding: 0 1vw;
    }
  }

  a {
    text-transform: uppercase;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

NavList.displayName = 'NavList';
