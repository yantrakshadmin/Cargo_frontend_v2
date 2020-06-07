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
]
export const extraRoutesSupplierFTL = [
  {
    path: '/edit-profile/',
    Component: lazy(() => import('screens/supplier/FTL/EditProfile')),
  },
]
export const shipperRoutes = [
  {
    name: 'Dashboard',
    icon:['fas', 'home'],
    path: '/dashboard/',
    Component: lazy(() => import('screens/shipper/Dashboard.shipper.screen')),
  },
  {
    name: 'Masters',
    icon:['fas', 'layer-group'],
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
    icon: ['fas', 'layer-group'],
    path: '/sales-orders/',
    Component: lazy(() => import('screens/shipper/SalesOrder.shipper.screen')),
  },
  {
    name: 'Carrier Selection',
    icon:['fas', 'layer-group'],
    path: '/carrier/',
    Component: lazy(() => import('screens/shipper/Dashboard.shipper.screen')),
  },
  {
    name: 'Shipping',
    icon: ['fas', 'compass'],
    path: '/shipping/',
    Component: lazy(() => import('screens/shipper/Shipping.shipper.screen')),
  },
  {
    name: 'Transport Directory',
    icon: ['fas', 'layer-group'],
    path: '/transport-directory/',
    Component: lazy(() => import('screens/shipper/TransportDirectory.shipper.screen')),
  },
];

export const supplierFTLRoutes = [
  {
    name: 'Available loads',
    icon: ['fas', 'layout'],
    path: '/available-loads/',
    Component: lazy(() => import('screens/supplier/FTL/AvailableLoads.ftl.supplier.screen')),
  },
  {
    name: 'Post Truck',
    icon:['fas', 'layout'],
    path: '/post-truck/',
    Component: lazy(() => import('screens/supplier/FTL/PostTruck.ftl.supplier.screen')),
  },
  {
    name: 'My Bids',
    icon: ['fas', 'layout'],
    path: '/my-bids/',
    Component: lazy(() => import('screens/supplier/FTL/MyBids.ftl.supplier.screen')),
  },
  {
    name: 'Trips Management',
    icon:['fas', 'layout'],
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
