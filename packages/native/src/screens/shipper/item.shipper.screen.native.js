import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScreenWrapperNative } from '../../components/screenWrapper.native';
import { CardItem } from '../../components/cards/cardItem';
import { useAPI } from '../../hooks/api';
import { CustomModal } from '../../components/customModal';
import { yantraColors } from '../../styles/default';
import { getFlex } from '../../styles/advanceStyles';
import { FormItemNative } from '../../forms/formItem.native';

export const ItemShipperScreenNative = ({ navigation }) => {
  const { data, loading, reload } = useAPI(`/items/`);
  console.log('inside item shipper');
  console.log({ data });
  const [visible, setVisible] = useState(false);
  return (
    <ScreenWrapperNative
      header
      title='Item'
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
          <FormItemNative
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
        <CardItem item={Item} reload={reload} />
      ))}
    </ScreenWrapperNative>
  );
};
