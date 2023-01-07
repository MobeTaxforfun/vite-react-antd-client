import { Button, Form, Input, Select } from 'antd'
import React from 'react'

const MenuSearch = () => {
    return (
        <Form
            layout="inline"
            name="basic">
            <Form.Item
                label="選單名稱"
                name="name" style={{ margin: '5px' }}>
                <Input />
            </Form.Item>
            <Form.Item
                label="狀態"
                name="enable" style={{ margin: '5px', width: 200 }}>
                <Select>
                    <Select.Option value="">請選擇</Select.Option>
                    <Select.Option value="啟用">啟用</Select.Option>
                    <Select.Option value="停用">停用</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" style={{ margin: '5px' }}>
                    搜尋
                </Button>
                <Button style={{ margin: '5px' }}>
                    重製
                </Button>
            </Form.Item>
        </Form>
    )
}

export default MenuSearch