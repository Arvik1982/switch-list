import { StyleSheet } from 'react-native';
import type { IScreenExampleStylesProps } from './types';

export const createStyles = ({ theme, inset }: IScreenExampleStylesProps) => {
  return StyleSheet.create({
    screen: {
      flexGrow: 1,
      backgroundColor: theme.colors.background,
      paddingBottom: inset?.bottom,
    },
    avoidingView: {
      flexGrow: 1,
    },
    wrapper: {
      paddingTop: 50,
      flexGrow: 1,
    },
    container: {
      flexGrow: 1,
      rowGap: 8,
    },
  });
};
