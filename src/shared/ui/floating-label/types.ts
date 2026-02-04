import type { StyleProp, ViewStyle } from 'react-native';

export enum FloatingLabelVariant {
  PRIMARY = 'primary',
  DISABLED = 'disabled',
}

export interface IFloatingLabelProps {
  text: string;
  variant?: FloatingLabelVariant;
  animationValue?: number;
  style?: StyleProp<ViewStyle>;
}
