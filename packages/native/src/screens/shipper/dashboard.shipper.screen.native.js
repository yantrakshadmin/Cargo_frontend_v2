import React from 'react';
import { Text } from 'react-native';
import { ScreenWrapperNative } from '../../components/screenWrapper.native';

export const DashboardShipperScreenNative = ({ navigation }) => {
  return (
    <ScreenWrapperNative title='Dashboard' navigation={navigation}>
      <Text>Dashboard DashboardShipperScreenNative</Text>
    </ScreenWrapperNative>
  );
};
