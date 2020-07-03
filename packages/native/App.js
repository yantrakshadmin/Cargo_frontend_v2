import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import { Provider as AntDesign } from '@ant-design/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch } from 'react-redux';

import { store } from '@app/common/reducers';
import { getUserMeta } from '@app/common/helpers/auth';
import { useUser } from './src/hooks/user';
import { PrivateRoutes } from './src/navigation/shipper.routes';
import 'helpers/shared';

const theme = require('@app/common/theme').default;

const Initial = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return null;
};

/**
 * @return {*[]}
 */
const InnerBody = () => {
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      const toHome = await getUserMeta(dispatch);
    };

    init().then(() => setLoading(false));
  }, [dispatch]);
  return (
    <>
      <AntDesign theme={theme}>
        <StatusBar barStyle='dark-content' />
        <Initial />
        <NavigationContainer screenOptions={{ headerShown: false }}>
          <PrivateRoutes userType={user.type} />
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
