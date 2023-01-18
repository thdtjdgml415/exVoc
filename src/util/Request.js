import axios from "axios";

const SERVER_URL = "/api";

const request = {
  get: (url, config) => {
    return axios.get(`${SERVER_URL}${url}`, config);
  },
  post: (url, data = {}, config) => {
    return axios.post(`${SERVER_URL}${url}`, data, config);
  },
  put: (url, data = {}, config) => {
    return axios.put(`${SERVER_URL}${url}`, data, config);
  },
  delete: (url, data = {}, config) => {
    return axios.delete(`${SERVER_URL}${url}`, data, config);
  },
  patch: (url, data = {}, config) => {
    return axios.patch(`${SERVER_URL}${url}`, data, config);
  },
  isSuccess: (response) => {
    return response.status >= 200 && response.status < 300;
  }
};

export default request;
export const SUCCESS = "success";
export const FAIL = "fail";
