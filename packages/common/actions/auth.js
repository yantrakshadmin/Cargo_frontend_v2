import { USER_AUTH_SUCCESS } from './index';

export const userAuthenticated = ({ name, type, email, username }) => ({
  type: USER_AUTH_SUCCESS,
  userType: type,
  name,
  email,
  username,
});
