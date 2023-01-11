/**
 * 作法應當是 自製的 Router Config => 翻譯成附加自製 Auth Components 的 Router Config
 */

import Login from "@/views/Login/Login";
import { ReactElement } from "react";
import { RouteObject, RouteProps } from "react-router-dom";
import AuthRouter from "./authRouter";

export interface MetaProps {
    requiresAuth?: boolean;
}

export interface AppRouteObject {
    children?: AppRouteObject[];
    element?: React.ReactNode;
    path?: string;
    meta?: MetaProps;
}

export const testCusRouter = () => {
    const testRouters: AppRouteObject[] = [
        {
            element: <Login />,
            path: '/login',
            meta: {
                requiresAuth: false
            }
        }
    ]
}

export const getDomRouter = (appRouter: AppRouteObject[]): RouteObject[] => {
    let router: RouteObject[] = appRouter.map(function (value) {
        return {
            path: value.path,
            element: getCompressRouter(value.element, value.meta)
        }
    });
    return router;
}

const getCompressRouter = (element?: React.ReactNode, meta?: MetaProps): ReactElement | null => {
    if (!element)
        return null;
    if (!meta)
        return null;

    return <AuthRouter element={element} meta={meta}></AuthRouter>;
}

export type bar = RouteProps & MetaProps