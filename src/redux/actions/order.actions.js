import { orderType } from "../actionType/actionTypes";

export const getAllOrderStart = () => ({
  type: orderType.GET_ALL_ORDER_START,
});

export const getAllOrderSuccess = (payload) => ({
  type: orderType.GET_ALL_ORDER_SUCCESS,
  payload: payload,
});

export const getAllOrderError = (payload) => ({
  type: orderType.GET_ALL_ORDER_ERROR,
  payload: payload,
});

export const createOrderStart = () => ({
  type: orderType.CREATE_ORDER_START,
});

export const createOrderSuccess = (payload) => ({
  type: orderType.CREATE_ORDER_SUCCESS,
  payload: payload,
});

export const createOrderError = (err) => ({
  type: orderType.CREATE_ORDER_ERROR,
  payload: err,
});

export const getFilterOrderStart = () => ({
  type: orderType.GET_FILTER_ORDER_START,
});

export const getFilterOrderSuccess = (payload) => ({
  type: orderType.GET_FILTER_ORDER_SUCCESS,
  payload: payload,
});

export const getFilterOrderError = (err) => ({
  type: orderType.GET_FILTER_ORDER_ERROR,
  payload: err,
});

export const getOrderById = (payload) => ({
  type: orderType.GET_ORDER_BY_ID_SUCCESS,
  payload: payload,
});
