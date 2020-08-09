import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { dateFormatter } from '@app/common/helpers/dateFomatter';
import { cardStyle } from '../../styles/cardsStyles';
import { margin, yantraColors } from '../../styles/default';
import { font, getFlex, row } from '../../styles/advanceStyles';
import { Divider } from '../divider.component';
import { YantraButton } from '../button';

export const CardLiveTruck = ({ truck, style }) => {
  console.log(truck, 'truck');
  return (
    <View style={[cardStyle.container, style]}>
      <View style={[margin('padding').md, getFlex(1), { width: '100%' }]}>
        <View style={getFlex(1, 'row', 'space-between', 'center')}>
          <Text style={font(15, 'bold')}>
            {truck.origin} 
            {' '}
            <Text style={font(15, 'normal')}>to</Text> 
            {' '}
            {truck.destination}
          </Text>
          <View style={[getFlex(1, 'column', 'flex-start', 'flex-end')]}>
            <Text style={font(9)}>
              Id#
              {truck.id}
            </Text>
          </View>
        </View>
        <Divider />
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Offered Price :
            {'  ₹ '}
            <Text style={font(15, 'normal')}>{truck.offered_price}</Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Scheduled Date :
            {' '}
            <Text style={font(15, 'normal')}>{dateFormatter(truck.scheduled_date)}</Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Truck Type : 
            {' '}
            <Text style={font(15, 'normal')}>{truck.truck_type}</Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Total Trucks : 
            {' '}
            <Text style={font(15, 'normal')}>{truck.total_trucks}</Text>
          </Text>
        </View>
      </View>
      <Divider />
      <View style={[row, margin('padding').md]}>
        <View style={[getFlex(2, 'column', 'center', 'center', 'paddingRight', 5)]}>
          <Icon name='user-circle' size={35} color='#444' />
        </View>
        <View style={getFlex(6, 'column', 'flex-start', 'flex-start')}>
          <Text style={font(13, 'bold')}>{truck.name}</Text>
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
            console.log('click');
          }}>
          Contact
        </YantraButton>
      </View>
    </View>
  );
};
