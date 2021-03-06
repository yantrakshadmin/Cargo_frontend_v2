import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { Router } from '@reach/router';

import { useUser } from '@app/common/hooks/user';
import { getUserMeta } from '@app/common/helpers/auth';
import {
  $User$SHIPPER,
  $User$Supplier$FTL,
  $User$Supplier$PTL,
} from '@app/common/constants/userTypes';

import {
  extraRoutesShipper,
  extraRoutesSupplierFTL,
  extraRoutesSupplierPTL,
  publicRoutes,
  shipperRoutes,
  supplierFTLRoutes,
  supplierPTLRoutes,
} from 'constants/routes';

import { PrivateRoutes } from 'components/PrivateRoutes';
import { NotFound404Screen } from 'screens/404.screen';

/**
 * @return {*[]}
 */
export const RootRouter = () => {
  const [loading, setLoading] = useState(true);

  const user = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      const toHome = await getUserMeta(dispatch);
      if (toHome) window.location = '/';
    };

    init().then(() => setLoading(false));
  }, [dispatch]);

  if (loading)
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Spin />
      </div>
    );

  switch (user.type) {
    case null:
      return (
        <Router>
          {publicRoutes.map((Route, index) => {
            return <Route.Component path={Route.path} key={index.toString()} />;
          })}
          <NotFound404Screen default />
        </Router>
      );

    case $User$SHIPPER:
      return <PrivateRoutes routes={shipperRoutes} extraRoutes={extraRoutesShipper} />;

    case $User$Supplier$FTL:
      return <PrivateRoutes routes={supplierFTLRoutes} extraRoutes={extraRoutesSupplierFTL} />;
    case $User$Supplier$PTL:
      return <PrivateRoutes routes={supplierPTLRoutes} extraRoutes={extraRoutesSupplierPTL} />;

    default:
      return null;
  }
};
