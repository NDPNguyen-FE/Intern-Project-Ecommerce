import productsApi from "../../API/productsApi";
import * as actions from "../actions/product.action";

export const getAllProducts = () => (dispatch) => {
  dispatch(actions.getAllProductStart());

  productsApi
    .getAllProducts()
    .then((products) => dispatch(actions.getAllProductSuccess(products)))
    .catch((err) => dispatch(actions.getAllProductError(err)));
};

export const getProductFilter = (payload) => (dispatch) => {
  dispatch(actions.getFilterProductsStart());

  productsApi
    .getProducts(payload)

    .then((product) =>
      dispatch(
        actions.getFilterProductsSuccess({
          data: product.data,
          params: payload,
          total: product.total,
        })
      )
    )
    .catch((err) => dispatch(actions.getFilterProductsError(err)));
};

export const getProductById = (payload) => (dispatch) => {
  dispatch(actions.getProductDetailStart());

  productsApi
    .getProductById(payload)
    .then((product) => dispatch(actions.getProductDetailSuccess(product)))
    .catch((err) => dispatch(actions.getProductDetailError(err)));
};

export const createProduct = (payload) => (dispatch) => {
  dispatch(actions.createProductStart());

  productsApi
    .createProduct(payload)
    .then((product) => {
      dispatch(actions.createProductSuccess(product));
    })
    .catch((err) => dispatch(actions.createProductFailure(err)));
};

export const updateProduct =
  ({ id, product }) =>
  (dispatch) => {
    dispatch(actions.updateProductStart());

    productsApi
      .updateProduct(id, product)
      .then((product) => dispatch(actions.updateProductSuccess(product)))
      .catch((err) => dispatch(actions.updateProductError(err)));
  };

export const deleteProductById = (payload) => (dispatch) => {
  productsApi.deleteProductById(payload);
  dispatch(actions.deleteProductById(payload));
};
