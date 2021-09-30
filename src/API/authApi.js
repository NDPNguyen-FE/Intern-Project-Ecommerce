import axiosClient from "./axiosClients";

const login = {
  customerLogin: (email, password) => {
    const url = "/login";
    return axiosClient.post(url, { email, password });
  },
};

export default login;
