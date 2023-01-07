import { FC, createElement } from 'react';
import { Layout, Tooltip, theme as antdTheme } from 'antd';
// antd icon 
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ClockCircleOutlined,
  ClockCircleFilled
} from '@ant-design/icons';
const { Header } = Layout;
//Redux 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setGlobalState } from '@/store/global.store';
// Custom
import BreadcrumbNav from './components/BreadcrumbNav';
import SidebarTrigger from './components/SidebarTrigger';
import AvatarMenu from './components/AvatarMenu';
// 定義 Props 介面
interface IHeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

const HeaderComponents: FC<IHeaderProps> = ({ collapsed, toggle }) => {

  // 風格
  const {
    token: { colorBgContainer },
  } = antdTheme.useToken();

  // Redux Theme
  const { theme } = useSelector((state: RootState) => state.global);
  // Redux 分派
  const dispatch = useDispatch();

  const onChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    dispatch(
      setGlobalState({
        theme: newTheme,
      }),
    );
  }

  return (
    <Header className="layout-page-header bg-2" style={{ background: colorBgContainer }}>
      <div className="logo" >
        Logo
      </div>
      <div className="layout-page-header-main">
        <div className='layout-page-header-main-li'>
          <SidebarTrigger collapsed={collapsed} toggle={toggle}></SidebarTrigger>
          <BreadcrumbNav></BreadcrumbNav>
        </div>
        <div className='layout-page-header-main-ri'>
          <Tooltip title={theme === 'dark' ? '切換至淺色版' : '切換至夜間版'}>
            <span onClick={onChangeTheme}>
              {(() => {
                if (theme === 'dark') {
                  return (
                    <ClockCircleOutlined />
                  )
                } else {
                  return (
                    <ClockCircleFilled />
                  )
                }
              })()}
            </span>
          </Tooltip>
          <AvatarMenu></AvatarMenu>
        </div>
      </div>
    </Header>
  )
}

export default HeaderComponents