import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { column, container, signInStyle } from '../styles/advanceStyles';
import { Divider } from './divider.component';
import { FormItemCreaterNative } from './formItemCreaterNative';
import { useHandelForm } from '../hooks/form';

export const FormWrapper = (
  { title,
    success,
    failure,
    buttonLabel,
    fields,
    onDone,
    onCancel,
    create,
    edit,
    retrieve,
    id }) => {

  const createState = () => {
    let obj;
    fields.map((i) => {
      obj = { ...obj, [i.key]: i.defaultValue ? i.defaultValue : '' };
      return null;
    });
    return obj;
  };

  const [form, setForm] = useState({ ...createState() });
  const { loading, submit } = useHandelForm({
    create,
    edit,
    retrieve,
    success,
    failure,
    done: onDone,
    close: onCancel,
    id,
    form,
    setForm:(data)=>{setForm(data)}
  });


  const [ourField, setOurField] = useState(fields);
  const onChange = (newForm, Field) => {
    if (Field.dependantOn) {
      let variableField = ourField.filter((i) => i.isDepandant)[0];
      variableField = {
        ...variableField,
        [variableField.dependantKey]: variableField.getDependantData(
          newForm[variableField.dependingKey],
        ),
      };
      setOurField(
        ourField.map((i) => {
          if (i.isDepandant) {
            return variableField;
          }
          return i;
        }),
      );
    }
    setForm(newForm);
  };
  return (
    <View style={container}>
      <View style={signInStyle.subContainer}>
        <WingBlank>
          <WhiteSpace />
          <View style={column}>
            <Text style={signInStyle.yantrakshHeading}>Yantraksh</Text>
            <Text>{title || ' '}</Text>
          </View>
        </WingBlank>
        <Divider />
        <View style={signInStyle.inputContainer}>
          {ourField.map((Field) => FormItemCreaterNative(Field, form, onChange))}
        </View>
        <View style={signInStyle.buttonsContainer}>
          <WingBlank>
            <WhiteSpace />
            <Button loading={loading} onPress={submit}>{buttonLabel || 'Submit'}</Button>
            <WhiteSpace />
          </WingBlank>
        </View>
      </View>
    </View>
  );
};
