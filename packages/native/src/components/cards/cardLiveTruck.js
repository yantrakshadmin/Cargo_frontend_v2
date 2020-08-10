import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { dateFormatter } from '@app/common/helpers/dateFomatter';
import { cardStyle } from '../../styles/cardsStyles';
import { margin, yantraColors } from '../../styles/default';
import { font, getFlex, row, userImageStyle, verifiedStyle } from '../../styles/advanceStyles';
import { Divider } from '../divider.component';
import { YantraButton } from '../button';
import { CustomModal } from '../customModal';
import { useUser } from '../../hooks/user';
import { onCallButtonClicked } from '../../helpers/shared';

export const CardLiveTruck = ({ truck, style, isSupplier }) => {
  const user = useUser();
  const [visible, setVisible] = useState(false);
  const contactUs = '+919560453585';
  const Verified = ({ status }) => (
    <View
      style={verifiedStyle.container(
        yantraColors.white,
        yantraColors.white,
        status ? yantraColors.success : yantraColors.danger,
      )}>
      <Text
        style={[font(15, 'normal'), { color: status ? yantraColors.success : yantraColors.danger }]}>
        {status ? 'Verified' : 'Not Verified'}
      </Text>
    </View>
  );

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
          {user.dp ? (
            <Image source={{ uri: user.dp }} style={userImageStyle} />
          ) : (
            <Icon name='user-circle' size={35} color='#444' />
          )}
        </View>
        <View style={getFlex(6, 'column', 'flex-start', 'flex-start')}>
          <Text style={font(13, 'bold')}>{truck.name}</Text>
        </View>
        {isSupplier ? (
          <View style={[getFlex(1, 'column', 'center', 'center')]} />
        ) : (
          <TouchableOpacity style={[getFlex(1, 'column')]} onPress={() => {}}>
            <Icon color={yantraColors.primary} size={20} name='share' />
          </TouchableOpacity>
        )}
        {isSupplier ? (
          <View style={[getFlex(4, 'column')]} />
        ) : (
          <YantraButton
            onPress={() => {
              setVisible(true);
            }}>
            Contact Details
          </YantraButton>
        )}
        <CustomModal title='Owner Details' visible={visible} setVisible={setVisible}>
          <View style={[cardStyle.container]}>
            <View style={[margin('padding').md, getFlex(1), { width: '100%' }]}>
              <View style={getFlex(1, 'row', 'flex-start', 'center')}>
                <Text style={font(15, 'bold')}>
                  Name :
                  <Text style={font(15, 'normal')}>
                    {` ${truck.owner.first_name} ${truck.owner.last_name}`}
                  </Text>
                </Text>
              </View>
              <View style={getFlex(1, 'row', 'flex-start', 'center')}>
                <Text style={font(15, 'bold')}>
                  Email :
                  <Text style={font(15, 'normal')}>{` xxxxxxxxxx@gmail.com`}</Text>
                </Text>
              </View>
              <View style={getFlex(1, 'row', 'flex-start', 'center')}>
                <Text style={font(15, 'bold')}>Verified :</Text>
                <Verified status={truck.owner.verified} />
                <View style={getFlex(1, 'row', 'flex-start', 'center')} />
                <View style={getFlex(1, 'row', 'flex-start', 'center')}>
                  <YantraButton
                    type='primary'
                    onPress={() => {
                      onCallButtonClicked(contactUs);
                    }}>
                    Contact
                  </YantraButton>
                </View>
              </View>
            </View>
          </View>
        </CustomModal>
      </View>
    </View>
  );
};
