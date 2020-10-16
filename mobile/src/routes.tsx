import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { useTheme } from 'styled-components';

import InitialOnboarding from './pages/InitialOnboarding';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetail from './pages/OrphanageDetail';

import SelectMapPosition from './pages/SelectMapPosition';
import OrphanageData from './pages/OrphanageData';

import Header from './components/Header';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle={theme.isLighten ? 'dark-content' : 'light-content'}
        translucent
      />
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <AppStack.Screen
          name="InitialOnboarding"
          component={InitialOnboarding}
        />
        <AppStack.Screen name="OrphanagesMap" component={OrphanagesMap} />
        <AppStack.Screen
          name="OrphanageDetail"
          component={OrphanageDetail}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />,
          }}
        />
        <AppStack.Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />,
          }}
        />
        <AppStack.Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
