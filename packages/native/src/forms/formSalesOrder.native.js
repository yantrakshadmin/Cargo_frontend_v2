import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { createOrders, editOrders, retrieveOrders } from '@app/common/api/shipper';
import { useAPI } from '../hooks/api';
import {
  column,
  container,
  font,
  getFlex,
  screenWrapperStyle,
  signInStyle,
} from '../styles/advanceStyles';
import { Divider } from '../components/divider.component';
import { FormItemCreaterNative } from '../components/formItemCreaterNative';
import { useHandelForm } from '../hooks/form';
import { salesOrderFormFields } from '../formFields/saleOrdersShipper.formFields';
import { YantraButton } from '../components/button';

export const FormSalesOrder = ({ onDone, onCancel, id }) => {
  const { data: addresses, loading: orderLoading } = useAPI(`/address/`);
  const { data: items, loading: itemsLoading } = useAPI(`/items/`);
  const [apiData, setApiData] = useState({
    addresses: [],
    items: [],
  });

  useEffect(() => {
    setApiData({
      addresses: (addresses || []).map((address) => ({
        value: address.id,
        label: `${address.name} | ${address.company} | ${address.city} | ${address.pin}`,
      })),
      items: (items || []).map((item) => ({ value: item, label: item.prod_name })),
    });
  }, [addresses, items]);

  const createState = () => {
    let obj;
    salesOrderFormFields.map((i) => {
      obj = { ...obj, [i.key]: i.defaultValue ? i.defaultValue : '' };
      return null;
    });
    return obj;
  };

  const [form, setForm] = useState({ ...createState() });

  const { loading, submit } = useHandelForm({
    create: createOrders,
    edit: editOrders,
    retrieve: retrieveOrders,
    success: 'Added/Edited Order Successfully',
    failure: 'Error in Adding/Editing Order',
    done: onDone,
    close: onCancel,
    id,
    form,
    setForm: (data) => {
      setForm(data);
    },
  });

  return (
    <View style={container}>
      <View style={signInStyle.subContainer}>
        <WingBlank>
          <WhiteSpace />
          <View style={column}>
            <Text style={signInStyle.yantrakshHeading}>Order Details</Text>
          </View>
        </WingBlank>
        <Divider />
        <View style={signInStyle.inputContainer}>
          {salesOrderFormFields
            .slice(0, 2)
            .map((Field) => FormItemCreaterNative(Field, form, setForm))}
          {salesOrderFormFields
            .slice(2, 4)
            .map((Field) =>
              FormItemCreaterNative({ ...Field, radioOptions: apiData.addresses }, form, setForm),
            )}
        </View>
        <Text style={font(15, 'bold', 'center')}>Items</Text>
        <Divider style={{ marginVertical: 15 }} />
        <View style={signInStyle.buttonsContainer}>
          <WingBlank>
            <WhiteSpace />
            <Button loading={loading} onPress={submit}>
              Save
            </Button>
            <WhiteSpace />
          </WingBlank>
        </View>
      </View>
    </View>
  );
};
