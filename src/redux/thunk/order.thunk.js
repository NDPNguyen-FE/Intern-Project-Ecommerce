import orderApi from "../../API/orderApi";
import * as actions from "../actions/order.actions";

export const createOrder = (order) => (dispatch) => {
  dispatch(actions.createOrderStart());

  orderApi
    .createOrder(order)
    .then((order) => dispatch(actions.createOrderSuccess(order)))
    .catch((err) => dispatch(actions.createOrderError(err)));
};

export const getAllOrders = () => (dispatch) => {
  dispatch(actions.getAllOrderStart());

  orderApi
    .getAllOrder()
    .then((order) => dispatch(actions.getAllOrderSuccess(order)))
    .catch((error) => dispatch(actions.getAllOrderError(error)));
};

export const getOrderById = (payload) => (dispatch) => {
  orderApi
    .getOrderByUser(payload)
    .then((order) => dispatch(actions.getOrderById(order.data)));
};
