import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from '@ant-design/react-native';
import { cardStyle } from '../../styles/cardsStyles';
import { font, getFlex, row } from '../../styles/advanceStyles';
import { margin, yantraColors } from '../../styles/default';
import { YantraButton } from '../button';
import { Divider } from '../divider.component';
import { CustomModal } from '../customModal';
import { CardTransportDirectoryModal } from './cardTransportDirectoryModal';

export const CardTransportDirectory = ({ transporter, style }) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={[cardStyle.container, style]}>
      <View style={[margin('padding').md, getFlex(1), { width: '100%' }]}>
        <View style={getFlex(1, 'row', 'space-between', 'center')}>
          <Text style={font(15, 'bold')}>
            {transporter['Company Name']}
            {','}
            <Text style={font(15, 'normal')}> 
              {' '}
              {transporter['Pin Code']}
            </Text>
          </Text>
          <Text style={font(9)}>
            Id#
            {transporter.Id}
          </Text>
        </View>
        <Text style={font(15, 'normal')}>{transporter.Services}</Text>
      </View>
      <Divider />
      <View style={getFlex(1, 'row', 'center', 'center', 'padding', 5)}>
        <YantraButton
          type='primary'
          onPress={() => {
            setVisible(true);
          }}>
          View Details
        </YantraButton>
        <CustomModal visible={visible} title={transporter['Company Name']} setVisible={setVisible}>
          <View>
            <CardTransportDirectoryModal transporter={transporter} />
          </View>
        </CustomModal>
      </View>
    </View>
  );
};
