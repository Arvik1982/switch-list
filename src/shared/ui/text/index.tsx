import React, { useMemo } from 'react';
import { Text as RNText } from 'react-native';
import type { ITextProps } from './types';
import useTheme from '@/shared/hooks/use-theme';
import { createStyles } from './styles';

const Text = ({
  variant = 'titleLarge',
  color = 'main',
  align = 'left',
  wrap = 'wrap',
  ellipsis = false,
  ellipsisLines = 1,
  style,
  children,
  ...restProps
}: ITextProps) => {
  const theme = useTheme();

  const styles = useMemo(
    () =>
      createStyles({
        theme,
        variant,
        color,
        align,
        wrap,
      }),
    [theme, variant, color, align, wrap],
  );

  return (
    <RNText
      {...restProps}
      style={[styles.text, style]}
      numberOfLines={ellipsis ? ellipsisLines : undefined}
      ellipsizeMode={ellipsis ? 'tail' : undefined}
    >
      {children}
    </RNText>
  );
};

export default Text;
