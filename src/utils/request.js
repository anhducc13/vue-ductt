import axios from "axios";
import { notification } from "ant-design-vue";
import store from "@/store";
import { getToken } from "@/utils/auth";
import router from "@/router";

// create an axios instance
const service = axios.create({
  baseURL: "http://localhost:3001/api",
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    store.dispatch("app/setLoading", true);
    config.headers["X-Token"] = `Bearer ${getToken()}`;
    return config;
  },
  error => {
    store.dispatch("app/setLoading", false);
    notification.error({
      message: "Có lỗi",
      description: "Lỗi không xác định"
    });
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    store.dispatch("app/setLoading", false);
    return response.data;
  },
  error => {
    store.dispatch("app/setLoading", false);
    try {
      const { response } = error;
      if (response.status === 400) {
        const err = response.data.errors;
        const message = response.data.message;
        if (message) {
          notification.error({
            message: "Có lỗi",
            description: message
          });
          return;
        }
        if (err && err.length) {
          notification.error({
            message: "Có lỗi",
            description: err[0]
          });
        }
      } else if (response.status === 404) {
        //
      } else if (response.status === 401 || response.status === 403) {
        notification.error({
          message: "Có lỗi",
          description: response.data.message
        });
        router.push({ path: "/admin/login" })
      } else {
        notification.error({
          message: "Có lỗi",
          description: "Lỗi không xác định"
        });
      }
    } catch {
      notification.error({
        message: "Có lỗi",
        description: "Lỗi không xác định"
      });
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return Promise.reject(error);
    }
  }
);

export const normalService = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000
});

export default service;
