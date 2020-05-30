import { LayoutOutlined } from '@ant-design/icons';
import React, { lazy } from 'react';

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

export const shipperRoutes = [
  {
    name: 'Dashboard',
    icon: <LayoutOutlined />,
    path: '/dashboard/',
    Component: lazy(() => import('screens/shipper/Dashboard.shipper.screen')),
  },
  {
    name: 'Masters',
    icon: <LayoutOutlined />,
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
    icon: <LayoutOutlined />,
    path: '/sales-orders/',
    Component: lazy(() => import('screens/shipper/SalesOrder.shipper.screen')),
  },
  {
    name: 'Carrier Selection',
    icon: <LayoutOutlined />,
    path: '/carrier/',
    Component: lazy(() => import('screens/shipper/Dashboard.shipper.screen')),
  },
  {
    name: 'Shipping',
    icon: <LayoutOutlined />,
    path: '/shipping/',
    Component: lazy(() => import('screens/shipper/Dashboard.shipper.screen')),
  },
  {
    name: 'Transporter Director',
    icon: <LayoutOutlined />,
    path: '/transporter/',
    Component: lazy(() => import('screens/shipper/Dashboard.shipper.screen')),
  },
];

export const supplierFTLRoutes = [
  {
    name: 'Available loads',
    icon: <LayoutOutlined />,
    path: '/available-loads/',
    Component: lazy(() => import('screens/supplier/FTL/AvailableLoads.ftl.supplier.screen')),
  },
  {
    name: 'Post Truck',
    icon: <LayoutOutlined />,
    path: '/post-truck/',
    Component: lazy(() => import('screens/supplier/FTL/PostTruck.ftl.supplier.screen')),
  },
  {
    name: 'My Bids',
    icon: <LayoutOutlined />,
    path: '/my-bids/',
    Component: lazy(() => import('screens/supplier/FTL/MyBids.ftl.supplier.screen')),
  },
  {
    name: 'Trips Management',
    icon: <LayoutOutlined />,
    path: '/trips-management/',
    Component: lazy(() => import('screens/supplier/FTL/TripManagement.ftl.supplier.screen')),
  },
];
