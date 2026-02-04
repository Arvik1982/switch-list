import 'react-native-reanimated';
import ThemeProvider from '@/shared/providers/theme-provider';
import type { ReactNode } from 'react';
import AppInitializer from '@/shared/providers/app-initializer';
import { StatusBar } from 'expo-status-bar';
import useCustomColorScheme from '@/shared/hooks/use-custom-color-scheme';

interface IRootProviderProps {
  children: ReactNode;
}

const RootProvider = ({ children }: IRootProviderProps) => {
  const scheme = useCustomColorScheme();

  return (
    <AppInitializer>
      <ThemeProvider>{children}</ThemeProvider>
      <StatusBar style={scheme === 'light' ? 'dark' : 'light'} />
    </AppInitializer>
  );
};

export default RootProvider;
