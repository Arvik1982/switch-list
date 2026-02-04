import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useMemo } from 'react';
import { createStyles } from './styles';
import useTheme from '@/shared/hooks/use-theme';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '@/shared/ui/container';
import Text from '@/shared/ui/text';
import Button from '@/shared/ui/button';
import TextInput from '@/shared/ui/input';
import type { IScreenExampleProps } from './types';

const ScreenExample = ({ style, ...restProps }: IScreenExampleProps) => {
  const inset = useSafeAreaInsets();
  const theme = useTheme();
  const styles = useMemo(() => createStyles({ theme, inset }), [inset, theme]);
  const [inputValue, setInputValue] = React.useState<string>('');

  return (
    <SafeAreaView edges={['top']} style={[style, styles.screen]} {...restProps}>
      <KeyboardAvoidingView style={styles.avoidingView} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.wrapper} keyboardShouldPersistTaps="handled">
          <Container style={styles.container}>
            <Text variant="titleMedium" color="main" align="center">
              Пример заголовка
            </Text>
            <TextInput
              value={inputValue}
              placeholder="Ввод текста"
              onChangeText={setInputValue}
              invalid={false}
              keyboardType="default"
            />
            <Button view="filled" size="large" text="Кнопка" color="primary" onPress={() => {}} />

            {/* Добавьте другие элементы интерфейса */}
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ScreenExample;
