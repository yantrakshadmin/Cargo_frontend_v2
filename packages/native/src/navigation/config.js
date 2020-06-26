import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { yantraColors } from '../styles/default';

export const drawerConfig = {
  drawerType: 'front',
  edgeWidth: 300,
  hideStatusBar: false,
  drawerBackgroundColor: yantraColors.white,
  overlayColor: 'rgba(0,0,0,.5)',
  contentOptions: {
    activeTintColor: yantraColors.white,
    activeBackgroundColor: yantraColors.primary,
    itemsContainerStyle: { paddingVertical: 0 },
  },
  drawerPosition: 'left',
  defaultNavigationOptions: {
    header: null,
  },
  gesturesEnabled: true,
  transitionConfig:
    Platform.OS === 'android'
      ? () => ({
        screenInterpolator: (sceneProps) => {
          const { position, layout, scene } = sceneProps;
          const thisSceneIndex = scene.index;
          const width = layout.initWidth;
          const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
            outputRange: [width, 0, 0],
          });
          return { transform: [{ translateX }] };
        },
      })
      : null,
};

const keys = [
  { name: 'Bid Assigned', icon: 'rocket' },
  { name: 'Bid Not Assigned', icon: 'times-circle' },
  { name: 'Address', icon: 'address-card' },
  { name: 'Vendor', icon: 'user' },
  { name: 'Item', icon: 'box' },
  { name: 'On Hold FTL', icon: 'pause-circle' },
  { name: 'On Hold PTL', icon: 'pause-circle' },
  { name: 'All Sales Orders', icon: 'boxes' },
  { name: 'Assigned', icon: 'rocket' },
];

export const tabConfigs = {
  screenOptions: ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const IconComponent = Icon;
      let iconName;

      keys.map((key) => {
        if (route.name === key.name) {
          iconName = key.icon;
        }
        return iconName;
      });
      return <Icon name={iconName} size={size} color={color} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: yantraColors.primary,
    inactiveTintColor: '#444',
    labelStyle: { fontSize: 10 },
  },
};
