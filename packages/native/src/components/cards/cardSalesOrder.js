import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Grid, Modal } from '@ant-design/react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { shipperItemColumn } from '@app/common/columns/shipperItems.column';
import { font, getFlex, row, screenWrapperStyle, signInStyle } from '../../styles/advanceStyles';
import { margin, yantraColors } from '../../styles/default';
import { Divider } from '../divider.component';
import { cardStyle } from '../../styles/cardsStyles';
import { YantraButton } from '../button';
import { TableCreate } from '../tableCreate';
import { ScreenWrapperNative } from '../screenWrapper.native';

// {"id": 20,
//
//   "is_cod": false,
//
//   "order_id": "123",
//
//   "owner": 2,
//
//   "package": [{"breadth": 231, "height": 231, "id": 20, "length": 231, "prod_name": "123", "quantity": 123, "unit_price": 231, "weight": 132}, {"breadth": 456, "height": 456, "id": 21, "length": 456, "prod_name": "456", "quantity": 564, "unit_price": 564, "weight": 564}],
//
//   "receiver_address": {"city": "New Delhi", "company": "Asher", "country": "India", "email": "ashertoufeeq@gmail.com", "id": 1, "name": "Asher Toufeeq", "owner": 2, "phone": "09557807977", "pin": 110025, "state": "Delhi", "street": "D-20/9,Okhla Vihar Okhla"},
//
//   "sender_address": {"city": "Navi Mumbai", "company": "wfyewfdytewfdtyf", "country": "India", "email": "saxenasarthak72@gmail.com", "id": 4, "name": "Sarthak Saxena", "owner": 2, "phone": "07303216990", "pin": 603203, "state": "Assam", "street": "Jai Balaji CHS , nerul , sector 6"},
//   "shipment_type": "FTL", "status": "Hold"}

export const CardSalesOrder = ({ order, style }) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={[cardStyle.container, style]}>
      <View style={[margin('padding').md, getFlex(1), { width: '100%' }]}>
        <View style={getFlex(1, 'row', 'space-between', 'center')}>
          <Text style={font(15, 'bold')}>
            {order.sender_address.city} 
            {' '}
            <Text style={font(15, 'normal')}>to</Text>
            {' '}
            {order.receiver_address.city}
          </Text>
          <Text style={font(9)}>
            Id#
            {order.id}
          </Text>
        </View>
        <Divider />
        <View style={getFlex(1, 'row', 'flex-start', 'flex-start')}>
          <Text style={[font(17, 'bold'), getFlex(1)]}>Sender : </Text>
          <Text style={[font(17, 'normal'), getFlex(3)]}>
            {order.sender_address.name}
            {' '}
            -
            {order.sender_address.company}
            {'\n'}
            {order.sender_address.email}
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'flex-start')}>
          <Text style={[font(17, 'bold'), getFlex(1)]}>Receiver : </Text>
          <Text style={[font(17, 'normal'), getFlex(3)]}>
            {order.receiver_address.name}
            {' '}
            -
            {order.receiver_address.company}
            {'\n'}
            {order.receiver_address.email}
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'flex-start')}>
          <Text style={[font(17, 'bold'), getFlex(2)]}>Shipment Type : </Text>
          <Text style={[font(17, 'normal'), getFlex(3)]}>{order.shipment_type}</Text>
        </View>
      </View>
      <Divider />
      <View style={[row, margin('padding').md]}>
        <View style={[getFlex(2, 'column', 'center', 'center', 'paddingRight', 5)]}>
          <Icon name='user-circle' size={35} color='#444' />
        </View>
        <View style={getFlex(6, 'column', 'flex-start', 'flex-start')}>
          <Text style={font(13, 'bold')}>{order.sender_address.name}</Text>
          <Text style={font(9)}>{order.status}</Text>
        </View>
        <TouchableOpacity
          style={[getFlex(1, 'column', 'center', 'center')]}
          onPress={() => {
            setVisible(true);
          }}>
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
      <Modal
        title='Items'
        animationType='slide'
        onRequestClose={() => {
          setVisible(false);
        }}
        visible={visible}>
        <ScreenWrapperNative noHeader title='Items'>
          <TableCreate data={order.package} column={shipperItemColumn} />
          <YantraButton
            title='Back'
            type='primary'
            containerStyle={margin('margin').md}
            onPress={() => {
              setVisible(false);
            }}
          />
        </ScreenWrapperNative>
      </Modal>
    </View>
  );
};
