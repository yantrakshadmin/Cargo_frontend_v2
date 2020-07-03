import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { Button } from '@ant-design/react-native';
import { ScreenWrapperNative } from './screenWrapper.native';
import { margin } from '../styles/default';
import {YantraButton} from './button';

export const CustomModal = ({
  visible,
  setVisible,
  title,
  children,
  Appear,
  appearContainerStyle,
}) => {
  return (
    <View>
      {Appear ? (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setVisible(true);
          }}
          style={appearContainerStyle}>
          <Appear />
        </TouchableOpacity>
      ) : null}
      <Modal
        animationType='slide'
        onRequestClose={() => {
          setVisible(false);
        }}
        visible={visible}>
        <ScreenWrapperNative noHeader title={title}>
          {children}
          <View style={margin('padding').md}>
            <YantraButton
              onPress={() => {
                setVisible(false);
              }}>
              Back
            </YantraButton>
          </View>
        </ScreenWrapperNative>
      </Modal>
    </View>
  );
};
