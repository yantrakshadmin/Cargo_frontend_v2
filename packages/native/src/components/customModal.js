import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { Button } from '@ant-design/react-native';
import { ScreenWrapperNative } from './screenWrapper.native';
import { margin } from '../styles/default';

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
            <Button
              type='primary'
              onPress={() => {
                setVisible(false);
              }}>
              Back
            </Button>
          </View>
        </ScreenWrapperNative>
      </Modal>
    </View>
  );
};
