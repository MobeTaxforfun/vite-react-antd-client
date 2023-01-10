import { matchPath, Outlet, useLocation } from "react-router-dom";
import { CustomRouteObject } from "../data/router";
import { rootRouteList } from "../initRouter";

const authRouter = () => {
  const location = useLocation();

  let currentNode = searchRoute(location.pathname, rootRouteList);
  debugger;
  return <Outlet />;
};

export default authRouter;

export const searchRoute = (path: string, routes: CustomRouteObject[] = []): CustomRouteObject => {
  let result: CustomRouteObject = {};
  for (let item of routes) {
    if (item.path === path) return item;
    if (item.children) {
      const res = searchRoute(path, item.children);
      if (Object.keys(res).length) result = res;
    }
  }
  return result;
};