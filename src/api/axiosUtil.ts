import { message } from "antd";
import axios, { AxiosError, AxiosResponse } from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { TResult } from "./data/apiCommon";
import { notifyStatus } from "./utils/notifyStatus";
import { parseObjToSearchParams } from "@/utils/transObjUtil";

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
    // 這個是 Http StatusCode
    if (status === 200) {
      // 自訂狀態為失敗顯示 Error Message
      if (!data.Status) {
        message.error(data.Message, 1);
      }
      // 自訂狀態為成功且狀態碼為 1000 顯示 Success Message
      if (data.Status && data.Code === 1000) {
        message.success(data.Message, 1);
      }
      return data;
    }
    // 按照道理不會執行至這裡，不過還是防一下
    return Promise.reject(statusText);
  },
  (error: AxiosError) => {
    // Client環境 無網路連線
    if (!window.navigator.onLine) {
      message.error("請確定您的網路連線狀態是否穩定");
    }
    // 若無 response 應當是後端呼叫不到
    if (error.response == null) {
      message.error("伺服器忙碌中請稍後再試");
    }
    const { response } = error;
    // 處理異常的 Http StatusCode
    if (response) {
      notifyStatus(response.status);
    }
    return Promise.reject(error);
  }
);

class RequestHttp {
  service: AxiosInstance;
  public constructor(service: AxiosInstance) {
    this.service = service;
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<TResult<T>> {
    return this.service.get(url, config);
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<TResult<T>> {
    return this.service.post(url, data, config);
  }

  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<TResult<T>> {
    return this.service.put(url, data, config);
  }

  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<TResult<T>> {
    return this.service.delete(url, config);
  }

  /**
   * @description 使用 application/x-www-form-urlencoded;charset=utf-8 送出 Post Data
   * @param url 網址
   * @param data Data
   * @param config AxiosRequestConfig
   * @returns
   */
  postParamsData<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<TResult<T>> {
    return this.service.post(url, parseObjToSearchParams(data), {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
  }
}

// 封裝成 Class 之後方便在不同的 AxiosInstance 中切換
export default new RequestHttp(service);
