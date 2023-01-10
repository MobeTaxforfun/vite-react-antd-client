import { FC } from 'react'
import { Navigate, createBrowserRouter, useRoutes } from "react-router-dom";
import { CustomRouteObject } from './data/router';
import AuthRouter from './utils/authRouter';

import Layouts from "@/layout/Layouts";
import Login from "@/views/Login/Login";
import Portal from "@/views/Portal/Portal";
import UserManage from '@/views/System/UserManage/UserManage';
import RequestDemo from '@/views/System/RequestDemo/RequestDemo'
import NotFound from '@/views/Error/NotFound';
import RoleManage from '@/views/System/RoleManage/RoleManage';
import MenuManage from '@/views/System/MenuManage/MenuManage';
import PromiseManage from '@/views/System/PromiseManage/PromiseManage';
import UserCreate from '@/views/System/UserManage/UserCreate';

export const rootRouteList: CustomRouteObject[] = [
  {
    element: <AuthRouter />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: <Layouts />,
        children: [
          {
            path: '',
            element: <Navigate to="Portal" />
          },
          {
            path: 'Portal',
            element: <Portal></Portal>,
          },
          {
            path: 'UserManage',
            element: <UserManage></UserManage>
          },
          {
            path: 'UserManage/Create',
            element: <UserCreate></UserCreate>
          },
          {
            path: 'RoleManage',
            element: <RoleManage></RoleManage>
          },
          {
            path: 'MenuManage',
            element: <MenuManage></MenuManage>
          },
          {
            path: 'PromiseManage',
            element: <PromiseManage></PromiseManage>
          },
          {
            path: 'RequestDemo',
            element: <RequestDemo></RequestDemo>
          }
        ]
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
];

const GetRouters = () => {
  const element = createBrowserRouter(rootRouteList);
  return element
  // const element = useRoutes(rootRouteList);
  // return element;
}

export default GetRouters