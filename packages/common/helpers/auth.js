import { userAuthenticated } from '../actions/auth';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/storage';

import { getStorage } from './shared';

import { getUserMeta as getUserMetaAPO } from '../api/auth';

export const getUserMeta = async (dispatch) => {
  const storage = getStorage();
  if (!await storage.get(ACCESS_TOKEN)) return;

  try {
    const { data: meta } = await getUserMetaAPO();

    if (meta) {
      const { category: type, name, email, username } = meta;
      dispatch(userAuthenticated({ name, type, email, username }));
    } else {
      await storage.delete(ACCESS_TOKEN);
      await storage.delete(REFRESH_TOKEN);
    }
  } catch (e) {
    // ignore error
  }
};
