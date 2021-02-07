// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

import { Footer, Section, H2 } from '~components';

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
          <Section key={title}>
            <H2>{title}</H2>

            {type === 'nested' && (
              <ul>
                {links.map(({ url, text }) => (
                  <li key={text}>
                    <a href={url} target="_blank" rel="noopener">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Section>
        );
      })}
    </FooterStyled>
  );
};

export default FooterContainer;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const FooterStyled = styled(Footer)``;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

FooterContainer.displayName = 'FooterContainer';
