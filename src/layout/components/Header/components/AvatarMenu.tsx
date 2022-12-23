import React from 'react'
import { Avatar, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';


const AvatarMenu = () => {
  	// Dropdown Menu
	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: <span className="dropdown-item">回首頁</span>,
				},
				{
					key: "2",
					label: <span className="dropdown-item">個人資料</span>,
				},
				{
					key: "3",
					label: <span className="dropdown-item">變更密碼</span>,
				},
				{
					type: "divider"
				},
				{
					key: "4",
					label: <span className="dropdown-item">登出</span>,
				}
			]}
		></Menu>
	);
  return (
    <React.Fragment>
      <Dropdown overlay={menu} placement="bottom">
				{/* <Avatar size="large"/> Dropdown */}
        <span onClick={(e) => e.preventDefault()}>
          <Space>
            您好，使用者
            <Avatar size="small" style={{marginLeft : 5}}/>
          </Space>
        </span>
			</Dropdown>
    </React.Fragment>
  )
}

export default AvatarMenu