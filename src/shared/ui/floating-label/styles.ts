import { StyleSheet } from 'react-native';
import type { ITheme } from '@/shared/types/theme';

export const createStyles = (theme: ITheme) => {
  return StyleSheet.create({
    text: {
      ...theme.typography.controlMedium,
    },
    textPrimary: {
      color: theme.colors.input.text.default,
    },
    textDisabled: {
      color: theme.colors.input.text.disabled,
    },
  });
};
