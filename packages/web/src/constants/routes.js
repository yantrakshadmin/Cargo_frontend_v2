import { lazy } from 'react';

export const publicRoutes = [
  { Component: lazy(() => import('screens/public/SignIn.screen')), path: '/' },
  {
    Component: lazy(() => import('screens/public/Shipper.SignUp.screen')),
    path: '/sign-up/shipper/',
  },
  {
    Component: lazy(() => import('screens/public/Supplier.SignUp.screen')),
    path: '/sign-up/supplier/',
  },
];

export const extraRoutesShipper = [
  {
    path: '/edit-profile/',
    Component: lazy(() => import('screens/shipper/EditProfile')),
  },
  {
    path: '/',
    Component: lazy(() => import('screens/shipper/Dashboard.shipper.screen')),
  },
  {
    path: '/freight-exchange/view-bid/:id',
    Component: lazy(() => import('screens/shipper/ViewBids.shipper.screen')),
  },
];
export const extraRoutesSupplierFTL = [
  {
    path: '/edit-profile/',
    Component: lazy(() => import('screens/supplier/FTL/EditProfile')),
  },
  {
    path: '/',
    Component: lazy(() => import('screens/supplier/FTL/Dashboard.ftl.supplier.screen')),
  },
];
export const extraRoutesSupplierPTL = [
  {
    path: '/',
    Component: lazy(() => import('screens/supplier/PTL/Dashboard.ptl.supplier.screen')),
  },
];
export const shipperRoutes = [
  {
    name: 'Dashboard',
    icon: ['fas', 'home'],
    path: '/dashboard/',
    Component: lazy(() => import('screens/shipper/Dashboard.shipper.screen')),
  },
  {
    name: 'Masters',
    icon: ['fas', 'layer-group'],
    path: '/masters/',
    isSubMenu: true,
    subMenu: [
      {
        name: 'Item',
        path: '/master/item/',
        Component: lazy(() => import('screens/shipper/Items.shipper.screen')),
      },
      {
        name: 'Vendor',
        path: '/master/vendor/',
        Component: lazy(() => import('screens/shipper/Vendor.shipper.screen')),
      },
      {
        name: 'Address',
        path: '/master/address/',
        Component: lazy(() => import('screens/shipper/Address.shipper.screen')),
      },
    ],
  },
  {
    name: 'Sales Order',
    icon: ['fas', 'boxes'],
    path: '/sales-orders/',
    Component: lazy(() => import('screens/shipper/SalesOrder.shipper.screen')),
  },
  {
    name: 'Carrier Selection',
    icon: ['fas', 'boxes'],
    path: '/carrier-selection/',
    Component: lazy(() => import('screens/shipper/CarrierSelection.shipper')),
  },
  {
    name: 'Live Trucks',
    icon: ['fas', 'truck'],
    path: '/live-trucks/',
    Component: lazy(() => import('screens/shipper/liveTrucks.shipper.screen')),
  },
  {
    name: 'Shipping',
    icon: ['fas', 'compass'],
    path: '/shipping/',
    Component: lazy(() => import('screens/shipper/Shipping.shipper.screen')),
  },
  {
    name: 'Transport Directory',
    icon: ['fas', 'address-book'],
    path: '/transport-directory/',
    Component: lazy(() => import('screens/shipper/TransportDirectory.shipper.screen')),
  },
];

export const supplierFTLRoutes = [
  {
    name: 'Available loads',
    icon: ['fas', 'boxes'],
    path: '/available-loads/',
    Component: lazy(() => import('screens/supplier/FTL/AvailableLoads.ftl.supplier.screen')),
  },
  {
    name: 'Post Truck',
    icon: ['fas', 'truck'],
    path: '/post-truck/',
    Component: lazy(() => import('screens/supplier/FTL/PostTruck.ftl.supplier.screen')),
  },
  {
    name: 'My Bids',
    icon: ['fas', 'money-bill'],
    path: '/my-bids/',
    Component: lazy(() => import('screens/supplier/FTL/MyBids.ftl.supplier.screen')),
  },
  {
    name: 'Trips Management',
    icon: ['fas', 'route'],
    path: '/trips-management/',
    Component: lazy(() => import('screens/supplier/FTL/TripManagement.ftl.supplier.screen')),
  },
];

export const supplierPTLRoutes = [
  {
    name: 'View Pickup requests',
    icon: ['fas', 'layout'],
    path: '/view-pickup-requests/',
    Component: lazy(() => import('screens/supplier/PTL/ViewPickupRequest.supplier.screen')),
  },
];
