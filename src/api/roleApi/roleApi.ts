import { IPageRole, TPostRole, TPutRole } from "@/data/role";
import { AxiosUtil } from "../requestHelper";

export const postCreateRole = async (data: TPostRole) => {
  return await AxiosUtil.post("/api/Role", data);
};

export const getListedRole = async (queryString: string) => {
  return await AxiosUtil.get<IPageRole>("/api/Role/Paginate?" + queryString);
};

export const putUpdateRole = async (data: TPutRole) => {
  return await AxiosUtil.put("/api/Role", data);
};
