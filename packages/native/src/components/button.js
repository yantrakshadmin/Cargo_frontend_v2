import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Toast } from '@ant-design/react-native';
import { getFlex, signInStyle, font } from '../styles/advanceStyles';
import { margin, yantraColors } from '../styles/default';

export const YantraButton = ({ Icon, containerStyle, children, title, onPress, type,disabled }) => {
  let buttonStyle;
  if (type === 'primary') {
    buttonStyle = {
      container: { backgroundColor: yantraColors.primary },
      text: { color: yantraColors.white },
    };
  } else {
    buttonStyle = {
      container: { backgroundColor: yantraColors.white },
      text: { color: yantraColors.black },
    };
  }
  return (
    <View style={[
      getFlex(4, 'column', 'center', 'center'),
      containerStyle,{ opacity:disabled?.7:1 }]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={disabled?()=>{Toast.info('Button is disabled')}:onPress}
        style={[
          signInStyle.subContainer,
          containerStyle,
          buttonStyle.container,
          getFlex(null, 'row', 'center', 'center'),
          { borderWidth: 0.5, borderTopWidth: 0.5, paddingVertical: 10, borderRadius: 20 },
        ]}>
        <View style={margin('marginRight').md}>{Icon}</View>
        <Text style={[font(13, 'bold'), buttonStyle.text]}>{title || children}</Text>
      </TouchableOpacity>
    </View>
  );
};
