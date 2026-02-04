import { StyleSheet } from 'react-native';
import type { ITextStylesProps } from './types';

export const createStyles = ({ theme, variant, color, align, wrap }: ITextStylesProps) => {
  const typography = theme.typography[variant];

  return StyleSheet.create({
    text: {
      ...typography,
      color: color ? theme.colors.typography[color] : theme.colors.text,
      textAlign: align || typography.textAlign,
      flexWrap: wrap,
    },
  });
};
