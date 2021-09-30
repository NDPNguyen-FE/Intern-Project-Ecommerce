import axiosClient from "./axiosClients";

const orderApi = {
  getOrderByUser: (id) => {
    const url = `/orders`;
    return axiosClient.get(url, {
      params: {
        idUser: id,
        _sort: "createAt",
        _order: "desc",
      },
    });
  },

  getAllOrder: () => {
    const url = `/orders`;
    return axiosClient.get(url);
  },

  createOrder: (order) => {
    const url = `/orders`;
    return axiosClient.post(url, { ...order });
  },
};

export default orderApi;
