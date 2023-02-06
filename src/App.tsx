import React from 'react'
import { ConfigProvider, message, theme } from 'antd'
import GetRouters from '@/routers/initRouter';
import useCurrentTheme from '@/hooks/useCurrentTheme';
import 'antd/dist/reset.css'
import './App.css'
import { THEME } from './config/config';
import { RouterProvider } from 'react-router-dom';
import AuthRouter from './routers/utils/authRouter';

function App() {

  const [messageApi, contextHolder] = message.useMessage();
  const { currentTheme } = useCurrentTheme();

  return (
    <React.Fragment>
      {contextHolder}
      <ConfigProvider
        componentSize="middle"
        theme={
          {
            token: { colorPrimary: '#13c2c2' },
            algorithm: currentTheme.theme === THEME.DARK ? theme.darkAlgorithm : theme.defaultAlgorithm
          }
        }>
        <RouterProvider router={GetRouters()} />
        {/* 改為使用 6.4 以上的 createBrowserRouter */}
        {/* <GetRouters/> */}
      </ConfigProvider>
    </React.Fragment>
  )
}

export default App
