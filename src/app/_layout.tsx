import { Stack } from 'expo-router';
import 'react-native-reanimated';
import RootProvider from '@/shared/providers/root-provider';

const RootLayout = () => {
  return (
    <RootProvider>
      <Stack screenOptions={{ headerShown: false, animation: 'fade', animationDuration: 150 }} />
    </RootProvider>
  );
};

export default RootLayout;
