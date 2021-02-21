// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { v4 as uuidv4 } from 'uuid';
import React from 'react';

import { HeroBlock, MDXBlock } from '~blocks';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default ({ blocks, components = {}, images = [] }) => {
  return blocks.map(({ title, type, mdx }) => (
    <React.Fragment key={uuidv4()}>
      {type === 'markdown' && mdx && <MDXBlock components={components} images={images} mdx={mdx} />}
      {type === 'hero' && title && <HeroBlock title={title} />}
    </React.Fragment>
  ));
};
