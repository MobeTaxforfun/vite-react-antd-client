import { Button, Form, Input, Typography } from 'antd'
import React, { useState } from 'react'

const FormValidateSummary = () => {
    const { Text } = Typography
    const initValid: any = {
        Summary: ""
    };

    const [errSummary, setErrSummary] = useState(initValid);

    return (
        <React.Fragment>
            <div>
                <Text type="danger">Ant Design (danger)</Text>
            </div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
            >
                <Form.Item
                    label="Id"
                    name="Id"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="Name"
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        確認
                    </Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    )
}

export default FormValidateSummary