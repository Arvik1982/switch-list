import type { ColorValue } from 'react-native';
import { StyleSheet, Platform } from 'react-native';
import type { ITheme } from '@/shared/types/theme';
import type { ITextInputState } from './types';

export const createStyles = (theme: ITheme, state: ITextInputState, multiline: boolean, numberOfLines: number) => {
  const palette = theme.colors.input;

  return StyleSheet.create({
    container: {
      position: 'relative',
      height: multiline ? 48 + numberOfLines * 24 : 72,
      paddingHorizontal: 18,
      paddingTop: Platform.OS === 'ios' ? 32 : 32,
      paddingBottom: Platform.OS === 'ios' ? 16 : 32,
      borderRadius: 12,
      backgroundColor: palette.background[state],
    },
    input: {
      ...theme.typography.controlMedium,
      textAlignVertical: 'top',
      color: palette.text[state],
      backgroundColor: 'transparent' as ColorValue,
    },
    placeholder: {
      position: 'absolute',
      top: 24,
      left: 18,
    },
  });
};
