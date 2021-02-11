// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

import { Footer, NavList, Ul, Li, Section, H2 } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const FooterContainer = () => {
  const { footer } = useStaticQuery(graphql`
    {
      footer: mdx(
        fileAbsolutePath: { regex: "/markdown/navigations/" }
        frontmatter: { title: { eq: "Footer" } }
      ) {
        ...FOOTER_FRAGMENT
      }
    }
  `);

  return (
    <FooterStyled>
      {footer.frontmatter.links.map(({ title, links, type }) => {
        return (
          <SectionStyled key={title}>
            <H2>{title}</H2>
            {type === 'nested' && <NavList links={links} />}
          </SectionStyled>
        );
      })}
    </FooterStyled>
  );
};

export default FooterContainer;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const FooterStyled = styled(Footer)`
  border-top: 1px solid rgba(0, 0, 0, 0.02);
  padding-top: 2rem;
  display: flex;
`;

export const SectionStyled = styled(Section)`
  width: calc(100% / 3);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  display: flex;

  ${Ul} {
    align-items: flex-start;
    flex-direction: column;

    ${Li} {
      margin-top: 1rem;
      padding: 0;

      a {
        text-transform: initial;
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

FooterContainer.displayName = 'FooterContainer';
