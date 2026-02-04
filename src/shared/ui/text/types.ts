import type { TextStyle, TextProps as RNTextProps } from 'react-native';
import type { ITheme } from '@/shared/types/theme';

export type ITextVariant = keyof ITheme['typography'];
export type ITextColor = keyof ITheme['colors']['typography'];
export type ITextAlign = TextStyle['textAlign'];
export type ITextWrap = TextStyle['flexWrap'];

export interface ITextProps extends RNTextProps {
  variant?: ITextVariant;
  color?: ITextColor;
  align?: ITextAlign;
  wrap?: TextStyle['flexWrap'];
  ellipsis?: boolean;
  ellipsisLines?: number;
}

export interface ITextStylesProps {
  theme: ITheme;
  variant: ITextVariant;
  color?: ITextColor;
  align?: ITextAlign;
  wrap?: ITextWrap;
}
