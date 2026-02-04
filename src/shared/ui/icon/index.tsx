import React from 'react';
import * as Icons from '@/shared/icons/assets';
import type { SvgProps } from 'react-native-svg';
import type { IIconProps } from '@/shared/ui/icon/types';

const Icon: React.FC<IIconProps> = ({ name, ...props }) => {
  const SvgMap: Record<keyof typeof Icons, React.FC<SvgProps>> = Icons;
  const SvgIcon = SvgMap[name];
  return <SvgIcon {...props} />;
};

export default Icon;
