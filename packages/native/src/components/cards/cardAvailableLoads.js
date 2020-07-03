import React,{ useState } from 'react';
import { View, Text } from 'react-native';
import { createBid } from '@app/common/api/supplier';
import { cardStyle } from '../../styles/cardsStyles';
import { margin } from '../../styles/default';
import { font, getFlex, row } from '../../styles/advanceStyles';
import { YantraButton } from '../button';
import { CustomModal } from '../customModal';
import { FormWrapper } from '../formWrapper';
import { bidCreateFormFields } from '../../formFields/createBidSupplier.formFields';

export const CardAvailableLoads = ({ load, style, reload }) => {
  const [visible,setVisible] = useState(false)
  return (
    <View style={[cardStyle.container, style]}>
      <View style={[row, margin('padding').md]}>
        <View style={[getFlex(2, 'column', 'center', 'center', 'paddingRight', 5)]}>
          <Text style={font(13, 'bold')}>Order Id</Text>
          <Text style={font(13, 'normal')}>{load.order_id}</Text>
        </View>
        <View style={getFlex(6, 'column', 'center', 'center')}>
          <Text style={font(13, 'bold')}>Shipment Type</Text>
          <Text style={font(13, 'normal')}>{load.shipment_type}</Text>
        </View>
        <YantraButton
          type='primary'
          onPress={() => {
            setVisible(true)
          }}>
          Bid Now
        </YantraButton>
      </View>
      <CustomModal title='Bid Now' visible={visible} setVisible={setVisible}>
        <FormWrapper
          fields={bidCreateFormFields}
          title='Bid Now'
          buttonLabel='Save'
          create={async ({ bid_amount, comments }) =>
            // eslint-disable-next-line no-return-await
            await createBid({ bid_amount,comments,id:load.id } )}
          onDone={()=>{setVisible(false);reload()}}
          onCancel={()=>{setVisible(false);reload()}}
          failure={{ create:'Error in adding bid',
            edit:'Error in editing bid' }}
          success={{ create:'Successfully added new bid',
            edit:'Successfully adding new bid' }} />
      </CustomModal>
    </View>
  );
};
