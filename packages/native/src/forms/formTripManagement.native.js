import React, { useState,useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { tripManagementCreate, tripManagementEdit, tripManagementRetrieve }
  from '@app/common/api/supplier';
import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';
import { useAPI } from '../hooks/api';
import { column, container, font, signInStyle } from '../styles/advanceStyles';
import { Divider } from '../components/divider.component';
import { FormItemCreaterNative } from '../components/formItemCreaterNative';
import { useHandelForm } from '../hooks/form';
import { mainTripManagementFormFields } from '../formFields/tripManagement.formFields';

export const FormTripManagement = ({
  onDone,
  onCancel,
  id }) => {
  const { data: orders, loading: orderLoading } = useAPI(`/assigned-orders/`);

  const [fields,setFields] =useState( [ {
    key: 'order',
    title: 'Order ID',
    type: FORM_ELEMENT_TYPES.RADIO,
    radioOptions:[],
  },
  ...mainTripManagementFormFields]);


  useEffect(()=>{setFields([ {
    key: 'order',
    checkVehicle:true,
    title: 'Order ID',
    type: FORM_ELEMENT_TYPES.RADIO,
    radioOptions: (orders || []).map((order) => ({
      value: order.order.id,
      label: order.order.order_id,
    })),
  },...mainTripManagementFormFields])},[orders,orderLoading])


  const createState = () => {
    let obj;
    fields.map((i) => {
      obj = { ...obj, [i.key]:i.defaultValue?i.defaultValue:'' };
      return null;
    });
    return obj;

  };

  const [form, setForm] = useState({ ...createState() });

  const { loading, submit } = useHandelForm({
    create:tripManagementCreate,
    edit:tripManagementEdit,
    retrieve:tripManagementRetrieve,
    success:'Added/Edited Trip Successfully',
    failure:'Error in Adding/Editing Trip',
    done: onDone,
    close: onCancel,
    id,
    form,
    setForm:(data)=>{setForm(data)}
  });

  const checkVehicleSource = (newForm) => {
    const orderId = newForm.order;
    let order;
    (orders || []).map((oo) => {
      if (oo.order.id === orderId) order = oo;
      return null;
    });
    if (order)
      setForm({
        ...newForm,
        loading_address: order.order.sender_address.name,
        unloading_address: order.order.receiver_address.name,
      });
  };

  const onChange = (newForm,Field) => {
    // if(Field.key==='order'){
    checkVehicleSource(newForm)
    // }
    if(Field.key==='vehicle_source'){
      setFields(
        fields.map((i) => {
          if (i.key==='broker_name') {
            return { ...i,
              inputParams:{
                editable:newForm.vehicle_source==='Broker' ,
                placeholder:newForm.vehicle_source==='Broker'?
                  'Broker Name':
                  'Disabled! Broker Name Not Required' } };
          }
          return i;
        }),
      );
      setForm(newForm)
    }
    // setForm(newForm)
  };

  return (
    <View style={container}>
      <View style={signInStyle.subContainer}>
        <WingBlank>
          <WhiteSpace />
          <View style={column}>
            <Text style={signInStyle.yantrakshHeading}>Yantraksh</Text>
            <Text>Trip Details</Text>
          </View>
        </WingBlank>
        <Divider />
        <View style={signInStyle.inputContainer}>
          {fields.slice(0,11).map((Field) => FormItemCreaterNative(Field, form, onChange))}
        </View>
        <Text style={font(15,'bold','center')}>Billing Details</Text>
        <Divider style={{ marginVertical:15, }} />
        <View style={signInStyle.inputContainer}>
          {fields.slice(11,fields.length).map((Field) =>
            FormItemCreaterNative(Field, form, onChange))}
        </View>
        <View style={signInStyle.buttonsContainer}>
          <WingBlank>
            <WhiteSpace />
            <Button loading={loading} onPress={submit}>Save</Button>
            <WhiteSpace />
          </WingBlank>
        </View>
      </View>
    </View>
  );
};
