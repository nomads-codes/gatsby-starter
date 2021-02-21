// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql } from 'gatsby';
import React from 'react';

import { RootContainer } from '~containers';
import { renderBlocks } from '~utils';
import { Main } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────────────────────

const GalleryPage = ({
  data: {
    page: {
      frontmatter: { layout, meta, blocks },
    },
    images: { nodes },
  },
}) => {
  const pageBlocksBody = renderBlocks({
    images: nodes,
    blocks,
  });

  return (
    <RootContainer meta={meta} layout={layout}>
      <Main>{pageBlocksBody}</Main>
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
        blocks {
          title
          type
          mdx
        }
      }
    }

    images: allFile(
      filter: { absolutePath: { regex: "/gallery/" }, extension: { regex: "/(jpg)|(jpeg)|(png)/" } }
    ) {
      nodes {
        id
        name
        publicURL
        childrenImageSharp {
          fixed(quality: 55) {
            ...GatsbyImageSharpFixed_noBase64
          }
          fluid(maxWidth: 1024, quality: 55) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────
