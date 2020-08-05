import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { cardStyle } from '../../styles/cardsStyles';
import { margin, yantraColors } from '../../styles/default';
import { font, getFlex } from '../../styles/advanceStyles';
import { YantraButton } from '../button';
import { onCallButtonClicked } from '../../helpers/shared';

// [Sun Jun 28 2020 11:34:21.190]  LOG      {
// "Address": null, "City": "Ajmer",
// "Company Name": "Dinesh", "Contact Number 1": null,
// "Contact Number 2": null, "Contact Number 3": null,
// "Contact Number 4": null, "Contact Person Name": null,
// "Id": 24661, "Pin Code": null,
// "Primary Contact Number": "9414442481",
// "Primary Email": "dinesh46@gmail.com",
// "Secondary Email": null,
// "Services": null, "State": "Rajasthan", "index": 24659}

export const CardTransportDirectoryModal = ({ transporter, style }) => {
  console.log({ transporter });
  return (
    <View style={[cardStyle.container, style]}>
      <View style={[margin('padding').md, getFlex(1), { width: '100%' }]}>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Services :
            {'  '}
            <Text style={font(15, 'normal')}>{transporter.Services}</Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Contact Person Name :
            {'  '}
            <Text style={font(15, 'normal')}>{transporter['Contact Person Name']}</Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            Email :
            {'  '}
            <Text style={font(15, 'normal')}>{transporter['Primary Email']}</Text>
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'center')}>
          <Text style={font(15, 'bold')}>
            {transporter.Address}
            {'\n'}
            {transporter.City}
            {', '}
            {transporter.State}
            {','}
            {transporter['Pin Code']}
          </Text>
        </View>
        <View style={getFlex(1, 'row', 'flex-start', 'flex-start')}>
          <Text style={[getFlex(2), font(15, 'bold')]}>Contact Numbers : </Text>
          <Text style={[getFlex(3), font(15, 'normal')]}>
            {transporter['Primary Contact Number']}
            {transporter['Contact Number 1'] ? '\n' : null}
            {transporter['Contact Number 1']}
            {transporter['Contact Number 2'] ? '\n' : null}
            {transporter['Contact Number 2']}
            {transporter['Contact Number 3'] ? '\n' : null}
            {transporter['Contact Number 3']}
            {transporter['Contact Number 4'] ? '\n' : null}
            {transporter['Contact Number 4']}
          </Text>
          <YantraButton
            type='primary'
            color={yantraColors.primary}
            Icon={(
              <Icon
                color={yantraColors.white}
                size={13}
                name='phone'
                style={[{ transform: [{ rotate: '90deg' }] }]}
              />
            )}
            onPress={() => onCallButtonClicked(transporter['Primary Contact Number'])}>
            Contact
          </YantraButton>
        </View>
      </View>
    </View>
  );
};
