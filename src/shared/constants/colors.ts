import type { IColors } from '@/shared/types/colors';

interface IColorsThemes {
  themeLight: IColors;
  themeDark: IColors;
}

const Colors: IColorsThemes = {
  themeLight: {
    background: '#ffffff',
    wrapper: '#d8d8d8',
    text: '#000',
    typography: {
      main: '#000000',
      mainLight: '#FFFFFF',
      error: '#FF2C0C',
      caption: '#FFFFFF66',
      disable: '#FFFFFF4D',
    },
    button: {
      primary: {
        background: { default: '#53C0FF', pressed: '#1c98da', disabled: '#191C2CCC' },
        text: { default: '#000000', pressed: '#000000', disabled: '#FFFFFF4D' },
        border: { default: '#53C0FF', pressed: '#1c98da', disabled: '#191C2CCC' },
        blur: { default: '#FFFFFF51', pressed: '#7777777F', disabled: '#77777719' },
      },
      secondary: {
        background: { default: '#24283BCC', pressed: '#34394ECC', disabled: '#191C2CCC' },
        text: { default: '#FFFFFF', pressed: '#FFFFFF', disabled: '#FFFFFF4D' },
        border: { default: '#24283BCC', pressed: '#34394ECC', disabled: '#191C2CCC' },
        blur: { default: '#FFFFFF51', pressed: '#7777777F', disabled: '#77777719' },
      },
      danger: {
        background: { default: '#200400', pressed: '#200400', disabled: '#191C2CCC' },
        text: { default: '#FF2C0C', pressed: '#FF2C0C', disabled: '#FFFFFF4D' },
        border: { default: '#200400', pressed: '#200400', disabled: '#191C2CCC' },
        blur: { default: '#FFFFFF51', pressed: '#7777777F', disabled: '#77777719' },
      },
    },
    input: {
      background: {
        default: '#2E2B2B14',
        pressed: '#23212114',
        focused: '#23212114',
        invalid: '#4716167A',
        disabled: '#39373714',
      },
      text: {
        default: '#1b1a1a',
        pressed: '#1b1a1a',
        focused: '#1b1a1a',
        invalid: '#1b1a1a',
        disabled: '#333333',
      },
    },
  },
  themeDark: {
    background: '#060814',
    wrapper: '#1b1b1b',
    text: '#fff',
    typography: {
      main: '#FFFFFF',
      mainLight: '#000000',
      error: '#FF2C0C',
      caption: '#FFFFFF66',
      disable: '#FFFFFF4D',
    },
    button: {
      primary: {
        background: { default: '#53C0FF', pressed: '#1c98da', disabled: '#191C2CCC' },
        text: { default: '#000000', pressed: '#000000', disabled: '#FFFFFF4D' },
        border: { default: '#53C0FF', pressed: '#1c98da', disabled: '#191C2CCC' },
        blur: { default: '#00000051', pressed: '#0000007F', disabled: '#00000019' },
      },
      secondary: {
        background: { default: '#24283BCC', pressed: '#34394ECC', disabled: '#191C2CCC' },
        text: { default: '#FFFFFF', pressed: '#FFFFFF', disabled: '#FFFFFF4D' },
        border: { default: '#24283BCC', pressed: '#34394ECC', disabled: '#191C2CCC' },
        blur: { default: '#00000051', pressed: '#0000007F', disabled: '#00000019' },
      },
      danger: {
        background: { default: '#200400', pressed: '#200400', disabled: '#191C2CCC' },
        text: { default: '#FF2C0C', pressed: '#FF2C0C', disabled: '#FFFFFF4D' },
        border: { default: '#200400', pressed: '#200400', disabled: '#191C2CCC' },
        blur: { default: '#00000051', pressed: '#0000007F', disabled: '#00000019' },
      },
    },
    input: {
      background: {
        default: '#FFFFFF14',
        pressed: '#FFFFFF1F',
        focused: '#FFFFFF14',
        invalid: '#4716167A',
        disabled: '#FFFFFF14',
      },
      text: {
        default: '#FFFFFF',
        pressed: '#FFFFFF',
        focused: '#FFFFFF',
        invalid: '#FFFFFF',
        disabled: '#FFFFFF4D',
      },
    },
  },
};

export default Colors;
