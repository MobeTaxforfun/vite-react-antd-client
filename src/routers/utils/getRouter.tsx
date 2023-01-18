/**
 * 作法應當是 Router  => 翻譯成附加自製 Auth Components 的 Router Config
 */

import { ReactElement } from "react";
import { RouteObject } from "react-router-dom";
import AuthRouter from "./authRouter";


export const getDomRouter = (appRouter: RouteObject[]): RouteObject[] => {
    let router: RouteObject[] = appRouter.map(function (value) {
        return {
            path: value.path,
            element: getCompressRouter(value.element)
        }
    });
    return router;
}

const getCompressRouter = (element?: React.ReactNode): ReactElement | null => {
    if (!element)
        return null;
    return <AuthRouter></AuthRouter>;
}
