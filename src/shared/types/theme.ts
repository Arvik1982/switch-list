import type { IColors } from '@/shared/types/colors';
import type { ITypography } from '@/shared/types/typography';
import type { button } from '@/shared/constants/button';
import type { IOffsets } from '@/shared/types/offsets';

export interface ITheme {
  id: 'light' | 'dark';
  colors: IColors;
  typography: ITypography;
  button: typeof button;
  offsets: IOffsets;
}
