// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled, { css } from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { createElement } from 'react';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import slugify from 'slugify';

import { H1, H2, H3, P, Blockquote, Link, Ul, Ol, Li } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const MDXBlock = ({ components, images, mdx }) => {
  const blocksImages = images.reduce((acc, data) => {
    if (typeof data === 'object' && data !== null) {
      const { name, id, publicURL, childrenImageSharp } = data;
      const [image] = childrenImageSharp;

      const createImage = (props) =>
        createElement(Image, {
          ...props,
          title: name,
          alt: name,
          key: id,
        });

      const n = slugify(name.toUpperCaseFirstChar(), {
        replacement: '__',
        strict: true,
      });

      return {
        ...acc,
        [`${n}Fluid`]: () => createImage({ fluid: image.fluid }),
        [`${n}Fixed`]: ({ align, height, width }) =>
          createImage({
            fixed: {
              ...image.fixed,
              height: height ? parseInt(height) : image.fixed.height,
              width: width ? parseInt(width) : image.fixed.width,
            },
            align,
          }),
      };
    }
  }, {});

  return (
    <MDXProvider
      components={{
        ...components,
        ...{
          blockquote: Blockquote,
          a: Link,
          h1: H1,
          h2: H2,
          h3: H3,
          ul: Ul,
          ol: Ol,
          li: Li,
          p: P,
        },
      }}
    >
      <MDXRenderer images={blocksImages}>{mdx}</MDXRenderer>
    </MDXProvider>
  );
};

export default MDXBlock;

// ─────────────────────────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────────────────────────

const ImageAlignCenter = css`
  margin: 0 auto;
`;

const ImageAlignRight = css`
  margin-left: auto;
`;

const ImageAlignLeft = css`
  margin-right: auto;
`;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

export const Image = styled(Img)`
  ${({ align }) => align === 'center' && ImageAlignCenter};
  ${({ align }) => align === 'right' && ImageAlignRight};
  ${({ align }) => align === 'left' && ImageAlignLeft};
`;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

MDXBlock.displayName = 'MDXBlock';

MDXBlock.propTypes = {
  components: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};

MDXBlock.defaultProps = {
  components: {},
  images: [],
};
