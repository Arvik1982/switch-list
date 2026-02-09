import { StyleSheet } from 'react-native';
import type { IScreenExampleStylesProps } from './types';

export const createStyles = ({ theme, inset }: IScreenExampleStylesProps) => {
  return StyleSheet.create({
    screen: {
      flexGrow: 1,
      backgroundColor: theme.colors.background,
      paddingBottom: inset?.bottom,
    },
    avoidingView: {
      flexGrow: 1,
    },
    wrapper: {
      paddingTop: 50,
      flexGrow: 1,
    },
    container: {
      flexGrow: 1,
      rowGap: 8,
    },

    radioGroupCard: {
      backgroundColor: theme.colors.radioGroup.background,
      borderRadius: 12,
      paddingHorizontal: 16,
      marginTop: 16,
      marginBottom: 16,
    },

    radioGroupWrap: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingHorizontal: 0,
      paddingBottom: 16,
      gap: 8,
    },

    radioGroupText: {
      ...theme.typography.controlMedium,
      color: theme.colors.radioGroup.text,
    },

    radioGroup: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 4,
      gap: 8,
      width: '100%',
    },

    radioItem: {
      flex: 1,
    },
    radioItemSelected: { flex: 1 },

    radioButton: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 8,
      height: 36,
      borderRadius: 8,
    },

    radioButtonSelected: {
      backgroundColor: theme.colors.radioGroup.activeBackground,
    },
    radioLabel: {
      ...theme.typography.controlSmall,
      textAlign: 'center',
      color: theme.colors.radioGroup.text,
    },

    radioLabelSelected: {
      color: theme.colors.radioGroup.activeText,
    },

    switchList: {
      width: '100%',
    },

    switchItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      gap: 16,
      borderTopWidth: 1,
      borderTopColor: theme.colors.switch.border,
      minHeight: 56,
    },

    switchTextWrap: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },

    switchTitle: {
      ...theme.typography.switchMedium,
      color: theme.colors.switch.text,
    },

    toggleContainer: {
      width: 44,
      height: 24,
    },

    toggle: {
      width: 44,
      height: 24,
      borderRadius: 12,
      position: 'relative',
      justifyContent: 'center',
    },

    toggleActive: {
      backgroundColor: theme.colors.switch.backgroundActive,
    },

    toggleInactive: {
      backgroundColor: theme.colors.switch.backgroundInactive,
    },

    knob: {
      position: 'absolute',
      width: 20,
      height: 20,
      backgroundColor: theme.colors.switch.knob,
      borderRadius: 10,
      top: 2,
    },

    knobLeft: {
      left: 2,
    },

    knobRight: {
      right: 2,
    },
  });
};
