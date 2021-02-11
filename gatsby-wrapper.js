// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import React from 'react';

import { SEOContainer, HeaderContainer, FooterContainer } from '~containers';
import { GlobalStyle, View, Main } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export const wrapPageElement = ({
  element,
  props: {
    data: {
      page: {
        frontmatter: { meta },
      },
    },
  },
}) => {
  return (
    <ViewStyled>
      <GlobalStyle />
      {meta && <SEOContainer meta={meta} />}

      <HeaderContainer />
      <MainStyled>
        <>{element}</>
      </MainStyled>
      <FooterContainer />
    </ViewStyled>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const ViewStyled = styled(View)``;

const MainStyled = styled(Main)``;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

wrapPageElement.displayName = 'wrapPageElement';
