import { getStorage } from '../helpers/shared';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/storage';

import { LOGOUT, USER_AUTH_SUCCESS } from './index';

export const userAuthenticated = ({ name, type, email, username, dp }) => ({
  type: USER_AUTH_SUCCESS,
  userType: type,
  name,
  email,
  username,
  dp,
});

export const logout = () => async (dispatch) => {
  const storage = getStorage();

  await storage.delete(ACCESS_TOKEN);
  await storage.delete(REFRESH_TOKEN);

  dispatch({ type: LOGOUT });
};
