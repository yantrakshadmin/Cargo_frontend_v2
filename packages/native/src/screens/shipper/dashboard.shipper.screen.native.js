import React from 'react';
import { Text } from 'react-native';
import { ScreenWrapperNative } from '../../components/screenWrapper.native';
import { DashboardMenuComponent } from '../../components/dashboardTopMenu';

export const DashboardShipperScreenNative = ({ navigation }) => {
  return (
    <ScreenWrapperNative title='Dashboard' navigation={navigation}>
      <DashboardMenuComponent
        first={{ title:'Total Orders',value:0 }}
        fourth={{ title:'Total PTL',value:0 }}
        second={{ title:'Total RTD' ,value:0 }}
        third={{ title:'Total FTL', value:0 }} />
    </ScreenWrapperNative>
  );
};
