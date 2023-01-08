import { FC, useEffect } from 'react'
import { Outlet } from 'react-router';
import { Drawer, Layout, theme } from 'antd';
import './Layouts.less';
import HeaderComponents from '@/layout/components/Header/HeaderComponents';
import MenuComponent from './components/Menu/MenuComponent';
import useLayout from '@/hooks/useLayout';

const { Content, Sider } = Layout;
const WIDTH = 992;
const Layouts: FC = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP';
  const { currentLayout,onChangeCollapse} = useLayout();
  
  return (
    <Layout>
      <HeaderComponents></HeaderComponents>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          trigger={null}
          collapsible = {true}
          collapsed ={currentLayout.collapsed}
          style={{ backgroundColor: colorBgContainer }}>
          <MenuComponent></MenuComponent>
        </Sider>
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