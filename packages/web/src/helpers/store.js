import { reactLocalStorage } from 'reactjs-localstorage';

const store = {
  get: async (key) => reactLocalStorage.getObject(key),
  set: async (key, value) => reactLocalStorage.setObject(key, value),
  delete: async (key) => reactLocalStorage.remove(key),
};
window.storage = store;

export const storage = store;
