import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useAPI } from '../../../hooks/api';
import { ScreenWrapperNative } from '../../../components/screenWrapper.native';
import { CustomModal } from '../../../components/customModal';
import { yantraColors } from '../../../styles/default';
import { getFlex } from '../../../styles/advanceStyles';
import { CardTripManagement } from '../../../components/cards/cardTripManagement';
import { FormTripManagement } from '../../../forms/formTripManagement.native';

export const TripManagementScreenNative = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const { data, loading, reload } = useAPI(`trip-list/`);
  return (
    <ScreenWrapperNative
      header
      title='Trip Management'
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
          <FormTripManagement
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
        <CardTripManagement reload={reload} trip={Item} />
      ))}
    </ScreenWrapperNative>
  );
};
