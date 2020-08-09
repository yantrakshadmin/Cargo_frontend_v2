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
import { ItemShipperScreenNative } from '../screens/shipper/item.shipper.screen.native';
import { VendorShipperScreenNative } from '../screens/shipper/vendor.shipper.screen';
import { AddressShipperScreenNative } from '../screens/shipper/address.shipper.screen.native';
import { CarrierSelectionShipperScreenNative } from '../screens/shipper/carrierSelection.shipper.screen.native';
import { AvailableLoadsScreenNative } from '../screens/supplier/ftl/availableLoads.screen.native';
import { PostTruckScreenNative } from '../screens/supplier/ftl/postTruck.screen.native';
import { MyBidsScreenNative } from '../screens/supplier/ftl/myBids.screen.native';
import { TripManagementScreenNative } from '../screens/supplier/ftl/tripManagement.screen.native';
import { SignOutScreen } from '../screens/public/signOut.screen';
import { ViewPickupRequestsScreenNative } from '../screens/supplier/ptl/viewPickupRequests.screen.native';

export const SalesOrder = [
  {
    name: 'All Sales Orders',
    Component: SalesOrderShipperScreen,
  },
  {
    name: 'Pending',
    Component: SalesOrderShipperScreen,
  },
  {
    name: 'Planned',
    Component: SalesOrderShipperScreen,
  },
];
export const Masters = [
  {
    name: 'Vendor',
    Component: VendorShipperScreenNative,
  },
  {
    name: 'Address',
    Component: AddressShipperScreenNative,
  },
  {
    name: 'Item',
    Component: ItemShipperScreenNative,
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

export const CarrierSelection = [
  {
    name: 'FTL',
    Component: CarrierSelectionShipperScreenNative,
  },
  {
    name: 'PTL',
    Component: CarrierSelectionShipperScreenNative,
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
    name: 'Carrier Selection',
    Component: () => <TabCreater TabRoutes={CarrierSelection} />,
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
  {
    name: 'Log Out',
    Component: ({ navigation }) => <SignOutScreen home='Dashboard' navigation={navigation} />,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='sign-out-alt' color={tintColor} size={18} />,
    },
  },
];

export const supplierFTLRoutes = [
  {
    name: 'Available Loads',
    Component: AvailableLoadsScreenNative,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='boxes' color={tintColor} size={18} />,
    },
  },
  {
    name: 'Post Truck',
    Component: PostTruckScreenNative,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='truck' color={tintColor} size={18} />,
    },
  },
  {
    name: 'My Bids',
    Component: MyBidsScreenNative,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='money-bill' color={tintColor} size={18} />,
    },
  },
  {
    name: 'Trip Management',
    Component: TripManagementScreenNative,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='route' color={tintColor} size={18} />,
    },
  },
  {
    name: 'Log Out',
    Component: ({ navigation }) => <SignOutScreen home='Available Loads' navigation={navigation} />,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='sign-out-alt' color={tintColor} size={18} />,
    },
  },
];

export const supplierPTLRoutes = [
  {
    name: 'View Pickup Request',
    Component: ViewPickupRequestsScreenNative,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='luggage-cart' color={tintColor} size={18} />,
    },
  },
  {
    name: 'Log Out',
    Component: ({ navigation }) => (
      <SignOutScreen home='View Pickup Request' navigation={navigation} />
    ),
    navigationOptions: {
      drawerIcon: ({ tintColor }) => <Icon name='sign-out-alt' color={tintColor} size={18} />,
    },
  },
];
