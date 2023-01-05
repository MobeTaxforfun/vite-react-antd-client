import ShadowCard from '@/components/ShadowCard/ShadowCard'
import { Form, Select, Table } from 'antd'
import React from 'react'

const PromiseManage = () => {
  return (
    <React.Fragment>
      <ShadowCard>
        <Form.Item
          label="角色"
          name="enable" style={{ margin: '5px', width: 200 }}>
          <Select>
            <Select.Option value="">請選擇</Select.Option>
            <Select.Option value="系統管理員">系統管理員</Select.Option>
            <Select.Option value="一般使用者">一般使用者</Select.Option>
          </Select>
        </Form.Item>
        <Table></Table>
      </ShadowCard>
    </React.Fragment>
  )
}

export default PromiseManage