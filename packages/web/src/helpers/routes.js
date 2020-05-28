import { LayoutOutlined } from '@ant-design/icons';
import React, { lazy } from 'react';

export const publicRoutes = [
  { component: lazy(() => import('../screens/public/signIn')), path: '/' },
  { component: lazy(() => import('../screens/public/signUp.shipper')), path: '/sign-up-shipper/' },
  { component: lazy(() => import('../screens/public/signUp.supplier')), path: '/sign-up-supplier/' },
];

export const supplierRoutes = [
  {
    name: 'Dashboard',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
  {
    name: 'Masters',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    component: lazy(() => () => import('../screens/private/supplier/dashboard')),
    isSubMenu: true,
    subMenu: [
      {
        name: 'Item',
        path: '/master/item',
        component: lazy(() => import('../screens/private/supplier/dashboard')),
      },
      {
        name: 'Vendor',
        path: '/master/vendor',
        component: lazy(() => import('../screens/private/supplier/dashboard')),
      },
      {
        name: 'Address',
        path: '/master/address',
        component: lazy(() => import('../screens/private/supplier/dashboard')),
      },
    ],
  },
  {
    name: 'Sales Order',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
  {
    name: 'Carrier Selection',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
  {
    name: 'Shipping',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
  {
    name: 'Transporter Director',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
];
