import { THEME_LABEL_LIGHT, THEME_LABEL_DARK } from '~theme';

const getBrowserTheme = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(`(prefers-color-scheme: ${THEME_LABEL_DARK})`)?.matches
      ? THEME_LABEL_DARK
      : THEME_LABEL_LIGHT;
  }

  return THEME_LABEL_LIGHT;
};

export default getBrowserTheme;
