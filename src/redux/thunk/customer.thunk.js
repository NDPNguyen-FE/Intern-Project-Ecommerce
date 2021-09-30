import customerApi from "../../API/customerApi";
import * as actions from "../actions/customer.action";

export const createCustomers = (customer) => (dispatch) => {
  dispatch(actions.createCustomer());

  customerApi
    .createCustomer(customer)
    .then((customer) => dispatch(actions.createCustomerSuccess(customer)))
    .catch((err) => dispatch(actions.createCustomerFailure()));
};

export const updateCustomers =
  ({ id, customer }) =>
  (dispatch) => {
    dispatch(actions.updateCustomer());

    customerApi
      .updateCustomer(id, customer)
      .then((payload) => {
        dispatch(actions.updateCustomerSuccess(payload));
      })
      .catch((err) => dispatch(actions.updateCustomerFailure()));
  };

export const getCustomers = () => (dispatch) => {
  dispatch(actions.getCustomersStart());

  customerApi
    .getAllCustomer()
    .then((customers) => dispatch(actions.getCustomersSuccess(customers)))
    .catch((err) => dispatch(actions.getCustomersError(err)));
};
