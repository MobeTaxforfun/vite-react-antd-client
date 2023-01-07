import React, { useEffect } from 'react'
import { Button, ConfigProvider, message, theme as antdTheme } from 'antd'

// redux 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setGlobalState } from '@/store/global.store';

import 'antd/dist/reset.css'
import './App.css'
import GetRouters from './routers';

function App() {

  const { theme } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  // 分派 Redux
  const setTheme = (dark = true) => {
    dispatch(
      setGlobalState({
        theme: dark ? 'dark' : 'light',
      }),
    );
  };

  // 初始化夜間/淺色
  useEffect(() => {
    setTheme(theme === 'dark');
    if (!localStorage.getItem('theme')) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      function matchMode(e: MediaQueryListEvent) {
        setTheme(e.matches);
      }
      mql.addEventListener('change', matchMode);
    }
  }, []);

  return (
    <React.Fragment>
      {contextHolder}
      <ConfigProvider
        componentSize="middle"
        theme={
          {
            token: { colorPrimary: '#13c2c2' },
            algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm
          }
        }>
        <GetRouters></GetRouters>
      </ConfigProvider>
    </React.Fragment>
  )
}

export default App
