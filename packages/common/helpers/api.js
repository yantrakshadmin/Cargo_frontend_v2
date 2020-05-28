import { reactLocalStorage } from 'reactjs-localstorage';
import * as jwtDecode from 'jwt-decode';
import axios from 'axios';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/storage';
import { DEFAULT_BASE_URL } from '../constants/enviroment';

axios.defaults.baseURL = DEFAULT_BASE_URL;

const getAccessToken = async () => {
  const accessToken = reactLocalStorage.getObject(ACCESS_TOKEN);
  const refreshToken = reactLocalStorage.getObject(REFRESH_TOKEN);
  if (!(accessToken && refreshToken)) throw Error('No user found');

  const accessPayload = jwtDecode(accessToken);
  if (new Date(parseInt(accessPayload.exp, 10)) > new Date()) return accessToken;

  const res = await axios.post('/auth/meta/refresh/', {
    refresh: refreshToken,
  });

  const newAccessToken = res.access;
  reactLocalStorage.setObject(ACCESS_TOKEN, newAccessToken);
  reactLocalStorage.setObject(REFRESH_TOKEN, res.refresh);

  return newAccessToken;
};

export const loadAPI = async (url, opts) => {
  const {
    onSuccess = (data) => data,
    onFailure = (error) => error,
    secure = true,
    defaultData,
    headers,
    ...options
  } = opts;

  try {
    const res = await axios(url, {
      headers: {
        ...(secure ? { Authorization: `Bearer ${await getAccessToken()}` } : {}),
        ...headers,
      },
      ...options,
    });

    const { data, status } = res;
    await onSuccess(data);
    return { data, status, error: undefined, loading: false };
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response;
      await onFailure(data);
      return { data: undefined, status, error: data, loading: false };
    }

    if (error.request) {
      const e = { message: 'error in request setup' };
      // noinspection JSCheckFunctionSignatures
      return { data: undefined, status: 0, error: e, loading: false };
    }

    throw Error(error);
  }
};
