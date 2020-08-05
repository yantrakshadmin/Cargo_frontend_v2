import AsyncStorage from '@react-native-community/async-storage';
import { Alert, Linking, Platform } from 'react-native';

export const storage = {
  get: async (key, d) => AsyncStorage.getItem(key),
  set: async (key, value) => AsyncStorage.setItem(key, value),
  delete: async (key) => AsyncStorage.removeItem(key),
};

export const onCallButtonClicked = (phone) => {
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    // eslint-disable-next-line consistent-return
    .then((supported) => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => console.log(err));
};

global.storage = storage;
