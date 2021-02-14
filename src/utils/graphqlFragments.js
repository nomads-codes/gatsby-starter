// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql } from 'gatsby';

// ─────────────────────────────────────────────────────────────────────────────
// Graphql Query Fragments
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_METADATA = graphql`
  fragment SITE_METADATA on Site {
    siteMetadata {
      siteTitle
    }
  }
`;

export const META_FRAGMENT = graphql`
  fragment META_FRAGMENT on MdxFrontmatter {
    meta {
      description
      permalink
      title
    }
  }
`;

export const LAYOUT_FRAGMENT = graphql`
  fragment LAYOUT_FRAGMENT on MdxFrontmatter {
    layout {
      footer
      header
      main
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

export const HEADER_TOP_FRAGMENT = graphql`
  fragment HEADER_TOP_FRAGMENT on Mdx {
    frontmatter {
      links {
        text
        url
      }
    }
  }
`;

export const HEADER_BOTTOM_FRAGMENT = graphql`
  fragment HEADER_BOTTOM_FRAGMENT on Mdx {
    frontmatter {
      links {
        text
        url
      }
    }
  }
`;
