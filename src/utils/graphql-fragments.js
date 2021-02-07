// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql } from 'gatsby';

// ─────────────────────────────────────────────────────────────────────────────
// Graphql Query Fragments
// ─────────────────────────────────────────────────────────────────────────────

export const META_FRAGMENT = graphql`
  fragment META_FRAGMENT on MdxFrontmatter {
    meta {
      description
      permalink
      title
    }
  }
`;

export const FOOTER_FRAGMENT = graphql`
  fragment FOOTER_FRAGMENT on Mdx {
    frontmatter {
      title
      links {
        url
        type
        title
        text
        mdx
        links {
          text
          url
        }
      }
    }
  }
`;

export const HEADER_FRAGMENT = graphql`
  fragment HEADER_FRAGMENT on Mdx {
    frontmatter {
      links {
        text
        url
      }
    }
  }
`;
