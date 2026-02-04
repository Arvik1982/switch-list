import type { ReactNode } from 'react';
import { ThemeDark } from '@/shared/themes/theme-dark';
import { ThemeLight } from '@/shared/themes/theme-light';
import ThemeContext from '@/shared/contexts/theme-context';
import useCustomColorScheme from '@/shared/hooks/use-custom-color-scheme';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const scheme = useCustomColorScheme();
  const schemeValue = scheme === 'light' ? ThemeLight : ThemeDark;

  return <ThemeContext.Provider value={schemeValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
