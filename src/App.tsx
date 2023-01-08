import React from 'react'
import { ConfigProvider, message, theme } from 'antd'
import GetRouters from './routers';
import useCurrentTheme from '@/hooks/useCurrentTheme';
import 'antd/dist/reset.css'
import './App.css'
import { THEME } from './config/config';

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
        <GetRouters></GetRouters>
      </ConfigProvider>
    </React.Fragment>
  )
}

export default App
