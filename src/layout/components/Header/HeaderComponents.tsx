import { FC } from 'react';
import { Layout, Tooltip, theme } from 'antd';
import {
  ClockCircleOutlined,
  ClockCircleFilled
} from '@ant-design/icons';
const { Header } = Layout;
import BreadcrumbNav from './components/BreadcrumbNav';
import SidebarTrigger from './components/SidebarTrigger';
import AvatarMenu from './components/AvatarMenu';
import useTheme from '@/hooks/useCurrentTheme';
import { THEME } from '@/config/config';
// 定義 Props 介面

const HeaderComponents: FC = () => {
  // 風格
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const { currentTheme,setCurrentTheme} =useTheme();

  const onChangeTheme = () => {
    currentTheme.theme === THEME.DARK? 
    setCurrentTheme({...currentTheme, theme : THEME.LIGHT}) : 
    setCurrentTheme({...currentTheme, theme : THEME.DARK});
  }

  return (
    <Header className="layout-page-header bg-2" style={{ background: colorBgContainer }}>
      <div className="logo" >
        Logo
      </div>
      <div className="layout-page-header-main">
        <div className='layout-page-header-main-li'>
          <SidebarTrigger></SidebarTrigger>
          <BreadcrumbNav></BreadcrumbNav>
        </div>
        <div className='layout-page-header-main-ri'>
          <Tooltip title={currentTheme.theme === 'dark' ? '切換至淺色版' : '切換至夜間版'}>
            <span onClick={onChangeTheme}>
              {(() => {
                if (currentTheme.theme === 'dark') {
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