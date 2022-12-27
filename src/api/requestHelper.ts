import { message } from "antd";
import axios, { AxiosError, AxiosResponse } from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

type Result<T> = {
  Status: number;
  Message: string;
  Success: boolean;
  ModelStateErrors?: any;
  Data?: T;
};

const service: AxiosInstance = axios.create({
  baseURL: "https://localhost:7244",
  timeout: 30000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, statusText, data } = response;
    if (status === 200) {
      if (data.Status) {
        message.success(data.Message, 1);
      } else {
        message.error(data.Message, 1);
      }
      return data;
    } else {
      return Promise.reject(statusText);
    }
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    switch (status) {
      case 401:
        message.error("尚未認證!!", 1);
        break;
      case 403:
        message.error("尚無權限!!", 1);
        break;
      default:
        message.error("伺服器忙碌中，請稍後再試!!!", 1);
        break;
    }
    return Promise.reject(error);
  }
);

export const AxiosUtil = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
    return service.get(url, config);
  },

  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<Result<T>> {
    return service.post(url, data, config);
  },

  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return service.put(url, data, config);
  },

  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return service.delete(url, config);
  },
};
