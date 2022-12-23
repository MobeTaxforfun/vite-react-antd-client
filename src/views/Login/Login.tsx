import { Form, Input, Checkbox, Button} from 'antd';
import { useNavigate } from 'react-router-dom';

import './Login.less';

const Login = () => {

  const navigate = useNavigate();

  const onFinish = (values:string) => {
    console.log('Success:', values);
    navigate("/"); 
  };

  return (
    <div className="login-page">
    <div className="login-box">
      <div className="illustration-wrapper">
        <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
      </div>
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <p className="form-title">Welcome back</p>
        <p>Login to the Dashboard</p>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password 
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            LOGIN
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
  )
}

export default Login