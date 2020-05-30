import { userAuthenticated } from '../actions/auth';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/storage';

import { loadAPI } from './api';
import { getStorage } from './storage';

export const getUserMeta = async (dispatch) => {
  try {
    const storage = getStorage();

    const { data: meta } = await loadAPI('/user/meta/');
    if (meta) {
      const { category: type, name, email } = meta;
      dispatch(userAuthenticated({ name, type, email }));
    } else {
      await storage.delete(ACCESS_TOKEN);
      await storage.delete(REFRESH_TOKEN);
    }
  } catch (e) {
    // ignore error
  }
};
