import { AxiosUtil } from "../requestHelper";

//取得角色下拉選單
export const getRoleddl = async () => {
  return await AxiosUtil.get("/api/AxiosDemo/Failed");
};
