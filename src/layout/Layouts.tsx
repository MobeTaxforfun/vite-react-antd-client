import { FC, useEffect } from 'react'
// Router
import { Outlet } from 'react-router';
// Antd 版型
import { Drawer, Layout, theme, message } from 'antd';
import './Layouts.less';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setUserItem } from '@/store/user.store';
// Custom Components
import { getGlobalState } from '@/utils/getGloabal';
import HeaderComponents from '@/layout/components/Header/HeaderComponents';
import MenuComponent from './components/Menu/MenuComponent';

const { Content, Sider } = Layout;
const WIDTH = 992;

const Layouts: FC = () => {
  // Redux

  const dispatch = useDispatch();
  // Redux 取 user資料
  const device = 'de';
  const collapsed = false
  // 使用者操作類型
  const isMobile = device === 'MOBILE';
  // Toggle
  const toggle = () => {
    dispatch(
      setUserItem({
        collapsed: !collapsed,
      }),
    );
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    window.onresize = () => {
      const { device } = getGlobalState();
      console.log(device);
      const rect = document.body.getBoundingClientRect();
      const needCollapse = rect.width < WIDTH;

      dispatch(
        setUserItem({
          device,
          collapsed: needCollapse,
        }),
      );
    };
  }, [dispatch]);

  return (
    <Layout>
      <HeaderComponents collapsed={collapsed} toggle={toggle} ></HeaderComponents>
      <Layout>
        {!isMobile ? (
          <Sider
            width="200"
            trigger={null}
            collapsible
            collapsedWidth={isMobile ? 0 : 80}
            collapsed={collapsed}
            breakpoint="md"
            style={{ backgroundColor: colorBgContainer }}>
            <MenuComponent></MenuComponent>
          </Sider>
        ) : (<Drawer
          width="200"
          placement="left"
          bodyStyle={{ padding: 0, height: '100%' }}
          closable={false}
          onClose={toggle}
          open={!collapsed}
        >
          <MenuComponent></MenuComponent>
        </Drawer>)}
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