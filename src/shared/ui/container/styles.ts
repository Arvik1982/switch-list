import { StyleSheet } from 'react-native';
import type { IContainerStylesProps } from './types';

export const createStyles = ({ theme }: IContainerStylesProps) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: theme.offsets.containerHorizontal,
    },
  });
};
