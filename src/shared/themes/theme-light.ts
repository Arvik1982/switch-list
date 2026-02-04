import type { ITheme } from '@/shared/types/theme';
import Colors from '@/shared/constants/colors';
import { typography } from '@/shared/constants/typography';
import { button } from '@/shared/constants/button';
import { offsets } from '@/shared/constants/offsets';

export const ThemeLight: ITheme = {
  id: 'light',
  colors: Colors.themeLight,
  typography,
  button,
  offsets,
};
