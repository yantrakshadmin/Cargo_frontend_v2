import React from 'react';
import { useAPI } from '../../hooks/api';
import { ScreenWrapperNative } from '../../components/screenWrapper.native';
import { CardLiveTruck } from '../../components/cards/cardLiveTruck';

export const LiveTruckShipperScreenNative = ({ navigation }) => {
  const { data, loading, reload } = useAPI(`/live-trucks/`, {});
  return (
    <ScreenWrapperNative
      header
      title='Truck'
      loading={loading}
      navigation={navigation}
      pullToRefresh
      onRefresh={() => {
        reload();
      }}>
      {(data || []).map((Item) => (
        <CardLiveTruck truck={Item} />
      ))}
    </ScreenWrapperNative>
  );
};
