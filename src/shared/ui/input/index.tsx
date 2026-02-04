import React, { forwardRef, useState, useMemo } from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import type { ITextInputProps, ITextInputState } from './types';
import { createStyles } from './styles';
import useTheme from '@/shared/hooks/use-theme';
import FloatingLabel from '@/shared/ui/floating-label';
import { FloatingLabelVariant } from '@/shared/ui/floating-label/types';

const TextInput = forwardRef<RNTextInput, ITextInputProps>(
  (
    {
      placeholder,
      value,
      invalid = false,
      editable = true,
      style,
      onChangeText,
      onFocus,
      onBlur,
      multiline = false,
      numberOfLines = 2,
      ...restProps
    },
    forwardedRef,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [pressed, setPressed] = useState(false);
    const theme = useTheme();

    const state: ITextInputState = useMemo(() => {
      if (!editable) return 'disabled';
      if (invalid) return 'invalid';
      if (pressed) return 'pressed';
      if (isFocused) return 'focused';
      return 'default';
    }, [editable, invalid, pressed, isFocused]);

    const styles = useMemo(
      () => createStyles(theme, state, multiline, numberOfLines),
      [theme, state, multiline, numberOfLines],
    );

    const handleTextChange = (text: string) => onChangeText?.(text);
    const handleFocus = (e: Parameters<NonNullable<ITextInputProps['onFocus']>>[0]) => {
      setIsFocused(true);
      onFocus?.(e);
    };
    const handleBlur = (e: Parameters<NonNullable<ITextInputProps['onBlur']>>[0]) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <View style={[styles.container, style]}>
        <RNTextInput
          {...restProps}
          ref={forwardedRef}
          value={value}
          editable={editable}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          underlineColorAndroid="transparent"
          style={styles.input}
          onChangeText={handleTextChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
        />

        {placeholder && (
          <FloatingLabel
            text={placeholder}
            variant={editable ? FloatingLabelVariant.PRIMARY : FloatingLabelVariant.DISABLED}
            animationValue={isFocused || value ? 1 : 0}
            style={styles.placeholder}
          />
        )}
      </View>
    );
  },
);

TextInput.displayName = 'TextInput';

export default TextInput;
