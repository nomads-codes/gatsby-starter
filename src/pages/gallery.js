// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql } from 'gatsby';
import React from 'react';

import { RootContainer } from '~containers';
import { H1 } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

const GalleryPage = ({
  data: {
    page: {
      frontmatter: { layout, meta },
    },
  },
}) => {
  return (
    <RootContainer meta={meta} layout={layout}>
      <H1>GalleryPage</H1>
    </RootContainer>
  );
};

export default GalleryPage;

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
      frontmatter: { meta: { permalink: { eq: "/gallery/" } } }
    ) {
      frontmatter {
        ...LAYOUT_FRAGMENT
        ...META_FRAGMENT
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────
