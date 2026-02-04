import type { TextInputProps, StyleProp, ViewStyle } from 'react-native';

export type ITextInputState = 'default' | 'pressed' | 'focused' | 'disabled' | 'invalid';

export interface ITextInputProps extends Omit<TextInputProps, 'underlineColorAndroid' | 'style'> {
  invalid?: boolean;
  style?: StyleProp<ViewStyle>;
}
