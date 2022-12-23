import {FC} from 'react'
import { useRoutes ,RouteObject,Navigate } from "react-router-dom";

import Layouts from "@/layout/Layouts";
import Login from "@/views/Login/Login";
import Portal from "@/views/System/Portal/Portal";
import UserManage from '@/views/System/UserManage/UserManage';
import NotFound from '@/views/Error/NotFound';


const routeList: RouteObject[] = [
  {
    path: '/login',
    element:<Login/>,
    
  },
  { 
    path: '/',
    element :<Layouts/>,
    children:[
      {
        path:'',
        element:<Navigate to="Portal"/>
      },
      {
        path:'Portal',
        element:<Portal></Portal>
      },
      {
        path:'UserManage',
        element:<UserManage></UserManage>
      },
    ]
  },
  {
    path: '*',
    element:<NotFound></NotFound>
  }
];

const GetRouters:FC = () => {
  const element = useRoutes(routeList);
  return element;
}

export default GetRouters