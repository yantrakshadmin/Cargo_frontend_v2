import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { column, container, row, signInStyle } from '../../styles/advanceStyles';
import { Divider } from '../../components/divider.component';
import { margin, yantraColors } from '../../styles/default';

export const SignInScreen = ({ navigation }) => {
  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  const [hidePassword, changeHidePassword] = useState(true);

  return (
    <View style={container}>
      <View style={signInStyle.subContainer}>
        <WingBlank>
          <WhiteSpace />
          <View style={column}>
            <Text style={signInStyle.yantrakshHeading}>Yantraksh</Text>
            <Text>Sign in to your account</Text>
          </View>
        </WingBlank>
        <Divider />
        <View style={signInStyle.inputContainer}>
          <View style={row}>
            <Icon name='md-person' size={30} color='#000' />
            <View style={signInStyle.inputText}>
              <TextInput
                value={username}
                onChangeText={(text) => {
                  changeUsername(text);
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
                value={password}
                onChangeText={(text) => {
                  changePassword(text);
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
              <Button type='primary'>Sign In</Button>
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
