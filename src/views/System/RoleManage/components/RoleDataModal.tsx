import { IRoleDataType, TErrRole } from "@/data/role";
import { Button, Form, Input, InputNumber, Modal, Radio } from "antd";
import { FC, useEffect } from "react";

// 建立一個 這個 Modal Props 的儲存介面
export interface RoleDataModalProps {
    // 需要把 submit openModal 傳進來
    modalOpen: boolean;
    onChangeModal: () => void;
    // 把資料傳進來
    values: Partial<IRoleDataType> | null;
    // 把送出事件傳進來
    onSubmit: (values: any) => void;
    // 來至後端的驗證
    err: TErrRole;
}

type modalInfo = {
    title: string,
    btnOkText: string
}

const layout = {
    labelCol: { span: 4 }
};

const RoleDataModal: FC<RoleDataModalProps> = ({
    modalOpen,
    onChangeModal,
    values,
    onSubmit,
    err
}) => {

    const [form] = Form.useForm();
    // 用 useEffect 掛載 antd form 組件不然更新 initialValues 的時候會怪怪的
    useEffect(() => {
        // 解決 Instance created by `useForm` is not connected to any Form element.
        if (modalOpen) {
            form.setFieldsValue(values);
        }
    }, [form, values])

    const defaultModalInfo = {
        title: '',
        btnOkText: '確定'
    }
    const basicInfo: modalInfo = {
        ...defaultModalInfo
    }

    if (values != null) {
        basicInfo.title = "更新精靈";
        basicInfo.btnOkText = "更新"
        // 這邊只支援字串要轉一下
        values.Status = values.Status?.toString();
    } else {
        basicInfo.title = "新增精靈";
        basicInfo.btnOkText = "新增"
        // 初始化
        values = {
            Id: 0,
            Sort: 1,
            Status: '0',
            RoleName: '',
            RoleCode: '',
            Remark: ''
        }
    }

    return (
        <Modal
            title={basicInfo.title}
            //cancelText="取消"
            //okText={basicInfo.btnOkText}
            open={modalOpen}
            //onOk={onSubmit}
            onCancel={onChangeModal}
            // 關閉視窗後卸載組件
            destroyOnClose
            footer={[
                <Button key="back" onClick={onChangeModal}>
                    取消
                </Button>,
                <Button key="submit" type="primary" onClick={() => form.submit()}>
                    {basicInfo.btnOkText}
                </Button>
            ]}
            style={{ width: '480px' }}>
            <Form
                {...layout}
                // 配合卸載組件的設定
                preserve={false}
                name="nest-messages"
                style={{ paddingTop: 30 }}
                form={form}
                onFinish={onSubmit}
                initialValues={
                    values as IRoleDataType
                }
            >
                <Form.Item hidden name="Id">
                    <Input type="hidden" />
                </Form.Item>
                <Form.Item
                    {...err.RoleName}
                    name="RoleName"
                    label="角色名稱"
                    rules={[{ required: true, message: '角色名稱為必填' }]}>
                    <Input placeholder="請輸入角色名稱" />
                </Form.Item>
                <Form.Item
                    {...err.RoleCode}
                    name="RoleCode"
                    label="權限標記"
                    rules={[{ required: true, message: '權限標記為必填' }]}>
                    <Input placeholder="請輸入權限標記" />
                </Form.Item>
                <Form.Item
                    {...err.Sort}
                    label="排序"
                    name="Sort"
                    rules={[
                        { type: 'number', message: '排序必須為一數字' },
                        { required: true, message: '排序為必填' }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    {...err.Status}
                    label="狀態" name="Status">
                    <Radio.Group>
                        <Radio value="1">啟用</Radio>
                        <Radio value="0">停用</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    {...err.Remark}
                    name="Remark"
                    label="備註">
                    <Input.TextArea />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default RoleDataModal