// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import React from 'react';

import { Link, Ul, Li } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const Nav = ({ links, look = 'primary' }) => (
  <NavStyled>
    <Ul>
      {links.map(({ text, url }) => (
        <Li key={url}>
          <Link key={url} to={url} look={look}>
            {text}
          </Link>
        </Li>
      ))}
    </Ul>
  </NavStyled>
);

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const NavStyled = styled.nav`
  ${Ul} {
    justify-content: space-between;
    align-items: center;
    display: flex;

    ${Li}:not(:last-child) {
      padding-right: 1rem;
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

Nav.displayName = 'Nav';
