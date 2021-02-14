// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

import { Footer, Nav, Ul, Li, Section, H3 } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const FooterContainer = () => {
  const { footer } = useStaticQuery(graphql`
    {
      site: site {
        ...SITE_METADATA
      }

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
            <H3>{title}</H3>
            {type === 'nested' && <Nav links={links} look="primary" />}
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
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

FooterContainer.displayName = 'FooterContainer';
