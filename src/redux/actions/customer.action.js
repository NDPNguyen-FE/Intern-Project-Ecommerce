import { customerType } from "../actionType/actionTypes";

export const getCustomersStart = () => ({
  type: customerType.GET_ALL_CUSTOMER_START,
});

export const getCustomersSuccess = (payload) => ({
  type: customerType.GET_ALL_CUSTOMER_SUCCESS,
  payload: payload,
});

export const getCustomersError = (payload) => ({
  type: customerType.GET_ALL_CUSTOMER_ERROR,
  payload: payload,
});

export const createCustomer = () => ({
  type: customerType.CREAT_CUSTOMER_START,
});

export const createCustomerSuccess = (customer) => ({
  type: customerType.CREAT_CUSTOMER_SUCCESS,
  payload: customer,
});

export const createCustomerFailure = () => ({
  type: customerType.CREAT_CUSTOMER_FAILURE,
});

export const updateCustomer = () => ({
  type: customerType.UPDATE_CUSTOMER_START,
});

export const updateCustomerSuccess = (customer) => ({
  type: customerType.UPDATE_CUSTOMER_SUCCESS,
  payload: customer,
});

export const updateCustomerFailure = () => ({
  type: customerType.UPDATE_CUSTOMER_FAILURE,
});
