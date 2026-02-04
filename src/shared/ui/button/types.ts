import type { ITheme } from '@/shared/types/theme';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import type { IIconProps } from '@/shared/ui/icon/types';

export type IButtonState = 'default' | 'pressed' | 'disabled';
export type IButtonView = keyof ITheme['button']['buttonViews'];
export type IButtonSize = keyof ITheme['button']['buttonSizes'];
export type IButtonRadius = keyof ITheme['button']['buttonRadius'];
export type IButtonColor = keyof ITheme['colors']['button'];
export type IButtonTextVariant = Extract<keyof ITheme['typography'], 'buttonMain' | 'controlMedium'>;

export interface IButtonProps extends Omit<PressableProps, 'style' | 'children'> {
  text?: string;
  textVariant?: IButtonTextVariant;
  view?: IButtonView;
  size?: IButtonSize;
  radius?: IButtonRadius;
  color?: IButtonColor;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  leftIcon?: IIconProps['name'];
  rightIcon?: IIconProps['name'];
  gradientBorder?: boolean;
  intensityBlur?: number;
}
