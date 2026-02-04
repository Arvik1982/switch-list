import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';

interface IAppInitializerProps {
  children: ReactNode;
}

SplashScreen.preventAutoHideAsync().then();

const AppInitializer = ({ children }: IAppInitializerProps) => {
  const [loadedFonts, error] = useFonts({
    InterMedium: require('@fonts/inter/medium.otf'),
  });

  const onAppReady = () => SplashScreen.hide();

  useEffect(() => {
    if (loadedFonts) onAppReady();
  }, [loadedFonts]);

  if (error) throw error;

  return children;
};

export default AppInitializer;
