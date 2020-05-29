import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import { Provider as AntDesign } from '@ant-design/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import { store } from '@app/common/reducers';

import { GettingStarted } from './src/components/GettingStarted';
import { MonorepoIntro } from './src/components/MonorepoIntro';

const Stack = createStackNavigator();
const theme = require('@app/common/theme').default;

const Initial = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return null;
};

const App = () => {
  return (
    <AntDesign theme={theme}>
      <Provider store={store}>
        <StatusBar barStyle='dark-content' />
        <Initial />
        <NavigationContainer screenOptions={{ headerShown: false }}>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={GettingStarted} />
            <Stack.Screen name='Intro' component={MonorepoIntro} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </AntDesign>
  );
};

export default App;
