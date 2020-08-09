import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { GetTruckType } from '@app/common/helpers/getTruckType';
import { deleteAddress, deleteVendor } from '@app/common/api/shipper';
import { Toast } from '@ant-design/react-native';
import { cardStyle } from '../../styles/cardsStyles';
import { margin, yantraColors } from '../../styles/default';
import { font, getFlex, row } from '../../styles/advanceStyles';
import { Divider } from '../divider.component';
import { YantraButton } from '../button';
import { Tag } from '../tag';
import { ConfirmDialog } from '../ConfirmDialog';
import { CustomModal } from '../customModal';
import { FormVendorNative } from '../../forms/formVendor.native';
import { onCallButtonClicked } from '../../helpers/shared';

export const CardVendor = ({ vendor, reload, style }) => {
  const [visible, setVisible] = useState(false);
  const onDelete = async () => {
    try {
      await deleteVendor(vendor.id);
      reload();
      Toast.info('Successfully Deleted !!!', 1);
    } catch (e) {
      Toast.info('Error in Deleting !!!', 1);
    }
  };
  return (
    <View style={[cardStyle.container, style]}>
      <CustomModal visible={visible} setVisible={setVisible}>
        <FormVendorNative
          onDone={() => {
            reload();
            setVisible(false);
          }}
          id={vendor.id}
          onCancel={() => {
            setVisible(false);
            reload();
          }}
        />
      </CustomModal>
      <View style={[margin('padding').md, getFlex(1), { width: '100%' }]}>
        <View style={getFlex(1, 'row', 'space-between', 'center')}>
          <Text style={[font(17, 'bold'), getFlex(3)]}>{vendor.company}</Text>
          <View style={[getFlex(1, 'column', 'flex-start', 'flex-end')]}>
            <Text style={font(9)}>
              Id#
              {vendor.id}
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
                  ConfirmDialog('Delete', 'Press Ok to Delete Vendor', () => {}, onDelete)}>
                <Icon color={yantraColors.danger} size={20} name='trash' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Divider />
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            {vendor.street}
            {'\n'}
            {vendor.city}
            {', '}
            {vendor.state}
            {'\n'}
            {vendor.country}
            {','}
            {vendor.pin}
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'flex-start')}>
          <Text style={[font(17, 'normal'), getFlex(3)]}>{vendor.email}</Text>
        </View>
      </View>
      <View
        style={[
          getFlex(1, 'column', 'flex-start', 'flex-start'),
          margin('padding').sm,
          { width: '100%' },
        ]}>
        <Text
          style={[
            font(15, 'bold'),
            {
              backgroundColor: yantraColors.gray,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginBottom: 5,
            },
          ]}>
          Truck Type :
          {' '}
        </Text>
        <View style={[getFlex(1, 'row'), { flexWrap: 'wrap' }]}>
          {vendor.truck_type.map((truck) => (
            <Tag>{GetTruckType(truck)}</Tag>
          ))}
        </View>
      </View>
      <View
        style={[
          getFlex(1, 'column', 'flex-start', 'flex-start'),
          margin('padding').sm,
          { width: '100%' },
        ]}>
        <Text
          style={[
            font(15, 'bold'),
            {
              backgroundColor: yantraColors.gray,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginBottom: 5,
            },
          ]}>
          State Dealt In :
          {' '}
        </Text>
        <View style={[getFlex(1, 'row'), { flexWrap: 'wrap' }]}>
          {vendor.states_dealtin.map((state) => (
            <Tag bg={yantraColors.black} color={yantraColors.white} shadow={yantraColors.primary}>
              {state}
            </Tag>
          ))}
        </View>
      </View>
      <Divider />
      <View style={[row, margin('padding').md]}>
        <View style={[getFlex(2, 'column', 'center', 'center', 'paddingRight', 5)]}>
          <Icon name='user-circle' size={35} color='#444' />
        </View>
        <View style={getFlex(6, 'column', 'flex-start', 'flex-start')}>
          <Text style={font(13, 'bold')}>{vendor.name}</Text>
          <Text style={font(9)}>
            {vendor.primary_phone}
            {','}
            {vendor.secondary_phone}
          </Text>
        </View>
        <TouchableOpacity style={[getFlex(1, 'column', 'center', 'center')]} onPress={() => {}}>
          <Icon color={yantraColors.primary} size={20} name='share' />
        </TouchableOpacity>
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
            onCallButtonClicked(vendor.primary_phone);
          }}>
          Contact
        </YantraButton>
      </View>
    </View>
  );
};
