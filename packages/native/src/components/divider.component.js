import React from 'react';
import { Animated } from 'react-native';
import { yantraColors } from '../styles/default';

export const Divider = ({ style, direction }) => {
  const getDividerStyle = (dir) => {
    let dividerStyle;
    if (dir === 'vertical') {
      dividerStyle = {
        width: 1,
        marginHorizontal: 5,
        height: '100%',
      };
    } else {
      dividerStyle = {
        height: 1,
        width: '100%',
        marginVertical: 5,
      };
    }
    return dividerStyle;
  };
  return (
    <Animated.View
      style={{
        backgroundColor: yantraColors.gray,
        ...getDividerStyle(direction),
        ...style,
      }}
    />
  );
};
