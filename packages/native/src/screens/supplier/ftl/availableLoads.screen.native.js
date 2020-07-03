import React, { useState } from 'react';
import { useAPI } from '../../../hooks/api';
import { ScreenWrapperNative } from '../../../components/screenWrapper.native';
import { CardAddress } from '../../../components/cards/cardAddress';
import { CardAvailableLoads } from '../../../components/cards/cardAvailableLoads';

export const AvailableLoadsScreenNative = ({ navigation }) => {
  const { data, loading, reload } = useAPI(`/available-orders/`);
  return (
    <ScreenWrapperNative
      header
      title='Available Loads'
      loading={loading}
      navigation={navigation}
      pullToRefresh
      onRefresh={() => {
        reload();
      }}>
      {(data || []).map((Item) => (
        <CardAvailableLoads reload={reload} load={Item} />
      ))}
    </ScreenWrapperNative>
  );
};
