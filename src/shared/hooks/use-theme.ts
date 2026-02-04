import { useContext } from 'react';
import ThemeContext from '@/shared/contexts/theme-context';
import type { ITheme } from '@/shared/types/theme';

const useTheme = (): ITheme => {
  return useContext(ThemeContext);
};

export default useTheme;
