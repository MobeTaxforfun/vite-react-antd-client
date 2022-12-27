import { postCreateDemo } from "@/api/axiosDemoApi/axiosDemo";
import { Button, Form, Input } from "antd"

const FormCreateDemo = () => {

    const onCreateDemoFinish = async (values: any) => {
        console.log(await postCreateDemo(values));
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onCreateDemoFinish}
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
    )
}

export default FormCreateDemo