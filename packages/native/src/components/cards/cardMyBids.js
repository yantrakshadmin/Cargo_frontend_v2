import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { dateFormatter } from '@app/common/helpers/dateFomatter';
import { cardStyle } from '../../styles/cardsStyles';
import { margin, yantraColors } from '../../styles/default';
import { font, getFlex, row, userImageStyle } from '../../styles/advanceStyles';
import { Divider } from '../divider.component';
import { YantraButton } from '../button';
import { CustomModal } from '../customModal';
import { useUser } from '../../hooks/user';

export const CardMyBids = ({ bid, style, data, index }) => {
  const [bids, setBids] = useState([{ bid_amount: 0, bid_date: '' }]);
  const [visible, setVisible] = useState(true);
  const user = useUser();

  const getViewBidData = (array, id) => {
    return array.filter((i) => i.order.id === id);
  };

  useEffect(() => {
    setBids(getViewBidData(data, data[index].order.id));
  }, [data, index]);

  return (
    <View style={[cardStyle.container, style]}>
      <View style={[margin('padding').md, getFlex(1), { width: '100%' }]}>
        <View style={getFlex(1, 'row', 'flex-end', 'center')}>
          <View style={[getFlex(1, 'column', 'flex-start', 'flex-end')]}>
            <Text style={font(9)}>
              Id#
              {bid.id}
            </Text>
          </View>
        </View>
        <Divider />
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Sender Address :
            {' '}
            <Text style={font(15, 'normal')}>
              {bid.order.sender_address.city}
              {','}
              {bid.order.sender_address.state}
            </Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Receiver Address :
            {' '}
            <Text style={font(15, 'normal')}>
              {bid.order.receiver_address.city}
              {','}
              {bid.order.receiver_address.state}
            </Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Bid Status :
            {' '}
            <Text style={font(15, 'normal')}>
              {bid.isConfirmed ? 'Confirmed' : 'Not Confirmed'}
            </Text>
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
          <Text style={font(15, 'bold')}>
            Offered Price :
            {'  ₹ '}
            <Text style={font(15, 'normal')}>{bid.bid_amount}</Text>
          </Text>
          <Text style={font(11, 'normal')}>{bid.comments}</Text>
        </View>
        <YantraButton
          type='primary'
          onPress={() => {
            setVisible(true);
          }}>
          View
        </YantraButton>
      </View>
      <CustomModal visible={visible} setVisible={setVisible} title='Bids'>
        <View style={[cardStyle.container, getFlex(1, 'column'), margin('padding').md]}>
          <Text style={font(15, 'bold')}>Recent Bids</Text>
          <View style={getFlex(1, 'row', 'space-between')}>
            <Text>{dateFormatter(bids[0].bid_date)}</Text>
            <Text>{bids[0].bid_amount}</Text>
          </View>
          <Divider />
          <Text style={font(15, 'bold')}>Previous Bid</Text>
          {bids.slice(1, bids.length).map((i) => (
            <View style={getFlex(1, 'row', 'space-between')}>
              <Text>{dateFormatter(i.bid_date)}</Text>
              <Text>{i.bid_amount}</Text>
            </View>
          ))}
        </View>
      </CustomModal>
    </View>
  );
};
