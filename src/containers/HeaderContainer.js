// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql, useStaticQuery, Link } from 'gatsby';
import styled, { css } from 'styled-components';
import React from 'react';

import { Header, Section, Nav, H1 } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const HeaderContainer = (props) => {
  const { top, bottom, site } = useStaticQuery(graphql`
    {
      site: site {
        ...SITE_METADATA
      }

      top: mdx(
        fileAbsolutePath: { regex: "/markdown/navigations/" }
        frontmatter: { title: { eq: "HeaderTop" } }
      ) {
        ...HEADER_TOP_FRAGMENT
      }

      bottom: mdx(
        fileAbsolutePath: { regex: "/markdown/navigations/" }
        frontmatter: { title: { eq: "HeaderBottom" } }
      ) {
        ...HEADER_BOTTOM_FRAGMENT
      }
    }
  `);

  return (
    <HeaderStyled>
      <SectionStyled isTop>
        <Nav links={top.frontmatter.links} />
      </SectionStyled>

      <SectionStyled isBottom>
        <H1>
          <Link to="/">{site.siteMetadata.siteTitle}</Link>
        </H1>

        <Nav links={bottom.frontmatter.links} />
      </SectionStyled>
    </HeaderStyled>
  );
};

export default HeaderContainer;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const HeaderStyled = styled(Header)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.02);
`;

const SectionStyled = styled(Section)`
  ${({ isTop }) =>
    isTop &&
    css`
      background-color: rgba(0, 0, 0, 0.04);
      justify-content: flex-end;
      height: 4rem;

      a {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    `}

  ${({ isBottom }) =>
    isBottom &&
    css`
      justify-content: space-between;
      height: 8rem;
    `}

  align-items: center;
  display: flex;
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

HeaderContainer.displayName = 'HeaderContainer';
