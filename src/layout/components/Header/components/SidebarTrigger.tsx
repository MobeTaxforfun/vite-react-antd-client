import {FC} from 'react';
import { 
    MenuUnfoldOutlined, 
    MenuFoldOutlined,
   } from '@ant-design/icons';
import useLayout from '@/hooks/useLayout';

const SidebarTrigger:FC= () => {

  const { currentLayout,onChangeCollapse} = useLayout();

  return (
    <span id="sidebar-trigger" onClick={onChangeCollapse}>
    {currentLayout.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
  </span>
  )
}

export default SidebarTrigger