import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useAPI } from '../../hooks/api';
import { ScreenWrapperNative } from '../../components/screenWrapper.native';
import { row } from '../../styles/advanceStyles';
import { YantraButton } from '../../components/button';
import { margin, yantraColors } from '../../styles/default';
import { CardSalesOrder } from '../../components/cards/cardSalesOrder';

export const FreightExchangeShipperScreenNative = ({ navigation, route }) => {
  const { data, loading, reload } = useAPI(`/orders/`, {});
  const [selected, setSelected] = useState([]);
  const checkSelected = (id) => {
    return selected.some((item) => {
      return item === id;
    });
  };

  const filteredData = [
    {
      name: 'Bid Not Assigned',
      key: 'not_assigned',
      data: (data || []).filter((row1) => row1.status !== 'Active'),
      loading,
    },
    {
      name: 'Bid Assigned',
      key: 'assigned',
      data: (data || []).filter((row2) => row2.status === 'Active'),
      loading,
    },
  ];

  return (
    <ScreenWrapperNative
      header
      title='Freight Exchange'
      loading={loading}
      navigation={navigation}
      pullToRefresh
      onRefresh={() => {
        reload();
      }}>
      {filteredData.map((Item) => {
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
                {console.log(Item.data, Item)}
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
