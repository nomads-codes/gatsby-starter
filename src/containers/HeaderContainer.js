// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

import { Header, Nav, H1 } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const HeaderContainer = () => {
  const { header } = useStaticQuery(graphql`
    {
      header: mdx(
        fileAbsolutePath: { regex: "/markdown/navigations/" }
        frontmatter: { title: { eq: "Header" } }
      ) {
        ...HEADER_FRAGMENT
      }
    }
  `);

  return (
    <HeaderStyled>
      <H1>
        <Link to="/">Nomads Codes</Link>
      </H1>

      <Nav>
        <ul>
          {header.frontmatter.links.map(({ url, text }) => (
            <li key={url}>
              <Link to={url}>{text}</Link>
            </li>
          ))}
        </ul>
      </Nav>
    </HeaderStyled>
  );
};

export default HeaderContainer;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const HeaderStyled = styled(Header)``;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

HeaderContainer.displayName = 'HeaderContainer';
