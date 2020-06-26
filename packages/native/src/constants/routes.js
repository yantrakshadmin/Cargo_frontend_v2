import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SignInScreen } from '../screens/public/SignIn.screen';
import { SignUpShipperScreen } from '../screens/public/signUpShipper.screen';
import { SignUpSupplierScreen } from '../screens/public/SignUpSupplier.screen';
import { DashboardShipperScreenNative } from '../screens/shipper/dashboard.shipper.screen.native';
import { SalesOrderShipperScreen } from '../screens/shipper/salesOrder.shipper.screen.native';
import { TabCreater } from '../navigation/TabCreater';
import { ShippingShipperScreenNative } from '../screens/shipper/shipping.shipper.screen.native';
import { LiveTruckShipperScreenNative } from '../screens/shipper/liveTruck.shipper.screen.native';
import { TransportDirectoryShipperScreenNative } from '../screens/shipper/transportDirectory.shipper.screen.native';
import { ItemShipperScreenNative } from '../screens/shipper/Item.shipper.screen.native';
import { VendorShipperSceenNative } from '../screens/shipper/vendor.shipper.sceen.native';
import { AddressShipperScreenNative } from '../screens/shipper/address.shipper.screen.native';

export const SalesOrder = [
  {
    name: 'All Sales Orders',
    Component: SalesOrderShipperScreen,
  },
  {
    name: 'On Hold FTL',
    Component: SalesOrderShipperScreen,
  },
  {
    name: 'On Hold PTL',
    Component: SalesOrderShipperScreen,
  },
  {
    name: 'Assigned',
    Component: SalesOrderShipperScreen,
  },
];
export const Masters = [
  {
    name: 'Item',
    Component: ItemShipperScreenNative,
  },
  {
    name: 'Vendor',
    Component: VendorShipperSceenNative,
  },
  {
    name: 'Address',
    Component: AddressShipperScreenNative,
  },
];

export const publicRoutes = [
  {
    name: 'Sign In',
    Component: SignInScreen,
  },
  {
    name: 'Sign Up Shipper',
    Component: SignUpShipperScreen,
  },
  {
    name: 'Sign Up Supplier',
    Component: SignUpSupplierScreen,
  },
];

export const FreightExchange = [
  {
    name: 'Bid Not Assigned',
    Component: SalesOrderShipperScreen,
  },
  {
    name: 'Bid Assigned',
    Component: SalesOrderShipperScreen,
  },
];

export const shipperRoutes = [
  {
    name: 'Dashboard',
    Component: DashboardShipperScreenNative,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='home' color={tintColor} size={18} />,
    },
  },
  {
    name: 'Master',
    Component: () => <TabCreater TabRoutes={Masters} />,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='layer-group' color={tintColor} size={18} />,
    },
  },
  {
    name: 'Sales Orders',
    Component: () => <TabCreater TabRoutes={SalesOrder} />,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='boxes' color={tintColor} size={18} />,
    },
  },
  {
    name: 'Freight Exchange',
    Component: () => <TabCreater TabRoutes={FreightExchange} />,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='boxes' color={tintColor} size={18} />,
    },
  },
  {
    name: 'Live Trucks',
    Component: LiveTruckShipperScreenNative,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='truck' color={tintColor} size={18} />,
    },
  },
  {
    name: 'Shipping',
    Component: ShippingShipperScreenNative,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='compass' color={tintColor} size={18} />,
    },
  },
  {
    name: 'Transport Directory',
    Component: TransportDirectoryShipperScreenNative,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='address-book' color={tintColor} size={18} />,
    },
  },
];
