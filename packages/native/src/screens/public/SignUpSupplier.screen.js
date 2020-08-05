import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button, Toast, WhiteSpace, WingBlank } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { $User$Supplier$FTL, $User$Supplier$PTL } from '@app/common/constants/userTypes';
import { FORM_ELEMENT_TYPES } from '@app/web/src/constants/formFields.constant';
import { createSupplierAccount } from '@app/common/api/auth';
import { column, container, screenWrapperStyle, signInStyle } from '../../styles/advanceStyles';
import { Divider } from '../../components/divider.component';
import { yantraColors } from '../../styles/default';
import { signUpShipperFields } from '../../formFields/signUpShipper.formFields';
import { FormItemCreaterNative } from '../../components/formItemCreaterNative';
import logo from '../../assets/yantrakshLogo.png';

export const SignUpSupplierScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      Toast.info('Password and confirm password should be same!');
      setLoading(false);
    } else {
      try {
        const {
          data: { username },
        } = await createSupplierAccount(data);
        Toast.info(`Created your account`);
        navigation.navigate('Sign In');
        setLoading(false);
      } catch (e) {
        Toast.info('Error in creating user!');
        setLoading(false);
      }
    }
  };
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
            <Image source={logo} style={screenWrapperStyle.logo} />
          </View>
        </WingBlank>
        <Divider />
        <View style={signInStyle.inputContainer}>
          {fields.map((Field) => FormItemCreaterNative(Field, form, setForm))}
        </View>
        <View style={signInStyle.buttonsContainer}>
          <WingBlank>
            <WhiteSpace />
            <Button
              loading={loading}
              onPress={async () => {
                await handleSubmit(form);
              }}>
              {' '}
              Sign Up as Supplier
            </Button>
            <WhiteSpace />
          </WingBlank>
        </View>
      </View>
    </View>
  );
};
