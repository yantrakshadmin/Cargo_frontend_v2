import AsyncStorage from '@react-native-community/async-storage';

export const storage = {
  get: async (key, d) => AsyncStorage.getItem(key),
  set: async (key, value) => AsyncStorage.setItem(key, value),
  delete: async (key) => AsyncStorage.removeItem(key),
};

global.storage = storage;
