import React from 'react';
import { View, Text } from 'react-native';
import { GetTruckType } from '@app/common/helpers/getTruckType';
import { font, tagsStyle } from '../styles/advanceStyles';
import { yantraColors } from '../styles/default';

export const Tag = ({ children, bg, shadow, color, size, weight, align }) => {
  return (
    <View style={tagsStyle.container(bg || yantraColors.primary, shadow || yantraColors.primary)}>
      <Text
        style={[font(size || 15, weight || 'normal', align), { color: color || yantraColors.white }]}>
        {children}
      </Text>
    </View>
  );
};
