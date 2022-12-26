import { Form, Input, Checkbox, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { theme } from 'antd';
const { useToken } = theme;

import './Login.less';
import LoginForm from './components/LoginForm';

import loginPage from '@/assets/images/loginPage.png';

const Login = () => {

  const navigate = useNavigate();
  const { token } = useToken();

  const onFinish = (values: string) => {
    console.log('Success:', values);
    navigate("/");
  };

  return (
    <div className="login-page" style={{ backgroundColor: token.colorBgContainer }}>
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src={loginPage} alt="Login" />
        </div>
        <div className="login-wrapper">
          <div className="login-logo">
            <span className="login-text">Welcome back</span>
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  )
}

export default Login