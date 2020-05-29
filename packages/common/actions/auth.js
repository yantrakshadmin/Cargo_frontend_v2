import { USER_AUTH_SUCCESS } from './index';

export const userAuthenticated = ({ name, type }) => ({
  type: USER_AUTH_SUCCESS,
  name,
  userType: type,
});
