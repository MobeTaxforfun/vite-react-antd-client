import { FC, useEffect } from 'react'
import { Outlet } from 'react-router';
import { Drawer, Layout, theme } from 'antd';
import './Layouts.less';
import HeaderComponents from '@/layout/components/Header/HeaderComponents';
import MenuComponent from './components/Menu/MenuComponent';
import useLayout from '@/hooks/useLayout';
import { DEVICE } from '@/config/config';

const { Content, Sider } = Layout;
const WIDTH = 992;
const Layouts: FC = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { currentLayout,setDevice,onChangeCollapse} = useLayout();
  
 useEffect(()=>{
  window.onresize = () =>{
    const rect = document.body.getBoundingClientRect();
    if(rect.width < WIDTH){
      setDevice(DEVICE.MOBILE)
    }
    else{
      setDevice(DEVICE.DESKTOP)
    }
  }
 },[])

  return (
    <Layout>
      <HeaderComponents></HeaderComponents>
      <Layout>
        {currentLayout.currentDevice == DEVICE.DESKTOP?(
        <Sider
          breakpoint="lg"
          collapsedWidth="80"
          trigger={null}
          collapsible = {true}
          collapsed ={currentLayout.collapsed}
          style={{ backgroundColor: colorBgContainer }}>
          <MenuComponent></MenuComponent>
        </Sider>
        ):(
          <Drawer
            width="200"
            placement="left"
            bodyStyle={{ padding: 0, height: '100%' }}
            closable={false}
            onClose={onChangeCollapse}
            open={currentLayout.collapsed}
          >
            <MenuComponent></MenuComponent>
          </Drawer>
        )}
        <Layout>
          <Content
            style={{
              margin: '16px 16px',
              padding: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Layouts