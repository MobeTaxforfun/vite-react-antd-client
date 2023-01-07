import { IPageRole, TPostRole, TPutRole, TPutRoleStatus } from "@/data/role";
import AxiosUtil from "../axiosUtil";

export const postCreateRole = async (data: TPostRole) => {
  return await AxiosUtil.post("/api/Role", data);
};

export const getListedRole = async (queryString: string) => {
  return await AxiosUtil.get<IPageRole>("/api/Role/Paginate?" + queryString);
};

export const putUpdateRole = async (data: TPutRole) => {
  return await AxiosUtil.put("/api/Role", data);
};

export const deleteRole = async (id: number) => {
  return await AxiosUtil.delete(`/api/Role/${id}`);
};

export const putSetStatus = async (data: TPutRoleStatus) => {
  return await AxiosUtil.put("/api/Role/SetStatus", data);
};
