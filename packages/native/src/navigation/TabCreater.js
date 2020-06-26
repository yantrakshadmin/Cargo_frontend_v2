import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabConfigs } from './config';

const Tab = createBottomTabNavigator();

export const TabCreater = ({ TabRoutes }) => {
  return (
    <Tab.Navigator {...tabConfigs}>
      {TabRoutes.map((TabItem) => (
        <Tab.Screen name={TabItem.name} component={TabItem.Component} options={tabConfigs} />
      ))}
    </Tab.Navigator>
  );
};
