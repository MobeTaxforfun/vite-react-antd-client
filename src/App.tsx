import React, { useEffect } from 'react'
import { ConfigProvider, message, theme as antdTheme } from 'antd'

import 'antd/dist/reset.css'
import './App.css'
import GetRouters from './routers';
import useTheme from './hooks/useTheme';

function App() {

  const [messageApi, contextHolder] = message.useMessage();

  const { theme } = useTheme();
  debugger;
  return (
    <React.Fragment>
      {contextHolder}
      <ConfigProvider
        componentSize="middle"
        theme={
          {
            token: { colorPrimary: '#13c2c2' },
            algorithm: theme.theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm
          }
        }>
        <GetRouters></GetRouters>
      </ConfigProvider>
    </React.Fragment>
  )
}

export default App
