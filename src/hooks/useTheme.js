// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

import { LightTheme, DarkTheme, THEME_LABEL_LIGHT, THEME_LABEL_DARK } from '~theme';
import { useLocalStorage } from '~hooks';
import { getBrowserTheme } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function useTheme() {
  const [storedValue, setValue] = useLocalStorage('theme', getBrowserTheme());

  const toggleTheme = () =>
    setValue((prevTheme) => {
      return prevTheme === THEME_LABEL_LIGHT ? THEME_LABEL_DARK : THEME_LABEL_LIGHT;
    });

  return [storedValue, toggleTheme];
}

export const getTheme = (theme) => (theme === THEME_LABEL_LIGHT ? LightTheme : DarkTheme);
