import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useMemo, useState } from 'react';
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

  const [selectedRadio, setSelectedRadio] = useState<number>(2);

  const [switches, setSwitches] = useState([
    { id: 1, label: 'Корт забронирован', enabled: true },
    { id: 2, label: 'Приватный турнир', enabled: false },
    { id: 3, label: 'Игроки могут приглашать', enabled: true },
    { id: 4, label: 'Выставлять результаты могут все', enabled: false },
    { id: 5, label: 'Вход по запросу', enabled: true },
  ]);
  const handleRadioSelect = (index: number) => {
    setSelectedRadio(index);
  };
  const toggleSwitch = (id: number) => {
    setSwitches(prev => prev.map(item => (item.id === id ? { ...item, enabled: !item.enabled } : item)));
  };

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

            {/* Radio */}
            <View style={styles.radioGroupCard}>
              <View style={styles.radioGroup}>
                <TouchableOpacity style={styles.radioItem} onPress={() => handleRadioSelect(1)}>
                  <View style={[styles.radioButton, selectedRadio === 1 && styles.radioButtonSelected]}>
                    <Text
                      variant="switchMedium"
                      style={[styles.radioLabel, selectedRadio === 1 && styles.radioLabelSelected]}
                    >
                      1,5 часа
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.radioItem, selectedRadio === 2 && styles.radioItemSelected]}
                  onPress={() => handleRadioSelect(2)}
                >
                  <View style={[styles.radioButton, selectedRadio === 2 && styles.radioButtonSelected]}>
                    <Text
                      variant="switchMedium"
                      style={[styles.radioLabel, selectedRadio === 2 && styles.radioLabelSelected]}
                    >
                      2 часа
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.radioItem} onPress={() => handleRadioSelect(3)}>
                  <View style={[styles.radioButton, selectedRadio === 3 && styles.radioButtonSelected]}>
                    <Text
                      variant="switchMedium"
                      style={[styles.radioLabel, selectedRadio === 3 && styles.radioLabelSelected]}
                    >
                      2,5 часа
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* List */}
            <View style={styles.switchList}>
              {switches.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.switchItem}
                  onPress={() => toggleSwitch(item.id)}
                  activeOpacity={0.7}
                >
                  <View style={styles.switchTextWrap}>
                    <Text variant="switchMedium" style={styles.switchTitle} numberOfLines={1}>
                      {item.label}
                    </Text>
                  </View>
                  <View style={styles.toggleContainer}>
                    <View
                      style={[
                        styles.toggle,
                        item.enabled && styles.toggleActive,
                        !item.enabled && styles.toggleInactive,
                      ]}
                    >
                      <View style={[styles.knob, item.enabled ? styles.knobRight : styles.knobLeft]} />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ScreenExample;
