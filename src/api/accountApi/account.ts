import internal from "stream";
import { AxiosUtil } from "../requestHelper";

type GetUserInfoType = {
  UserId: number;
};

export const getUserInfo = (params: GetUserInfoType) => {
  new AxiosUtil().get("test");
  return;
};
