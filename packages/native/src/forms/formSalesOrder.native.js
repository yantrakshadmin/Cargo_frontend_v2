import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { createOrders, editOrders, retrieveOrders } from '@app/common/api/shipper';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useAPI } from '../hooks/api';
import { column, container, font, getFlex, row, signInStyle } from '../styles/advanceStyles';
import { Divider } from '../components/divider.component';
import { FormItemCreaterNative } from '../components/formItemCreaterNative';
import { useHandelForm } from '../hooks/form';
import { salesOrderFormFields } from '../formFields/saleOrdersShipper.formFields';
import { margin, yantraColors } from '../styles/default';

const ItemsForm = ({ form, setForm, key, index, items, itemForm, setItemForm }) => {
  return (
    <View style={[row]} key={key}>
      <Picker
        selectedValue={itemForm[index]}
        style={{ flex: 1 }}
        onValueChange={(itemValue) => {
          const newpackages = form.packages;
          const newItem = itemForm;
          newpackages[index] = { prod_name: itemValue.id, quantity: 0 };
          newItem[index] = itemValue;
          setForm({ ...form, packages: newpackages });
          setItemForm(newItem);
        }}>
        <Picker.Item
          label='Choose...'
          /* eslint-disable-next-line no-nested-ternary */
          value=''
          key='choose'
        />
        {items.map((item, index1) => (
          <Picker.Item
            label={item.prod_name}
            /* eslint-disable-next-line no-nested-ternary */
            value={item}
            key={index1.toString()}
          />
        ))}
      </Picker>
      <View style={signInStyle.inputText}>
        <TextInput
          value={form.packages[index].quantity || 0}
          onChangeText={(text) => {
            const newpackages = form.packages;
            newpackages[index] = { ...newpackages[index], quantity: text };
            setForm({ ...form, packages: newpackages });
          }}
          placeholder='Quantity'
          keyboardType='number-pad'
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setForm({ ...form, packages: form.packages.filter((i, ind) => index !== ind) });
          setItemForm(itemForm.filter((i, ind) => index !== ind));
        }}>
        <Icon name='trash' color={yantraColors.danger} size={20} style={margin('margin').md} />
      </TouchableOpacity>
    </View>
  );
};

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
      items: (items || []).map((item, index) => ({ value: index, label: item.prod_name })),
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

  const [form, setForm] = useState({ ...createState(), packages: [{}] });
  const [itemForm, setItemForm] = useState([0]);
  const { loading, submit } = useHandelForm({
    create: async ({ order_id, shipment_type, sender_address, receiver_address, packages }) =>
      // eslint-disable-next-line no-return-await
      await createOrders({
        order_id,
        shipment_type,
        sender_address,
        receiver_address,
        packages,
      }),
    edit: async (orderId, { order_id, shipment_type, sender_address, receiver_address, packages }) =>
      // eslint-disable-next-line no-return-await
      await editOrders(orderId, {
        order_id,
        shipment_type,
        sender_address,
        receiver_address,
        packages,
      }),
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
        {itemForm.map((i, index) => (
          <ItemsForm
            items={itemsLoading ? [] : items}
            key={i.toString()}
            form={form}
            setForm={setForm}
            index={index}
            itemForm={itemForm}
            setItemForm={setItemForm}
          />
        ))}
        <TouchableOpacity
          style={[getFlex(1, 'row', 'center', 'center'), margin('margin').md]}
          onPress={() => {
            setForm({ ...form, packages: [...form.packages, {}] });
            setItemForm([...itemForm, itemForm.length]);
          }}>
          <Icon
            name='cart-plus'
            color={yantraColors.primary}
            size={20}
            style={margin('margin').md}
          />
          <Text>Add Item</Text>
        </TouchableOpacity>
        <View style={signInStyle.buttonsContainer}>
          <WingBlank>
            <WhiteSpace />
            <Button
              loading={loading}
              onPress={() => {
                submit();
                console.log(form);
              }}>
              Save
            </Button>
            <WhiteSpace />
          </WingBlank>
        </View>
      </View>
    </View>
  );
};
