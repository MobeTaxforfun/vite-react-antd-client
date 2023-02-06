/**
 * 放一些需要與 Router 連動的功能
 */

import { CustomRouteObject } from "@/routers/data/router";

/**
 * 用 Path 找到當前的 Router 物件
 * @param path 現在路徑
 * @param routes 自訂 Router config 的集合
 * @returns 找到的 Router
 */
export const searchRoute = (): CustomRouteObject => {
  let result: CustomRouteObject = {};

  return result;
};
