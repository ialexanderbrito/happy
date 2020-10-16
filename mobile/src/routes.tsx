import React, { useState, useEffect } from 'react';
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

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={theme.primary}
        barStyle={theme.isLighten ? 'dark-content' : 'light-content'}
      />
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
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
        <AppStack.Screen name="OrphanageDetail" component={OrphanageDetail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
