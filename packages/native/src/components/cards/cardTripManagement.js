import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Toast } from '@ant-design/react-native';
import { dateFormatter } from '@app/common/helpers/dateFomatter';
import { deleteTripManagement } from '@app/common/api/supplier';
import { cardStyle } from '../../styles/cardsStyles';
import { getFlex, font, row, userImageStyle } from '../../styles/advanceStyles';
import { margin, yantraColors } from '../../styles/default';
import { Divider } from '../divider.component';
import { YantraButton } from '../button';
import { CustomModal } from '../customModal';
import { ConfirmDialog } from '../ConfirmDialog';
import { FormTripManagement } from '../../forms/formTripManagement.native';
import { onCallButtonClicked } from '../../helpers/shared';
import { useUser } from '../../hooks/user';

export const CardTripManagement = ({ trip, style, reload }) => {
  const user = useUser();
  const [visible, setVisible] = useState(false);

  const onDelete = async () => {
    try {
      await deleteTripManagement(trip.id);
      reload();
      Toast.info('Successfully Deleted !!!', 1);
    } catch (e) {
      Toast.info('Error in Deleting !!!', 1);
    }
  };

  return (
    <View style={[cardStyle.container, style || null]}>
      <CustomModal visible={visible} setVisible={setVisible}>
        <FormTripManagement
          onDone={() => {
            reload();
            setVisible(false);
          }}
          id={trip.id}
          onCancel={() => {
            setVisible(false);
            reload();
          }}
        />
      </CustomModal>
      <View style={[margin('padding').md, getFlex(1), { width: '100%' }]}>
        <View style={getFlex(1, 'row', 'space-between', 'center')}>
          <Text style={[font(17, 'bold'), getFlex(3)]}>{trip.vehicle_number}</Text>
          <View style={[getFlex(1, 'column', 'flex-start', 'flex-end')]}>
            <Text style={font(9)}>
              Id#
              {trip.id}
            </Text>
            <View style={getFlex(1, 'row', 'flex-end', 'center')}>
              <TouchableOpacity
                style={[margin('margin').md]}
                onPress={() => {
                  setVisible(true);
                }}>
                <Icon color={yantraColors.primary} size={20} name='edit' />
              </TouchableOpacity>
              <TouchableOpacity
                style={[margin('margin-vertical').md]}
                onPress={() =>
                  ConfirmDialog('Delete', 'Press Ok to Delete trip', () => {}, onDelete)}>
                <Icon color={yantraColors.danger} size={20} name='trash' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Divider />
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Invoice Number : 
            {' '}
            <Text style={font(15, 'normal')}>{trip.invoice_number}</Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Vehicle Source : 
            {' '}
            <Text style={font(15, 'normal')}>{trip.vehicle_source}</Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Date : 
            {' '}
            <Text style={font(15, 'normal')}>{dateFormatter(trip.date)}</Text>
          </Text>
        </View>
      </View>
      <Divider />
      <View style={[row, margin('padding').md]}>
        <View style={[getFlex(2, 'column', 'center', 'center', 'paddingRight', 5)]}>
          {user.dp ? (
            <Image source={{ uri: user.dp }} style={userImageStyle} />
          ) : (
            <Icon name='user-circle' size={35} color='#444' />
          )}
        </View>
        <View style={getFlex(6, 'column', 'flex-start', 'flex-start')}>
          <Text style={font(13, 'bold')}>{trip.driver_name}</Text>
        </View>
        <YantraButton
          Icon={(
            <Icon
              color={yantraColors.success}
              size={13}
              name='phone'
              style={[{ transform: [{ rotate: '90deg' }] }]}
            />
          )}
          onPress={() => {
            onCallButtonClicked(trip.driver_number);
          }}>
          Contact
        </YantraButton>
      </View>
    </View>
  );
};
