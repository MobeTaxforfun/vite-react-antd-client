import { type } from "os";
import { RouteObject } from "react-router-dom";

/**
 * 自定義 Meta 屬性
 */

type MetaProps = {
  isAuth: boolean;
  permission?: string;
  title: string;
  key: string;
};

/**
 * 繼承 react-router 做擴展
 */
type RouterMeta = {
  meta?: MetaProps;
};

export type CustomRouteObject = RouteObject & RouterMeta;
