import { Col, Row, Space } from 'antd';
import React, { FC } from 'react'
import './TableOperate.less'

export interface ITableOperate {
    OperateRight: React.ReactNode;
    OperateLeft: React.ReactNode;
}

const TableOperate: FC<ITableOperate> = ({
    OperateRight,
    OperateLeft
}) => {
    return (
        <Row gutter={[16, 4]} className='table-operate'>
            <Col xl={12} xs={24} className='operate-left'>
                <Space>
                    {OperateLeft}
                </Space>
            </Col>
            <Col xl={12} xs={24} className='operate-right'>
                <Space>
                    {OperateRight}
                </Space>
            </Col>
        </Row>
    )
}

export default TableOperate