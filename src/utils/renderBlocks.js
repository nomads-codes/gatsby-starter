// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { HeroBlock } from '~blocks';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const renderBlocks = (blocks) => {
  return blocks.map((block) => {
    if (block.type === 'hero') {
      return <HeroBlock key={block.title} title={block.title} />;
    }

    return null;
  });
};

export default renderBlocks;
