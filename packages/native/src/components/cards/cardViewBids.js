import React, { useState } from 'react';
import { View, Text ,ActivityIndicator} from 'react-native';
import { loadAPI } from '@app/common/helpers/api';
import { Toast } from '@ant-design/react-native';
import { cardStyle } from '../../styles/cardsStyles';
import { margin, yantraColors } from '../../styles/default';
import { font, getFlex, row } from '../../styles/advanceStyles';
import { Divider } from '../divider.component';
import { YantraButton } from '../button';

export const CardViewBids = ({ bid, style,reload }) => {
  const [loading,setLoading] = useState(false)
  return (
    <View style={[cardStyle.container, style]}>
      <View style={[margin('padding').md, getFlex(1), { width: '100%' }]}>
        <View style={getFlex(1, 'row', 'space-between', 'center')}>
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
            Supplier Name :
            {' '}
            <Text style={font(15, 'normal')}>
              {bid.supplier.first_name}
              {' '}
              {bid.supplier.last_name}
            </Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Bid Amount :
            {'  ₹ '}
            <Text style={font(15, 'normal')}>{bid.bid_amount}</Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Comment :
            {' '}
            <Text style={font(15, 'normal')}>{bid.comments}</Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Status :
            {' '}
            <Text style={font(15, 'normal')}>
              {bid.is_confirmed?'Confirmed':'Not Confirmed'}
            </Text>
          </Text>
        </View>
      </View>
      <Divider />
      <View style={[row, margin('padding').md]}>
        <YantraButton
          type='primary'
          Icon={loading?<ActivityIndicator size={20} color={yantraColors.white} />:null}
          disabled={bid.is_confirmed}
          onPress={async()=> {
            setLoading(true)
            try{
              await loadAPI(`confirmbid/${row.id}/`,{ method:'PATCH' })
              reload()
              setLoading(false)
              Toast.info( 'Bid Confirmed');
            }
            catch (e) {
              setLoading(false)
              Toast.info( 'Error in confirming');
            }}}>
          Confirm
        </YantraButton>
      </View>
    </View>
  );
};
