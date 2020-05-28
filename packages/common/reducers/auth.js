import { LOGOUT, USER_AUTH_SUCCESS } from '../actions';

const initialState = {
  isAuthenticated: false,
  email: null,
  name: null,
  type: null,
};

export const auth = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case USER_AUTH_SUCCESS:
      return $({ name: action.name, isAuthenticated: true, type: action.userType });
    case LOGOUT:
      return $(initialState);
    default:
      return $();
  }
};
