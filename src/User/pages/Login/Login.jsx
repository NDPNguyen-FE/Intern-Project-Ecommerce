import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { actionLogin } from "../../../redux/thunk/auth.thunk.js";
import "./Login.scss";

const valid =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, isLoggedIn, status } = useSelector((state) => state.auth);

  const handleCustomerLogin = (values) => {
    const { email, password } = values;
    dispatch(actionLogin({ email, password }));
  };

  useEffect(() => {
    if (!isLoading && !isLoggedIn && status === "Login_Failure") {
      message.error("Login Failure");
    } else if (!isLoading && isLoggedIn && status === "Login_Success") {
      message.success("Login Success");
      history.push("/");
    }
  }, [isLoading]);

  return (
    <div className='login'>
      <div className='login-logo'>
        <img src={Logo} alt='login-logo' />
      </div>
      <Form
        name='normal_login'
        className='login-form'
        onFinish={handleCustomerLogin}>
        <Form.Item
          name='email'
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your Email!",
            },
            () => ({
              validator(_, value) {
                if (!value || value.match(valid)) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The Email that you entered do not match!")
                );
              },
            }),
          ]}>
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Email'
          />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              min: 8,
              message: "Please input your Password!",
            },
          ]}>
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'>
            Log in
          </Button>
          Or{" "}
          <Link to='/register' className='login-link'>
            register now!
          </Link>
          <Link to='/' className='back-home login-link'>
            Go home
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
