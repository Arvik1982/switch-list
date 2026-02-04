import type { ITheme } from '@/shared/types/theme';
import type { IButtonColor, IButtonState, IButtonView, IButtonRadius, IButtonSize } from '@/shared/ui/button/types';
import { StyleSheet } from 'react-native';

export const createStyles = (
  theme: ITheme,
  view: IButtonView,
  color: IButtonColor,
  size: IButtonSize,
  radius: IButtonRadius,
  state: IButtonState,
  isOnlyIcon: boolean,
) => {
  const viewStyle = theme.button.buttonViews[view];
  const sizeStyle = theme.button.buttonSizes[size];
  const radiusStyle = theme.button.buttonRadius[radius];
  const palette = theme.colors.button[color];
  const backgroundColor = view === 'filled' ? palette.background[state] : 'transparent';
  const borderColor =
    view === 'outlined' ? palette.border[state] : view === 'ghost' ? 'transparent' : palette.border[state];

  return StyleSheet.create({
    container: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      gap: 8,
      ...viewStyle,
      ...sizeStyle,
      ...radiusStyle,
      backgroundColor,
      borderColor,
      ...(isOnlyIcon && {
        alignSelf: 'flex-start',
        aspectRatio: 1,
        paddingHorizontal: 0,
      }),
    },
    blur: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: palette.blur[state],
    },
    text: {
      color: palette.text[state],
    },
    mask: {
      ...StyleSheet.absoluteFillObject,
      borderWidth: 1,
      borderRadius: radiusStyle.borderRadius,
      borderColor: palette.border[state],
    },
    gradient: {
      ...StyleSheet.absoluteFillObject,
      experimental_backgroundImage: 'linear-gradient(160deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))',
    },
  });
};
