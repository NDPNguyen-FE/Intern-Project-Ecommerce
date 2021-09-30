import axiosClient from "./axiosClients";

const productsApi = {
  getAllProducts: () => {
    const url = "/products";
    return axiosClient.get(url);
  },

  getProducts: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },

  getProductById: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  createProduct: (product) => {
    const url = "/products";
    return axiosClient.post(url, { ...product });
  },

  deleteProductById: (id) => {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },

  updateProduct: (id, product) => {
    const url = `/products/${id}`;
    return axiosClient.patch(url, { ...product });
  },
};

export default productsApi;
