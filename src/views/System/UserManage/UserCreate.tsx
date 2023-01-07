import React, { useState } from 'react';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Layout,
    Radio,
    Row,
    Select,
    Typography,
} from 'antd';
import ShadowCard from '@/components/ShadowCard/ShadowCard';

const { Text, Paragraph } = Typography;

const UserCreate: React.FC = () => {

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };
    const { Option } = Select;
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Row>
            <Col span={12} offset={6}>
                <ShadowCard>
                    <Typography style={{ padding: '15px 15px' }}>
                        <Row justify='space-between'>
                            <Text>新增帳號</Text>
                        </Row>
                        <Paragraph style={{ padding: '15px 0px' }}>
                            <Form {...layout}
                                form={form}
                                name="register"
                                onFinish={onFinish}
                                scrollToFirstError
                            >
                                <Form.Item label="帳號">
                                    <Input placeholder="請輸入帳號" />
                                </Form.Item>
                                <Form.Item label="姓名">
                                    <Input placeholder="請輸入姓名" />
                                </Form.Item>
                                <Form.Item label="信箱">
                                    <Input placeholder="請輸入信箱" />
                                </Form.Item>
                                <Form.Item label="電話">
                                    <Input placeholder="請輸入電話" />
                                </Form.Item>
                                <Form.Item label="單位">
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                                <Form.Item name="radio-group" label="狀態">
                                    <Radio.Group>
                                        <Radio value="a">啟用</Radio>
                                        <Radio value="b">停用</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item
                                    name="select"
                                    label="角色">
                                    <Select placeholder="請選擇角色">
                                        <Option value="china">China</Option>
                                        <Option value="usa">U.S.A</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 16 }}>
                                    <Button>
                                        返回
                                    </Button>
                                    <Button type="primary" htmlType="submit" style={{ margin: '0px 15px' }}>
                                        確定
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Paragraph >
                    </Typography>
                </ShadowCard>
            </Col>
        </Row>

    );
};


export default UserCreate