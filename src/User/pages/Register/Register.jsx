import {
  AutoComplete,
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Select,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { createCustomers } from "../../../redux/thunk/customer.thunk";
import "./Register.scss";

const { Option } = Select;
const valid = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
const validEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function Register() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isLoading, status } = useSelector((state) => state.customer);
  const history = useHistory();
  const [result, setResult] = useState([]);

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70,
        }}>
        <Option value='84'>+84</Option>
        <Option value='86'>+86</Option>
      </Select>
    </Form.Item>
  );

  const handleCreateCustomer = (value) => {
    const customer = {
      email: value.email,
      password: value.password,
      fullname: value.fullname,
      phone: `${value.prefix}${value.phone}`,
      address: value.address,
      isAdmin: false,
    };

    dispatch(createCustomers(customer));
  };

  useEffect(() => {
    if (!isLoading && status) {
      message.success("Register success!");
      if (status === "Register_Success") {
        history.push("/login");
      }
    }
  }, [isLoading]);

  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map(
        (domain) => `${value}@${domain}`
      );
    }

    setResult(res);
  };

  return (
    <div className='register'>
      <div className='login-logo'>
        <img src={Logo} alt='login-logo' />
      </div>
      <Form
        className='register-form'
        {...formItemLayout}
        form={form}
        name='register'
        onFinish={handleCreateCustomer}
        initialValues={{
          prefix: "84",
        }}
        scrollToFirstError>
        <Form.Item
          name='email'
          label='E-mail'
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your E-mail!",
            },
            () => ({
              validator(_, value) {
                if (!value || value.match(validEmail)) {
                  return Promise.resolve();
                }

                return Promise.reject();
              },
            }),
          ]}>
          <AutoComplete
            onSearch={handleSearch}
            placeholder='Please input your email'>
            {result.map((email) => (
              <Option key={email} value={email}>
                {email}
              </Option>
            ))}
          </AutoComplete>
        </Form.Item>

        <Form.Item
          name='password'
          label='Password'
          rules={[
            {
              required: true,
              min: 8,
              message: "Please input your password!",
            },
          ]}
          hasFeedback>
          <Input.Password placeholder='Please input your password' />
        </Form.Item>

        <Form.Item
          name='confirm'
          label='Confirm Password'
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}>
          <Input.Password placeholder='Please confirm your password' />
        </Form.Item>

        <Form.Item
          name='fullname'
          label='Fullname'
          rules={[
            {
              required: true,
              message: "Please input your fullname!",
              whitespace: true,
            },
          ]}>
          <Input placeholder='Please input your fullname' />
        </Form.Item>

        <Form.Item
          name='phone'
          label='Phone Number'
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
            () => ({
              validator(_, value) {
                if (!value || value.match(valid)) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}>
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
            placeholder='Please input your phone number'
          />
        </Form.Item>

        <Form.Item
          name='address'
          label='Address'
          rules={[
            {
              required: true,
              message: "Please input your address!",
              whitespace: true,
            },
          ]}>
          <Input placeholder='Please input your address' />
        </Form.Item>

        <Form.Item
          name='agreement'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}>
          <Checkbox>
            I have read the{" "}
            <Link to='' className='login-link'>
              agreement
            </Link>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
