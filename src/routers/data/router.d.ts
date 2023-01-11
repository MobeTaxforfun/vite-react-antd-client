import { type } from "os";
import { RouteObject } from "react-router-dom";

/**
 * 自定義 Meta 屬性
 */
export type TRouterMeta = {
  isAuth: boolean;
  permission?: string;
  title: string;
  key: string;
};
