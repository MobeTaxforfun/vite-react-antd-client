import axios, { AxiosResponse } from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

type Result<T> = {
  code: number;
  message: string;
  result: T;
};

export class AxiosUtil {
  // axios 實體
  instance: AxiosInstance;

  baseConfig: AxiosRequestConfig = { baseURL: "/api", timeout: 60000 };

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // Request 前 這裡有兩個 Callback(成功,失敗)
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token = localStorage.getItem("token") as string;
        if (token) {
          config.headers!.Authorization = token;
        }

        return config;
      },
      (err: any) => {
        return Promise.reject(err);
      }
    );

    // Response 後 這裡有兩個 Callback(成功,失敗)
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // 呼叫成功
        return res;
      },
      (err: any) => {
        return Promise.reject(err.response);
      }
    );
  }
  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config);
  }
}
