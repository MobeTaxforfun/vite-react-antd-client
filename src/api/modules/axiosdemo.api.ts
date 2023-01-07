import AxiosUtil from "../axiosUtil";

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
  return await AxiosUtil.postParamsData("/api/AxiosDemo/CreateValidate", data);
};

export const postCreateValidateSummary = async (data: any) => {
  return await AxiosUtil.post("/api/AxiosDemo/CreateValidateSummary", data);
};
