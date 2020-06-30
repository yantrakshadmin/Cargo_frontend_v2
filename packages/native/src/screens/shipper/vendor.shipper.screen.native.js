import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScreenWrapperNative } from '../../components/screenWrapper.native';
import { CardVendor } from '../../components/cards/cardVendor';
import { useAPI } from '../../hooks/api';
import { CustomModal } from '../../components/customModal';
import { yantraColors } from '../../styles/default';
import { getFlex } from '../../styles/advanceStyles';
import { FormVendorNative } from '../../forms/formVendor.native';

export const VendorShipperScreenNative = ({ navigation }) => {
  const { data, loading, reload } = useAPI(`/vendors/`);
  const [visible, setVisible] = useState(false);

  return (
    <ScreenWrapperNative
      header
      title='Vendor'
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
          <FormVendorNative />
        </CustomModal>
      )}
      onRefresh={() => {
        reload();
      }}>
      {(data || []).map((Item) => (
        <CardVendor vendor={Item} />
      ))}
    </ScreenWrapperNative>
  );
};
