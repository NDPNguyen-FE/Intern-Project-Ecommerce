import axiosClient from "./axiosClients";

const customerApi = {
  getAllCustomer: () => {
    const url = "/users";
    return axiosClient.get(url);
  },

  getCustomer: (params) => {
    const url = "/users";
    return axiosClient.get(url, { params });
  },

  getCustomerById: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  createCustomer: (user) => {
    const url = "/users";
    return axiosClient.post(url, {
      ...user,
    });
  },

  deleteCustomer: (id) => {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },

  updateCustomer: (id, customer) => {
    const url = `/users/${id}`;
    return axiosClient.patch(url, { ...customer });
  },
};

export default customerApi;
