import { userAuthenticated } from '../actions/auth';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/storage';

import { getStorage } from './shared';

import { getUserMeta as getUserMetaAPI } from '../api/auth';

export const getUserMeta = async (dispatch) => {
  const storage = getStorage();
  if (!(await storage.get(ACCESS_TOKEN, null))) return false;
  const { data: meta } = await getUserMetaAPI();

  try {
    // const { data: meta } = await getUserMetaAPI();
    // console.log(meta,'yela')
    if (meta) {
      const { category: type, name, email, username, dp } = meta;
      dispatch(userAuthenticated({ name, type, email, username, dp }));
      console.log(meta, 'meta');
      return false;
    }

    await storage.delete(ACCESS_TOKEN);
    await storage.delete(REFRESH_TOKEN);
  } catch (e) {
    // ignore error
  }

  return true;
};
