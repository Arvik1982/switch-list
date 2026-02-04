import React from 'react';
import { ActivityIndicator, Pressable, View, StyleSheet, Platform } from 'react-native';
import Text from '@/shared/ui/text';
import type { IButtonState, IButtonProps } from './types';
import useTheme from '@/shared/hooks/use-theme';
import { createStyles } from '@/shared/ui/button/styles';
import Icon from '@/shared/ui/icon';
import MaskedView from '@react-native-masked-view/masked-view';
import { BlurView } from 'expo-blur';

const Button = ({
  text,
  textVariant = 'buttonMain',
  view = 'filled',
  color = 'primary',
  size = 'large',
  radius = 'medium',
  intensityBlur = 16,
  disabled,
  loading,
  style,
  leftIcon,
  rightIcon,
  gradientBorder,
  ...restProps
}: IButtonProps) => {
  const [pressed, setPressed] = React.useState(false);
  const theme = useTheme();

  const state: IButtonState = disabled ? 'disabled' : pressed ? 'pressed' : 'default';
  const isOnlyIcon = !text && ((!!leftIcon && !rightIcon) || (!leftIcon && !!rightIcon));

  const styles = React.useMemo(
    () => createStyles(theme, view, color, size, radius, state, isOnlyIcon),
    [theme, view, color, size, radius, state, isOnlyIcon],
  );

  const renderLeft = () => {
    if ((loading && leftIcon) || (loading && !leftIcon && !rightIcon)) {
      return <ActivityIndicator color={styles.text.color} />;
    }

    if (leftIcon) {
      return <Icon name={leftIcon} width={24} height={24} fill={styles.text.color} />;
    }

    return null;
  };

  const renderRight = () => {
    if (!rightIcon) return null;

    if (loading && rightIcon) {
      return <ActivityIndicator color={styles.text.color} />;
    }

    return <Icon name={rightIcon} width={24} height={24} fill={styles.text.color} />;
  };

  return (
    <Pressable
      {...restProps}
      disabled={disabled || loading}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={[styles.container, style]}>
        {Platform.OS === 'ios' && view === 'blurred' && (
          <BlurView intensity={intensityBlur} tint={theme.id} style={styles.blur} />
        )}

        {renderLeft()}

        {text && (
          <Text variant={textVariant} style={{ color: styles.text.color }}>
            {text}
          </Text>
        )}

        {renderRight()}

        {gradientBorder && (
          <MaskedView
            maskElement={<View pointerEvents="none" style={styles.mask} collapsable={false} />}
            style={StyleSheet.absoluteFill}
          >
            <View style={styles.gradient} />
          </MaskedView>
        )}
      </View>
    </Pressable>
  );
};

export default Button;
