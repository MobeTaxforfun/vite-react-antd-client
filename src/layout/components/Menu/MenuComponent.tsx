import {FC} from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import {
  AppstoreOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu ,theme} from 'antd';



type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  path?:string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    path,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('首頁', '/Portal', <PieChartOutlined />),

  getItem('系統管理', 'sub1', <MailOutlined />, [
    getItem('帳號管理', '/UserManage'),
    getItem('角色管理', '/RoleManage'),
    getItem('選單管理', '/MenuManage'),
    getItem('權限管理', '/PromiseManage'),
    getItem('請求範例','/RequestDemo')
  ]),

  getItem('系統監控', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
];

const MenuComponent:FC = () => {

  // 跳轉頁面 藉由 Menu 事件來實現跳轉
  const navigate = useNavigate();
  const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
		navigate(key);
	};

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Menu
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
      style={{ background: colorBgContainer }} 
      onClick={clickMenu}
    />
  )
}

export default MenuComponent