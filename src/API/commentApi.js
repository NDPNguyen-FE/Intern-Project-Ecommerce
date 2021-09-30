import axiosClient from "./axiosClients";

const commentApi = {
  getCommentByProduct: (idProduct) => {
    const url = `/comments`;
    return axiosClient.get(url, {
      params: {
        idProduct: idProduct,
      },
    });
  },

  createComment: (payload) => {
    const url = `/comments`;
    return axiosClient.post(url, {
      ...payload,
    });
  },
};

export default commentApi;
