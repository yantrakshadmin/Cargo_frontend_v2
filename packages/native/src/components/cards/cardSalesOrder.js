import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { shipperItemColumn } from '@app/common/columns/shipperItems.column';
import { useAPI } from '../../hooks/api';
import { font, getFlex, row } from '../../styles/advanceStyles';
import { margin, yantraColors } from '../../styles/default';
import { Divider } from '../divider.component';
import { cardStyle } from '../../styles/cardsStyles';
import { YantraButton } from '../button';
import { TableCreate } from '../tableCreate';
import { ScreenWrapperNative } from '../screenWrapper.native';
import { CustomModal } from '../customModal';
import { CardViewBids } from './cardViewBids';

export const CardSalesOrder = ({ order, style }) => {
  const [visible, setVisible] = useState(false);
  const [visibleBids, setVisibleBids] = useState(false);
  const { data, loading, reload } = useAPI(`/bids/${order.id}`, {});
  console.log(data,'bid')

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
          onPress={() => {
            setVisibleBids(true);
          }}>
          View Bids
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
      <CustomModal visible={visibleBids} setVisible={setVisibleBids} title='View Bids'>
        {(data||[]).map((item,index)=>(<CardViewBids key={index.toString()} bid={item} />))}
      </CustomModal>
    </View>
  );
};
