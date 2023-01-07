import { FC } from 'react'
import { useRoutes, RouteObject, Navigate } from "react-router-dom";

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


const routeList: RouteObject[] = [
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
        element: <Portal></Portal>
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
];

const GetRouters: FC = () => {
  const element = useRoutes(routeList);
  return element;
}

export default GetRouters