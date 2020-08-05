import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { deleteItem } from '@app/common/api/shipper';
import { Toast } from '@ant-design/react-native';
import { cardStyle } from '../../styles/cardsStyles';
import { getFlex, font, row } from '../../styles/advanceStyles';
import { margin, yantraColors } from '../../styles/default';
import { Divider } from '../divider.component';
import { CustomModal } from '../customModal';
import { FormItemNative } from '../../forms/formItem.native';
import { ConfirmDialog } from '../ConfirmDialog';

export const CardItem = ({ item, style, reload }) => {
  const [visible, setVisible] = useState(false);

  const onDelete = async () => {
    try {
      await deleteItem(item.id);
      reload();
      Toast.info('Successfully Deleted !!!', 1);
    } catch (e) {
      Toast.info('Error in Deleting !!!', 1);
    }
  };

  return (
    <View style={[cardStyle.container, style || null]}>
      <CustomModal visible={visible} setVisible={setVisible}>
        <FormItemNative
          onDone={() => {
            reload();
            setVisible(false);
          }}
          id={item.id}
          onCancel={() => {
            setVisible(false);
            reload();
          }}
        />
      </CustomModal>
      <View style={[margin('padding').md, getFlex(1), { width: '100%' }]}>
        <View style={getFlex(1, 'row', 'space-between', 'center')}>
          <Text style={[font(17, 'bold'), getFlex(3)]}>{item.prod_name.toUpperCase()}</Text>
          <View style={[getFlex(1, 'column', 'flex-start', 'flex-end')]}>
            <Text style={font(9)}>
              Id#
              {item.id}
            </Text>
            <View style={getFlex(1, 'row', 'flex-end', 'center')}>
              <TouchableOpacity
                style={[margin('margin').md]}
                onPress={() => {
                  setVisible(true);
                }}>
                <Icon color={yantraColors.primary} size={20} name='edit' />
              </TouchableOpacity>
              <TouchableOpacity
                style={[margin('margin-vertical').md]}
                onPress={() =>
                  ConfirmDialog('Delete', 'Press Ok to Delete Address', () => {}, onDelete)}>
                <Icon color={yantraColors.danger} size={20} name='trash' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Divider />
        <View style={getFlex(1, 'column', 'flex-start')}>
          <View style={[getFlex(1, 'row', 'flex-start', 'center'), margin('margin').sm]}>
            <Icon name='dollar-sign' size={15} color='#444' />
            <Text style={font(15, 'bold')}>
              {'  Price :  '}
              {item.unit_price}
            </Text>
          </View>
          <View style={[getFlex(1, 'row', 'flex-start'), margin('margin').sm]}>
            <Text style={font(15, 'bold')}>
              {'Weight :  '}
              {item.weight}
            </Text>
          </View>
          <View style={[getFlex(1, 'row', 'flex-start'), margin('margin').sm]}>
            <Text style={font(15, 'bold')}>
              {'Height :  '}
              {item.weight}
            </Text>
          </View>
          <View style={[getFlex(1, 'row', 'flex-start'), margin('margin').sm]}>
            <Text style={font(15, 'bold')}>
              {'Breadth :  '}
              {item.breadth}
              {'     '}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
