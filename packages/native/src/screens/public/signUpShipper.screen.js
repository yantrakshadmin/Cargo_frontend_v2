import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';
import { column, container, signInStyle } from '../../styles/advanceStyles';
import { Divider } from '../../components/divider.component';
import { yantraColors } from '../../styles/default';
import { signUpShipperFields } from '../../formFields/signUpShipper.formFields';
import { FormItemCreaterNative } from '../../components/formItemCreaterNative';

export const SignUpShipperScreen = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: '',
  });
  const [hidePassword, changeHidePassword] = useState(true);

  const fields = [
    ...signUpShipperFields,
    {
      type: FORM_ELEMENT_TYPES.INPUT,
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
      type: FORM_ELEMENT_TYPES.INPUT,
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
  ];
  return (
    <View style={container}>
      <View style={signInStyle.subContainer}>
        <WingBlank>
          <WhiteSpace />
          <View style={column}>
            <Text style={signInStyle.yantrakshHeading}>Yantraksh</Text>
            <Text>Sign Up as Shipper</Text>
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
