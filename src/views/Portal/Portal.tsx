import { Card, Col, Row, Space } from 'antd'
import React from 'react'

const Portal = () => {
  return (
    <React.Fragment>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card title="呼叫 Get API (成功)" bordered={false}>
              這裡一片空白甚麼都還沒有
            </Card>
          </Col>
        </Row>
      </Space>
    </React.Fragment>
  )
}

export default Portal