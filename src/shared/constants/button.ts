import type { IButton, IButtonRadius, IButtonSize, IButtonView } from '@/shared/types/button';

const buttonViews: IButtonView = {
  filled: {
    borderWidth: 0,
  },
  outlined: {
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  ghost: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  blurred: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
};

const buttonSizes: IButtonSize = {
  small: { paddingVertical: 8, paddingHorizontal: 14 },
  large: { paddingVertical: 16, paddingHorizontal: 24 },
};

const buttonRadius: IButtonRadius = {
  medium: { borderRadius: 12 },
  full: { borderRadius: 999 },
};

export const button: IButton = {
  buttonViews,
  buttonSizes,
  buttonRadius,
};
