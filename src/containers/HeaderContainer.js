// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components';
import React from 'react';

import { Header, Section, Nav, H1, Link, Anchor } from '~components';
import { ColourThemeContainer } from '~containers';

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
    <Header>
      <SectionStyled isTop>
        <ColourThemeContainer />
        <Nav links={top.frontmatter.links} />
      </SectionStyled>

      <SectionStyled isBottom>
        <H1>
          <Link to="/" look="primary">
            {site.siteMetadata.siteTitle}
          </Link>
        </H1>

        <Nav links={bottom.frontmatter.links} />
      </SectionStyled>
    </Header>
  );
};

export default HeaderContainer;

// ─────────────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────────────

const sectionBottom = css`
  height: 8rem;

  ${H1} {
    ${Anchor} {
      font-size: ${({ theme }) => theme.font.size['4xl']};
    }
  }
`;

const sectionTop = css`
  background-color: rgba(0, 0, 0, 0.04);
  height: 4rem;

  ${Anchor} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const SectionStyled = styled(Section)`
  ${({ isBottom }) => isBottom && sectionBottom}
  ${({ isTop }) => isTop && sectionTop}

  justify-content: space-between;
  align-items: center;
  display: flex;
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

HeaderContainer.displayName = 'HeaderContainer';
