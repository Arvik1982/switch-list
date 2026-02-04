import type { ViewStyle } from 'react-native';

export type IButtonSize = Record<'small' | 'large', { paddingHorizontal: number; paddingVertical: number }>;
export type IButtonView = Record<'filled' | 'outlined' | 'ghost' | 'blurred', ViewStyle>;
export type IButtonRadius = Record<'medium' | 'full', { borderRadius: number }>;

export type IButton = {
  buttonSizes: IButtonSize;
  buttonViews: IButtonView;
  buttonRadius: IButtonRadius;
};
