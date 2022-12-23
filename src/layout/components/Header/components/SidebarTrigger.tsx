import {FC} from 'react';
import { 
    MenuUnfoldOutlined, 
    MenuFoldOutlined,
   } from '@ant-design/icons';
//定義
interface ISidebarTriggerProps{
    collapsed: boolean;
    toggle: () => void;
}

const SidebarTrigger:FC<ISidebarTriggerProps> = ({ collapsed, toggle }) => {
  return (
    <span id="sidebar-trigger" onClick={toggle}>
    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
  </span>
  )
}

export default SidebarTrigger