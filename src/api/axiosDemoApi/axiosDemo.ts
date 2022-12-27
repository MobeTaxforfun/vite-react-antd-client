import { AxiosUtil } from "../requestHelper";

export const getSuccessful = async () => {
  return await AxiosUtil.get("/api/AxiosDemo/Successful");
};

export const getFailed = async () => {
  return await AxiosUtil.get("/api/AxiosDemo/Failed");
};

export const getTraceBadRequest = async () => {
  return await AxiosUtil.get("/api/AxiosDemo/TraceBadRequest");
};

export const getTraceUnauthorized = async () => {
  return await AxiosUtil.get("/api/AxiosDemo/TraceUnauthorized");
};

export const getTraceForbid = async () => {
  return await AxiosUtil.get("/api/AxiosDemo/TraceForbid");
};

type IPostCreateDemo = {
  Id: number;
  Name: string;
};

export const postCreateDemo = async (data: IPostCreateDemo) => {
  return await AxiosUtil.post("/api/AxiosDemo/Create", data);
};

export const postCreateValidate = async (data: any) => {
  let params = new URLSearchParams();
  for (let key in data) {
    if (data[key] != null) params.append(key, data[key]);
    else params.append(key, "");
  }

  return await AxiosUtil.post("/api/AxiosDemo/CreateValidate", params, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
};

export const postCreateValidateSummary = async (data: any) => {
  return await AxiosUtil.post("/api/AxiosDemo/CreateValidateSummary", data);
};
