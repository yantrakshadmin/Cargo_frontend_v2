import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { loadAPI } from '@app/common/helpers/api';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useAPI } from '../../hooks/api';
import { ScreenWrapperNative } from '../../components/screenWrapper.native';
import { CardSalesOrder } from '../../components/cards/cardSalesOrder';
import { getFlex, row } from '../../styles/advanceStyles';
import { YantraButton } from '../../components/button';
import { margin, yantraColors } from '../../styles/default';
import { CustomModal } from '../../components/customModal';
import { FormSalesOrder } from '../../forms/formSalesOrder.native';

export const SalesOrderShipperScreen = ({ navigation, route }) => {
  const { data, loading, reload } = useAPI(`/orders/`, {});
  const [selected, setSelected] = useState([]);
  const [editingId, setEditingId] = useState(undefined);
  const [visible, setVisible] = useState(false);

  const filteredDate = [
    {
      name: 'All Sales Orders',
      key: 'allSalesOrder',
      data,
      loading,
    },
    {
      name: 'Pending',
      key: 'pending',
      data: (data || []).filter((row1) => row1.status === 'Hold'),
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
                const done = await loadAPI(`/edit-order/${id}/`, {
                  method: 'PATCH',
                  data: {
                    ...raw,
                    receiver_address: raw.receiver_address.id,
                    sender_address: raw.sender_address.id,
                    status: 'Active',
                  },
                });
              } catch (e) {
                // ignore
              }

            reload();
          },
          type: 'primary',
        },
      ],
    },
    {
      name: 'Planned',
      key: 'planned',
      data: (data || []).filter((row4) => row4.status === 'Active'),
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
      }}
      FloatingComponent={() => (
        <CustomModal
          visible={visible}
          setVisible={setVisible}
          Appear={() => (
            <View
              style={[
                { width: 50, height: 50, backgroundColor: yantraColors.primary, borderRadius: 25 },
                getFlex(1, 'row', 'center', 'center'),
              ]}>
              <Icon color={yantraColors.white} size={20} name='plus' />
            </View>
          )}>
          <FormSalesOrder
            onDone={() => {
              reload();
              setVisible(false);
            }}
            onCancel={() => {
              reload();
              setVisible(false);
            }}
          />
        </CustomModal>
      )}>
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
