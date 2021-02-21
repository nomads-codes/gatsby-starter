// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { Link } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const parseLinks = (string, { type } = {}) => {
  if (typeof string === 'string') {
    return string.split(/\[(.*?\]\(.*?)\)/).map((item) => {
      const [text, href] = item.split('](');

      if (href) {
        return (
          <Link key={`${href}${text}`} to={href} type={type}>
            {text}
          </Link>
        );
      }

      return item;
    });
  }

  return string;
};

export default parseLinks;
