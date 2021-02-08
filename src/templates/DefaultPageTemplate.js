// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';
import React from 'react';

import { HeaderContainer, FooterContainer } from '~containers';
import { Main, View } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const DefaultPageTemplate = ({ children }) => {
  return (
    <ViewStyled>
      <HeaderContainer />

      <MainStyled>{children}</MainStyled>

      <FooterContainer />
    </ViewStyled>
  );
};

export default DefaultPageTemplate;

// ─────────────────────────────────────────────────────────────────────────────
// Extended Default Styles
// ─────────────────────────────────────────────────────────────────────────────

const ViewStyled = styled(View)``;
const MainStyled = styled(Main)``;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

DefaultPageTemplate.displayName = 'DefaultPageTemplate';
