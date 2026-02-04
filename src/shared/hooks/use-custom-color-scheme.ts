import type { ColorSchemeName } from 'react-native';
import { useColorScheme } from 'react-native';

const useCustomColorScheme = (): ColorSchemeName => {
  const systemScheme = useColorScheme();
  const scheme = process.env.EXPO_PUBLIC_API_COLOR_SCHEME;
  if (scheme === 'light') return 'light';
  if (scheme === 'dark') return 'dark';
  return systemScheme ?? 'light';
};

export default useCustomColorScheme;
