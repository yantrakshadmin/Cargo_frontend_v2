import { reactLocalStorage } from 'reactjs-localstorage';

const storage = {
  get: async (key) => reactLocalStorage.getObject(key),
  set: async (key, value) => reactLocalStorage.setObject(key, value),
  delete: async (key) => reactLocalStorage.remove(key),
};

window.storage = storage;
