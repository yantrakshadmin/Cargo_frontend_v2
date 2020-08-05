import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useAPI } from '../../hooks/api';
import { ScreenWrapperNative } from '../../components/screenWrapper.native';
import { CardAddress } from '../../components/cards/cardAddress';
import { CustomModal } from '../../components/customModal';
import { yantraColors } from '../../styles/default';
import { getFlex } from '../../styles/advanceStyles';
import { FormAddressNative } from '../../forms/formAddress.native';

export const AddressShipperScreenNative = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const { data, loading, reload } = useAPI(`/address/`);
  console.log({ data });
  return (
    <ScreenWrapperNative
      header
      title='Address'
      loading={loading}
      navigation={navigation}
      pullToRefresh
      FloatingComponent={() => (
        <CustomModal
          visible={visible}
          setVisible={setVisible}
          Appear={() => (
            <View
              style={[
                { width: 50, height: 50, backgroundColor: yantraColors.primary, borderRadius: 25 },
                getFlex(1, 'row', 'center', 'center'),
              ]}>
              <Icon color={yantraColors.white} size={20} name='plus' />
            </View>
          )}>
          <FormAddressNative
            onDone={() => {
              reload();
              setVisible(false);
            }}
            onCancel={() => {
              reload();
              setVisible(false);
            }}
          />
        </CustomModal>
      )}
      onRefresh={() => {
        reload();
      }}>
      {(data || []).map((Item) => (
        <CardAddress reload={reload} address={Item} />
      ))}
    </ScreenWrapperNative>
  );
};
