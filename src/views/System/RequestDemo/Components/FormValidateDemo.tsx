import { postCreateDemo, postCreateValidate } from "@/api/axiosDemoApi/axiosDemo";
import React, { useState } from "react";
import { Button, Form, Input } from "antd"

const FormValidateDemo = () => {

    const initValid: any = {
        Id: {
            validateStatus: '',
            help: ''
        },
        Name: {}
    };

    const [validError, setValidError] = useState(initValid);

    const onCreateDemoFinish = async (values: any) => {

        let newValid = { ...initValid };

        for (let key in newValid) {
            newValid[key] = {};
        }

        let data = await postCreateValidate(values)

        for (let key in data.ModelStateErrors) {
            newValid[key] = {
                validateStatus: 'error',
                help: data.ModelStateErrors[key][0]
            };
        }
        setValidError(newValid);
    };

    return (
        <React.Fragment>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onCreateDemoFinish}
                autoComplete="off"
            >
                <Form.Item
                    {...validError.Id}
                    label="Id"
                    name="Id"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    {...validError.Name}
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

export default FormValidateDemo