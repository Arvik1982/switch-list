import type { ColorValue } from 'react-native';
import type { IButtonState } from '@/shared/ui/button/types';
import type { ITextInputState } from '@/shared/ui/input/types';

export interface IColors {
  background: ColorValue;
  wrapper: ColorValue;
  text: ColorValue;
  typography: {
    main: ColorValue;
    mainLight: ColorValue;
    error: ColorValue;
    caption: ColorValue;
    disable: ColorValue;
  };
  button: Record<
    'primary' | 'secondary' | 'danger',
    {
      background: Record<IButtonState, ColorValue>;
      text: Record<IButtonState, ColorValue>;
      border: Record<IButtonState, ColorValue>;
      blur: Record<IButtonState, ColorValue>;
    }
  >;
  input: {
    background: Record<ITextInputState, ColorValue>;
    text: Record<ITextInputState, ColorValue>;
  };
}
