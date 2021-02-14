// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql } from 'gatsby';
import React from 'react';

import { RootContainer } from '~containers';
import { renderBlocks } from '~utils';
import { H1 } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

const HomePage = ({
  data: {
    page: {
      frontmatter: { layout, meta, blocks },
    },
  },
}) => {
  return (
    <RootContainer meta={meta} layout={layout}>
      <H1>{meta.title}</H1>
      {renderBlocks(blocks)}
    </RootContainer>
  );
};

export default HomePage;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Graphql Query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(
      fileAbsolutePath: { regex: "/markdown/pages/" }
      frontmatter: { meta: { permalink: { eq: "/" } } }
    ) {
      frontmatter {
        ...LAYOUT_FRAGMENT
        ...META_FRAGMENT
        blocks {
          title
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────
