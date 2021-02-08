// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { DefaultPageTemplate } from '~templates';
import { SEOContainer } from '~containers';
import { GlobalStyle } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const wrapPageElement = ({ element, props: { data } }) => {
  const meta = data?.page?.frontmatter?.meta;
  return (
    <DefaultPageTemplate>
      <GlobalStyle />

      {meta && <SEOContainer meta={meta} />}

      <>{element}</>
    </DefaultPageTemplate>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

wrapPageElement.displayName = 'wrapPageElement';
