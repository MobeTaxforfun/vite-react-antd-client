import { FC, ReactElement } from 'react';
import { MetaProps } from './getRouter';

export interface IAuthRouter {
  element?: React.ReactNode;
  meta?: MetaProps
}

const authRouter: FC<IAuthRouter> = ({ element, meta }) => {
  // 不驗證直接回傳
  if (!meta?.requiresAuth) return (element as ReactElement);

  // 做驗證的事情再回傳
  return (element as ReactElement);
};

export default authRouter;