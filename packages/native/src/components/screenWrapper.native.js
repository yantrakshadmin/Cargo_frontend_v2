import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  RefreshControl,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import logo from '../assets/yantrakshLogo.png';
import { yantraColors } from '../styles/default';
import { screenWrapperStyle } from '../styles/advanceStyles';

export const ScreenWrapperNative = ({
  noHeader,
  pullToRefresh,
  title,
  children,
  navigation,
  style,
  loading,
  onRefresh,
  rightButton,
}) => {
  let header;
  if (!noHeader) {
    header = (
      <View style={screenWrapperStyle.headerContainer}>
        <View style={screenWrapperStyle.searchBar}>
          <TouchableOpacity
            style={screenWrapperStyle.sideIcons}
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <Icon name='bars' size={30} color={yantraColors.primary} />
          </TouchableOpacity>
          <View style={screenWrapperStyle.logoContainer}>
            <Image source={logo} style={screenWrapperStyle.logo} />
          </View>
          {rightButton || <View style={screenWrapperStyle.sideIcons} />}
        </View>
      </View>
    );
  }
  return (
    <View style={[screenWrapperStyle.container, style]}>
      {header}
      <ScrollView
        style={screenWrapperStyle.subContainerScrollView}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // stickyHeaderIndices={[1]}
        refreshControl={
          pullToRefresh ? (
            <RefreshControl
              refreshing={loading}
              onRefresh={() => {
                onRefresh();
              }}
            />
          ) : null
        }>
        <StatusBar animated barStyle='light-content' />
        <View>
          <Text style={screenWrapperStyle.title}>{title}</Text>
        </View>
        <View style={screenWrapperStyle.childrenContainer}>{children}</View>
      </ScrollView>
    </View>
  );
};
