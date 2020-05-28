import { USER_AUTH_SUCCESS } from 'packages/common/actions/index';

export const userAuthenticated = ({ name, type }) => ({
  type: USER_AUTH_SUCCESS,
  name,
  userType: type,
});
