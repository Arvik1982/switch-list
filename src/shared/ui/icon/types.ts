import type { SvgProps } from 'react-native-svg';
import type * as Icons from '@/shared/icons/assets';

export interface IIconProps extends SvgProps {
  name: keyof typeof Icons;
}
