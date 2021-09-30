import { authTypes } from "../actionType/actionTypes";

export const loginStart = () => ({
  type: authTypes.CUSTOMER_LOGIN_START,
});

export const loginSuccess = (payload) => ({
  type: authTypes.CUSTOMER_LOGIN_SUCCESS,
  payload: payload,
});

export const loginFailure = () => ({
  type: authTypes.CUSTOMER_LOGIN_FAILURE,
});

export const logout = () => ({
  type: authTypes.CUSTOMER_LOGOUT,
});

export const getProfileStart = () => ({
  type: authTypes.GET_CUSTOMER_PROFILE_START,
});

export const getProfileSuccess = (payload) => ({
  type: authTypes.GET_CUSTOMER_PROFILE_SUCCESS,
  payload: payload,
});

export const getProfileFailure = () => ({
  type: authTypes.GET_CUSTOMER_PROFILE_FAILURE,
});

export const getProfileByToken = (payload) => ({
  type: authTypes.GET_CUSTOMER_PROFILE_SUCCESS,
  payload: payload,
});
