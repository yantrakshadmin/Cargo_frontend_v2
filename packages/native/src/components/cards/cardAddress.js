import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { deleteAddress } from '@app/common/api/shipper';
import { Toast } from '@ant-design/react-native';
import { cardStyle } from '../../styles/cardsStyles';
import { getFlex, font, row } from '../../styles/advanceStyles';
import { margin, yantraColors } from '../../styles/default';
import { Divider } from '../divider.component';
import { YantraButton } from '../button';
import { CustomModal } from '../customModal';
import { FormAddressNative } from '../../forms/formAddress.native';
import { ConfirmDialog } from '../ConfirmDialog';

export const CardAddress = ({ address, style,reload }) => {
  const [visible,setVisible] = useState(false)

  const onDelete = async ()=>{

    try{
      await deleteAddress(address.id);
      reload()
      Toast.info('Successfully Deleted !!!', 1);
    }
    catch (e) {
      Toast.info('Error in Deleting !!!', 1);
    }
  }

  return (
    <View style={[cardStyle.container, style || null]}>
      <CustomModal
        visible={visible}
        setVisible={setVisible}>
        <FormAddressNative
          onDone={()=>{reload(); setVisible(false)}}
          id={address.id}
          onCancel={()=>{setVisible(false); reload()}}  />
      </CustomModal>
      <View style={[margin('padding').md, getFlex(1), { width: '100%' }]}>
        <View style={getFlex(1, 'row', 'space-between', 'center')}>
          <Text style={[font(17, 'bold'), getFlex(3)]}>{address.company}</Text>
          <View style={[getFlex(1, 'column', 'flex-start', 'flex-end')]}>
            <Text style={font(9)}>
              Id#
              {address.id}
            </Text>
            <View style={getFlex(1, 'row', 'flex-end', 'center')}>
              <TouchableOpacity style={[margin('margin').md]} onPress={() => {setVisible(true)}}>
                <Icon color={yantraColors.primary} size={20} name='edit' />
              </TouchableOpacity>
              <TouchableOpacity
                style={[margin('margin-vertical').md]}
                onPress={() => (
                  ConfirmDialog(
                    'Delete',
                    'Press Ok to Delete Address',
                    ()=>{},
                    onDelete))}>
                <Icon color={yantraColors.danger} size={20} name='trash' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Divider />
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            {address.street}
            {'\n'}
            {address.city}
            {', '}
            {address.state}
            {'\n'}
            {address.country}
            {','}
            {address.pin}
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'flex-start')}>
          <Text style={[font(17, 'normal'), getFlex(3)]}>{address.email}</Text>
        </View>
      </View>
      <Divider />
      <View style={[row, margin('padding').md]}>
        <View style={[getFlex(2, 'column', 'center', 'center', 'paddingRight', 5)]}>
          <Icon name='user-circle' size={35} color='#444' />
        </View>
        <View style={getFlex(6, 'column', 'flex-start', 'flex-start')}>
          <Text style={font(13, 'bold')}>{address.name}</Text>
          <Text style={font(9)}>{address.phone}</Text>
        </View>
        <TouchableOpacity style={[getFlex(1, 'column', 'center', 'center')]} onPress={() => {}}>
          <Icon color={yantraColors.primary} size={20} name='share' />
        </TouchableOpacity>
        <YantraButton
          Icon={<Icon color={yantraColors.success} size={13} name='phone' />}
          onPress={() => {
            console.log('click');
          }}>
          Contact
        </YantraButton>
      </View>
    </View>
  );
};
