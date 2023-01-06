export interface IRoleDataType {
  key: number;
  Id: number;
  RoleName: string;
  RoleCode: string;
  Sort: number;
  Status: number | string;
  Remark?: string;
  CreateTime: string;
}

export interface IPageRole {
  TableData: IRoleDataType[];
  TotalCount: number;
}

export type TPostRole = {
  RoleName: string;
  RoleCode: string;
  Sort: number;
  Status: number | string;
  Remark?: string;
};

export type TPutRole = {
  Id: number;
  RoleName: string;
  RoleCode: string;
  Sort: number;
  Status: number | string;
  Remark?: string;
};

export type TErrRole = {
  [Id: string]: {};
  [RoleName: string]: {};
  [RoleCode: string]: {};
  [Sort: string]: {};
  [Status: string]: {};
  [Remark: string]: {};
  [create: string]: {};
};

export type TSearchRole = {
  RoleName: string;
  RoleCode: string;
  Status: string;
};

export type TPutRoleStatus = {
  Id: number;
  Status: number;
};
