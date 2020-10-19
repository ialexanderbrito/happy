import React from 'react';
import { LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';
import { AppearanceProvider } from 'react-native-appearance';

import MainApplication from './src';

LogBox.ignoreLogs(['Expected style']);

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppearanceProvider>
      <MainApplication />
    </AppearanceProvider>
  );
};

export default App;
