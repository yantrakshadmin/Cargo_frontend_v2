import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { $User$SHIPPER } from '@app/common/constants/userTypes';
import { shipperRoutes } from '../constants/routes';
import { drawerConfig } from './config';
import PublicStack from './stack.navigator';

export const Drawer = createDrawerNavigator();

export const PrivateRoutes = ({ userType }) => {
  switch (userType) {
    case $User$SHIPPER:
      return (
        <Drawer.Navigator initialRouteName='Home' {...drawerConfig}>
          {shipperRoutes.map((Route) => (
            <Drawer.Screen
              name={Route.name}
              component={Route.Component}
              options={{ ...Route.navigationOptions }}
            />
          ))}
        </Drawer.Navigator>
      );
    default:
      return <PublicStack />;
  }
};
