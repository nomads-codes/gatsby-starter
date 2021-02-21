// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useContext } from 'react';

import { ThemeContext, THEME_LABEL_LIGHT, THEME_LABEL_DARK } from '~theme';
import { Input, Button, Link } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const ColourThemeContainer = ({ look }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleText = `${(theme === THEME_LABEL_LIGHT
    ? THEME_LABEL_DARK
    : THEME_LABEL_LIGHT
  ).toUpperCaseFirstChar()}`;

  const options = [
    {
      checked: theme === THEME_LABEL_LIGHT,
      label: THEME_LABEL_LIGHT.toUpperCaseFirstChar(),
      value: THEME_LABEL_LIGHT,
    },
    {
      checked: theme === THEME_LABEL_DARK,
      label: THEME_LABEL_DARK.toUpperCaseFirstChar(),
      value: THEME_LABEL_DARK,
    },
  ];

  if (look === 'radio') {
    return <Input options={options} onChange={toggleTheme} type="radio" name="theme" />;
  }

  if (look === 'button' || look === undefined) {
    return <Button onClick={toggleTheme}>{toggleText}</Button>;
  }
};

export default ColourThemeContainer;

// ─────────────────────────────────────────────────────────────────────────────
// Others
// ─────────────────────────────────────────────────────────────────────────────

ColourThemeContainer.displayName = 'ColourThemeContainer';
