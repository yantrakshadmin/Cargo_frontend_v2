import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getFlex } from '../styles/advanceStyles';
import { yantraColors } from '../styles/default';

export const LoadingComponent = () => {
  return (
    <View style={getFlex(1, 'column', 'center', 'center')}>
      <ActivityIndicator size={30} color={yantraColors.black} />
    </View>
  );
};
