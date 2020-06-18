import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';
import { $User$Supplier$FTL, $User$Supplier$PTL } from '@app/common/constants/userTypes';
import { column, container, signInStyle } from '../../styles/advanceStyles';
import { Divider } from '../../components/divider.component';
import { yantraColors } from '../../styles/default';
import { InputCreater } from '../../components/InputCreater';
import { signUpShipperFields } from '../../formFields/signUpShipper.formFields';
import { FormItemCreaterNative } from '../../components/formItemCreaterNative';

export const SignUpSupplierScreen = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [hidePassword, changeHidePassword] = useState(true);

  const fields = [
    ...signUpShipperFields,
    {
      title: 'Password',
      key: 'password',
      icon: {
        name: 'md-lock',
        size: 30,
        color: '#000',
      },
      inputParams: {
        secureTextEntry: hidePassword,
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      RightComponent: (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            changeHidePassword(!hidePassword);
          }}>
          <Icon
            name={hidePassword ? 'md-eye' : 'md-eye-off'}
            size={30}
            color={yantraColors.grayDark}
          />
        </TouchableOpacity>
      ),
    },
    {
      title: 'Confirm Password',
      key: 'confirmPassword',
      inputParams: {
        secureTextEntry: hidePassword,
      },
      icon: {
        name: 'md-lock',
        size: 30,
        color: '#000',
      },
      type: FORM_ELEMENT_TYPES.INPUT,
      RightComponent: (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            changeHidePassword(!hidePassword);
          }}>
          <Icon
            name={hidePassword ? 'md-eye' : 'md-eye-off'}
            size={30}
            color={yantraColors.grayDark}
          />
        </TouchableOpacity>
      ),
    },
    {
      title: 'User Type',
      key: 'type',
      type: FORM_ELEMENT_TYPES.RADIO,
      radioOptions: [
        { value: $User$Supplier$FTL, label: 'FTL' },
        { value: $User$Supplier$PTL, label: 'PTL' },
      ],
    },
  ];
  return (
    <View style={container}>
      <View style={signInStyle.subContainer}>
        <WingBlank>
          <WhiteSpace />
          <View style={column}>
            <Text style={signInStyle.yantrakshHeading}>Yantraksh</Text>
            <Text>Sign Up as Supplier</Text>
          </View>
        </WingBlank>
        <Divider />
        <View style={signInStyle.inputContainer}>
          {fields.map((Field) => FormItemCreaterNative(Field, form, setForm))}
        </View>
        <View style={signInStyle.buttonsContainer}>
          <WingBlank>
            <WhiteSpace />
            <Button> Sign Up</Button>
            <WhiteSpace />
          </WingBlank>
        </View>
      </View>
    </View>
  );
};
