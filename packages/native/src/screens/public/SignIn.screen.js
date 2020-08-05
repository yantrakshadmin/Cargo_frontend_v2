import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, WhiteSpace, WingBlank, Modal } from '@ant-design/react-native';
import { useDispatch } from 'react-redux';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@app/common/constants/storage';
import { getUserMeta } from '@app/common/helpers/auth';
import { getJWTTokens, isUserVerified, verifyUser } from '@app/common/api/auth';
import { margin, yantraColors } from '../../styles/default';
import { Divider } from '../../components/divider.component';
import { column, container, row, screenWrapperStyle, signInStyle } from '../../styles/advanceStyles';
import logo from '../../assets/yantrakshLogo.png';

export const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [verify, changeVerify] = useState({ open: false, username: '', password: '' });
  const [loading, changeLoading] = useState(false);
  const [hidePassword, changeHidePassword] = useState(true);
  const [otp, changeOtp] = useState('');

  const handelSignIn = async ({ username, password }) => {
    try {
      changeLoading(true);
      const { data: tokens } = await getJWTTokens({ username, password });

      const { access, refresh } = tokens;
      await global.storage.set(ACCESS_TOKEN, access);
      await global.storage.set(REFRESH_TOKEN, refresh);

      await getUserMeta(dispatch);
    } catch (e) {
      // notification.error({ message: `Can't SignIn user: ${username}`, description: e.toString() });
      console.log(e, 'Error');
    }
    changeLoading(false);
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = async ({ username, password }) => {
    const { data: verified, error } = await isUserVerified({ username });

    if (error) console.log(error);
    // notification.error({
    //   message: `Error with user: ${username}`,
    //   description: error.toString(),
    // });
    else if (verified.verified) await handelSignIn({ username, password });
    else changeVerify({ open: true, username, password });
  };

  const handleVerification = async () => {
    const { error } = await verifyUser({ username: verify.username, otp });
    if (error) console.log('cant');
    // notification.error({
    //   message: `Cant verify user: ${verify.username}`,
    //   description: error.toString(),
    // });
    else {
      await handelSignIn({ username: verify.username, password: verify.password });
      changeVerify({ open: false, username: '', password: '' });
    }
  };

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
        <Modal
          title='Verify OTP'
          transparent
          onClose={() => {
            changeVerify({ open: false, username: '', password: '' });
          }}
          maskClosable
          visible={verify.open}
          closable
          footer={[
            {
              text: 'Cancel',
              onPress: () => changeVerify({ open: false, username: '', password: '' }),
            },
            { text: 'Ok', onPress: () => handleVerification() },
          ]}>
          <Divider />
          <View style={row}>
            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Enter Verification OTP : </Text>
            <TextInput
              value={otp}
              onChangeText={(text) => {
                changeOtp(text);
              }}
              placeholder='Please input OTP'
              maxLength={6}
            />
          </View>
        </Modal>
        <View style={signInStyle.inputContainer}>
          <View style={row}>
            <Icon name='md-person' size={30} color='#000' />
            <View style={signInStyle.inputText}>
              <TextInput
                value={verify.username}
                onChangeText={(text) => {
                  changeVerify({ ...verify, username: text });
                }}
                placeholder='Username'
                maxLength={20}
              />
            </View>
          </View>
          <Divider />
          <View style={row}>
            <Icon name='md-lock' size={30} color='#000' />
            <View style={signInStyle.inputText}>
              <TextInput
                secureTextEntry={hidePassword}
                value={verify.password}
                onChangeText={(text) => {
                  changeVerify({ ...verify, password: text });
                }}
                placeholder='Password'
                maxLength={20}
              />
            </View>
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
            <View style={margin('marginLeft').md}>
              <Button type='primary' loading={loading} onPress={() => handleSubmit(verify)}>
                Sign In
              </Button>
            </View>
          </View>
          <Divider />
        </View>
        <View style={signInStyle.buttonsContainer}>
          <WingBlank>
            <View style={column}>
              <WhiteSpace />
              <Text style={signInStyle.signUpHeading}>Sign Up</Text>
              <WhiteSpace />
              <View style={row}>
                <TouchableOpacity
                  style={signInStyle.buttonStyle}
                  onPress={() => {
                    navigation.navigate('Sign Up Shipper');
                  }}>
                  <Icon name='md-boat' size={20} color={yantraColors.grayDark} />
                  <Text style={signInStyle.buttonTextStyle}>Sign Up as Shipper</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={signInStyle.buttonStyle}
                  onPress={() => {
                    navigation.navigate('Sign Up Supplier');
                  }}>
                  <Icon name='md-cart' size={20} color={yantraColors.grayDark} />
                  <Text style={signInStyle.buttonTextStyle}>Sign Up as Supplier</Text>
                </TouchableOpacity>
              </View>
            </View>
            <WhiteSpace />
          </WingBlank>
        </View>
      </View>
    </View>
  );
};
