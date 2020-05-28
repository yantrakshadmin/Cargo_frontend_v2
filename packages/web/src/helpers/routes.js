import { LayoutOutlined } from '@ant-design/icons';
import React, { lazy } from 'react';

export const publicRoutes = [
  { component: lazy(() => import('../screens/public/signIn')), path: '/' },
  { component: lazy(() => import('../screens/public/signUp.shipper')), path: '/sign-up-shipper/' },
  { component: lazy(() => import('../screens/public/signUp.supplier')), path: '/sign-up-supplier/' },
  { component: lazy(() => import('../components/loadingComponent')), path: '/loading/' },
];

export const shipperRoutes = [
  {
    name: 'Dashboard',
    icon: <LayoutOutlined />,
    path: '/dashboard',
    component: lazy(() => import('../screens/private/shipper/dashboard')),
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
        component: lazy(() => import('../screens/private/shipper/item.shipper')),
      },
      {
        name: 'Vendor',
        path: '/master/vendor',
        component: lazy(() => import('../screens/private/shipper/vendor.shipper')),
      },
      {
        name: 'Address',
        path: '/master/address',
        component: lazy(() => import('../screens/private/shipper/address.shipper')),
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

export const supplierOneRoutes = [
  {
    name: 'Freight Exchange',
    icon: <LayoutOutlined />,
    path: '/freight-exchange',
    component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
  {
    name: 'View available loads',
    icon: <LayoutOutlined />,
    path: '/view-available-loads',
    component: lazy(() => () => import('../screens/private/supplier/dashboard')),
  },
  {
    name: 'Post Truck',
    icon: <LayoutOutlined />,
    path: '/post-truck',
    component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
  {
    name: 'Quotation',
    icon: <LayoutOutlined />,
    path: '/quotation',
    component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
  {
    name: 'Trips Management',
    icon: <LayoutOutlined />,
    path: '/trips-management',
    component: lazy(() => import('../screens/private/supplier/dashboard')),
  },
];
