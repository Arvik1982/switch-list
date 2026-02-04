import type { ITheme } from '@/shared/types/theme';
import type { EdgeInsets } from 'react-native-safe-area-context';

export interface IStyles {
  theme: ITheme;
  inset?: EdgeInsets;
}
