import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@app/common/actions/auth';
import { getFlex } from '../../styles/advanceStyles';

export const SignOutScreen = ({ navigation,home }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
    navigation.navigate(home)
  }, [navigation,dispatch]);
  return (
    <View style={getFlex(1,'column','center','center')}>
      <ActivityIndicator size='large' color='#000000' />
    </View>
  );
}

