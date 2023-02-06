import { FC, ReactElement } from 'react';
import { Outlet, RouteObject, useMatches } from 'react-router-dom';

interface IAuthRouter {
  element?: React.ReactNode
}

const AuthRouter = () => {
  // 不驗證直接回傳
  let matches: RouteObject[] = useMatches();
  const routesInfos = matches
    .filter((match) => Boolean(match.handle?.routeMeta))
    .map((match) => {
      return {
        title: match.handle.routeMeta.title,
      };
    });
  console.log(routesInfos);
  // 做驗證的事情再回傳
  return <Outlet />;
};

export default AuthRouter;