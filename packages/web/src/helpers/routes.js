import { LayoutOutlined } from '@ant-design/icons';
import React, { lazy } from 'react';

export const publicRoutes = [
  { Component: lazy(() => import('../screens/public/signIn')), path: '/' },
  { Component: lazy(() => import('../screens/public/signUp.shipper')), path: '/sign-up-shipper/' },
  {
    Component: lazy(() => import('../screens/public/signUp.supplier')),
    path: '/sign-up-supplier/',
  },
  { Component: lazy(() => import('../components/loadingComponent')), path: '/loading/' },
];

export const shipperRoutes = [
  {
    name: 'Dashboard',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    Component: lazy(() => import('../screens/private/shipper/dashboard')),
  },
  {
    name: 'Masters',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    isSubMenu: true,
    subMenu: [
      {
        name: 'Item',
        path: '/master/item',
        Component: lazy(() => import('../screens/private/shipper/item.shipper')),
      },
      {
        name: 'Vendor',
        path: '/master/vendor',
        Component: lazy(() => import('../screens/private/shipper/vendor.shipper')),
      },
      {
        name: 'Address',
        path: '/master/address',
        Component: lazy(() => import('../screens/private/shipper/address.shipper')),
      },
    ],
  },
  {
    name: 'Sales Order',
    icon: <LayoutOutlined />,
    path: '/sales-orders',
    Component: lazy(() => import('../screens/private/shipper/salesOrder.shipper')),
  },
  {
    name: 'Carrier Selection',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    Component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
  {
    name: 'Shipping',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    Component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
  {
    name: 'Transporter Director',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    Component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
];

export const supplierFTLRoutes = [
  {
    name: 'View available loads',
    icon: <LayoutOutlined />,
    path: '/view-available-loads',
    Component: lazy(() => import('../screens/private/supplier/FTL/ViewAvailableLoads')),
  },
  {
    name: 'Post Truck',
    icon: <LayoutOutlined />,
    path: '/post-truck',
    Component: lazy(() => import('../screens/private/supplier/FTL/postTruck')),
  },
  {
    name: 'My Bids',
    icon: <LayoutOutlined />,
    path: '/my-bids',
    Component: lazy(() => import('../screens/private/supplier/FTL/myBids')),
  },
  {
    name: 'Trips Management',
    icon: <LayoutOutlined />,
    path: '/trips-management',
    Component: lazy(() => import('../screens/private/supplier/FTL/tripManagement')),
  },
];
