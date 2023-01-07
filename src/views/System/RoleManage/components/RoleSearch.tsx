import { TSearchRole } from '@/data/role';
import { Button, Form, Input, Select } from 'antd'
import { FC, useEffect } from 'react'

export interface IRoleSearch {
    searchFormData: Partial<TSearchRole>,
    onSearch: (values: any) => void,
    onReset: () => void
}

const RoleSearch: FC<IRoleSearch> = ({
    searchFormData,
    onSearch,
    onReset
}) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(searchFormData)
    }, [form, searchFormData])

    return (
        <Form
            form={form}
            onFinish={onSearch}
            layout="inline"
            name="basic">
            <Form.Item
                label="角色名稱"
                name="RoleName">
                <Input />
            </Form.Item>
            <Form.Item
                label="權限標記"
                name="RoleCode">
                <Input />
            </Form.Item>
            <Form.Item
                label="狀態"
                name="Status" style={{ width: 200 }}>
                <Select>
                    <Select.Option value="">請選擇</Select.Option>
                    <Select.Option value="1">啟用</Select.Option>
                    <Select.Option value="0">停用</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    key="search"
                    htmlType='submit'
                >
                    搜尋
                </Button>
                <Button onClick={onReset}>
                    重製
                </Button>
            </Form.Item>
        </Form>
    )
}

export default RoleSearch