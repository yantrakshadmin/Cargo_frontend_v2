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
import { publicRoutes } from './src/constants/routes';
import PublicStack from './src/navigation/stack.navigator';

const Stack = createStackNavigator();
const theme = require('@app/common/theme').default;

const Initial = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return null;
};

const InnerBody = () => {
  return (
    <>
      <AntDesign theme={theme}>
        <StatusBar barStyle='dark-content' />
        <Initial />
        <NavigationContainer screenOptions={{ headerShown: false }}>
          <PublicStack />
        </NavigationContainer>
      </AntDesign>
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <InnerBody />
    </Provider>
  );
};

export default App;
