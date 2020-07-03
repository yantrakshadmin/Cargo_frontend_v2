import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { loadAPI } from '@app/common/helpers/api';
import { exp } from 'react-native-reanimated';
import { useAPI } from '../../hooks/api';
import { ScreenWrapperNative } from '../../components/screenWrapper.native';
import { CardSalesOrder } from '../../components/cards/cardSalesOrder';
import { row, signInStyle } from '../../styles/advanceStyles';
import { YantraButton } from '../../components/button';
import { margin, yantraColors } from '../../styles/default';

export const SalesOrderShipperScreen = ({ navigation, route }) => {
  const { data, loading, reload } = useAPI(`/orders/`, {});
  const [selected, setSelected] = useState([]);
  const [editingId, setEditingId] = useState(undefined);
  const [modalVisible, setModalVisible] = useState(false);

  const filteredDate = [
    {
      name: 'All Sales Orders',
      key: 'allSalesOrder',
      data,
      loading,
    },
    {
      name: 'On Hold FTL',
      key: 'onHoldFTL',
      data: (data || []).filter((row1) => row1.status === 'Hold' && row1.shipment_type === 'FTL'),
      loading,
      menu: [
        {
          title: 'Ready To Dispatch',
          onClick: async () => {
            // eslint-disable-next-line no-restricted-syntax
            for (const id of selected)
              try {
                const raw = data.find((row2) => row2.id === id);
                // eslint-disable-next-line no-await-in-loop
                console.log(raw,'Raw');
                const done = await loadAPI(`/edit-order/${id}/`, {
                  method: 'PATCH',
                  data: {
                    ...raw,
                    receiver_address:raw.receiver_address.id,
                    sender_address:raw.sender_address.id,
                    status: 'Active',
                  },
                });
                console.log(done, 'done rtd');
              } catch (e) {
                // ignore
                console.log(e, 'error in rtd');
              }

            reload();
          },
          type: 'primary',
        },
      ],
    },
    {
      name: 'On Hold PTL',
      key: 'onHoldPTL',
      data: (data || []).filter((row3) => row3.status === 'Hold' && row3.shipment_type === 'PTL'),
      loading,
      menu: [
        {
          title: 'Check Rates',
          onClick: () => {
            setModalVisible(true);
          },
          type: 'primary',
        },
      ],
    },
    {
      name: 'Assigned',
      key: 'Assigned',
      data: (data || []).filter((row4) => row4.status === 'Assigned'),
      loading,
    },
  ];
  const checkSelected = (id) => {
    return selected.some((item) => {
      return item === id;
    });
  };
  return (
    <ScreenWrapperNative
      header
      title='Sales Order'
      loading={loading}
      navigation={navigation}
      pullToRefresh
      onRefresh={() => {
        reload();
      }}>
      {filteredDate.map((Item) => {
        if (Item.name === route.name) {
          if (Item.data)
            return (
              <View>
                {Item.menu ? (
                  <View style={row}>
                    {Item.menu.map((action) => (
                      <YantraButton
                        type='primary'
                        containerStyle={margin('margin').md}
                        onPress={action.onClick}>
                        {action.title}
                      </YantraButton>
                    ))}
                  </View>
                ) : null}
                {Item.data.map((order) => (
                  <TouchableOpacity
                    activeOpacity={1}
                    onLongPress={() => {
                      if (selected.length === 0) {
                        setSelected([...selected, order.id]);
                      }
                    }}
                    onPress={() => {
                      if (selected[0]) {
                        if (checkSelected(order.id)) {
                          setSelected(selected.filter((item) => order.id !== item));
                        } else {
                          setSelected([...selected, order.id]);
                        }
                      }
                    }}>
                    <View
                      style={
                        checkSelected(order.id)
                          ? {
                            padding: 10,
                            elevation: 10,
                            backgroundColor: yantraColors.primary,
                            opacity: 0.5,
                          }
                          : null
                      }>
                      <CardSalesOrder order={order} />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            );
        }
        return null;
      })}
    </ScreenWrapperNative>
  );
};
