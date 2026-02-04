import React, { useEffect, useMemo } from 'react';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import type { IFloatingLabelProps } from './types';
import { FloatingLabelVariant } from './types';
import { createStyles } from './styles';
import useTheme from '@/shared/hooks/use-theme';

const FloatingLabel = ({
  text,
  variant = FloatingLabelVariant.PRIMARY,
  animationValue = 0,
  style,
}: IFloatingLabelProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const animationProgress = useSharedValue(animationValue);

  const containerAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -8 * 1.125 * animationProgress.value }],
    };
  }, [theme]);

  const textAnimatedStyles = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(
        animationProgress.value,
        [0, 1],
        [theme.typography.controlMedium.fontSize as number, theme.typography.captionMedium.fontSize as number],
      ),
      lineHeight: interpolate(
        animationProgress.value,
        [0, 1],
        [theme.typography.controlMedium.lineHeight as number, theme.typography.captionMedium.lineHeight as number],
      ),
    };
  }, [theme]);

  const textStyles = useMemo(() => {
    return [
      styles.text,
      variant === FloatingLabelVariant.PRIMARY && styles.textPrimary,
      variant === FloatingLabelVariant.DISABLED && styles.textDisabled,
    ];
  }, [styles, variant]);

  useEffect(() => {
    animationProgress.value = withTiming(animationValue, {
      duration: 200,
      easing: Easing.linear,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationValue]);

  return (
    <Animated.View pointerEvents="none" style={[style, containerAnimatedStyles]}>
      <Animated.Text style={[textStyles, textAnimatedStyles]}>{text}</Animated.Text>
    </Animated.View>
  );
};

export default FloatingLabel;
