import { loadAPI } from './helpers/api';

export const getJWTTokens = ({ username, password }) => loadAPI(`/api/token/`, {
  method: 'POST',
  data: { username, password },
  secure: false
});

export const isUserVerified = ({ username }) => loadAPI(`/verification/`, {
  params: { username },
  secure: false
});

export const verifyUser = ({ username, otp }) => loadAPI('/verifyOTP/', {
  method: 'POST',
  data: { username, otp },
  secure: false,
});

export const getUserMeta = () => loadAPI(`/user/meta/`);
