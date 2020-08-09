import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { ScreenWrapperNative } from '../../components/screenWrapper.native';
import { shippingStyle } from '../../styles/advanceStyles';

export const ShippingShipperScreenNative = ({ navigation }) => {
  return (
    <ScreenWrapperNative navigation={navigation} title='Shipping'>
      <View style={shippingStyle.webViewContainer}>
        <WebView
          source={{ uri: 'https://goo.gl/maps/VTcX3k3aFULF3rzK6' }}
          style={shippingStyle.mapDimensions}
        />
      </View>
    </ScreenWrapperNative>
  );
};
