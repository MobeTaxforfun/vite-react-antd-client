import { FC,useState } from "react";
import { Button, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";

interface ILoginFrom {
	username: string,
	password: string
}

const LoginForm: FC = () => {

	const [errorMsg, setErrorMsg] = useState('錯誤');

	const onFinish = (values: ILoginFrom) => {
		console.log('Success:', values);
		setErrorMsg('測試錯誤');
	};

	return (
		<Form
			onFinish={onFinish}
		>
			<Form.Item
				name="username"
				rules={[{ required: true, message: "請輸入帳號" }]}
				help = {errorMsg}
			>
				<Input placeholder="帳號：admin" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: "請輸入密碼" }]}
			>
				<Input.Password
					placeholder="密碼：123456"
					prefix={<LockOutlined />}
				/>
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {

					}}
					icon={<CloseCircleOutlined />}
				>
					取消
				</Button>
				<Button
					type="primary"
					htmlType="submit"
					icon={<UserOutlined />}
				>
					登入
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
