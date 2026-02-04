import type { IContainerProps } from './types';
import useTheme from '@/shared/hooks/use-theme';
import { useMemo } from 'react';
import { View } from 'react-native';
import { createStyles } from './styles';

const Container = ({ style, children, ...restProps }: IContainerProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles({ theme }), [theme]);

  return (
    <View style={[styles.container, style]} {...restProps}>
      {children}
    </View>
  );
};

export default Container;
