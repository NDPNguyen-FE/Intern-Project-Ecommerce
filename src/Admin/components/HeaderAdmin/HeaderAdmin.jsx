import { BellOutlined, LogoutOutlined } from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Dropdown,
  Menu,
  Row,
  Space,
} from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Logo from "../../../assets/logo.svg";
import { logout } from "../../../redux/actions/auth.action";
import AddProduct from "../AddProduct/AddProduct";
import "./HeaderAdmin.scss";

function HeaderAdmin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key='1'>
        <Space onClick={handleLogout}>
          <LogoutOutlined />
          Logout
        </Space>
      </Menu.Item>
    </Menu>
  );

  const notification = (
    <Card
      title={<h3>Notification</h3>}
      bordered={false}
      style={{ width: 300, padding: "2rem" }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      <Space className='notification-button'>
        <Button>Clear all</Button>
      </Space>
    </Card>
  );

  return (
    <>
      <Row className='header-admin'>
        <Col className='admin-logo' span={4}>
          <img src={Logo} alt='admin logo' />
        </Col>

        <Col span={5} offset={15} className='admin-right'>
          <Space>
            <Button
              className='admin-button'
              size='large'
              onClick={() => setVisible(true)}>
              + Add Product
            </Button>
            <AddProduct visible={visible} setVisible={setVisible} />
          </Space>

          <Space>
            <Dropdown overlay={notification} placement='bottomRight' arrow>
              <Badge dot>
                <BellOutlined style={{ fontSize: "1.3rem" }} />
              </Badge>
            </Dropdown>
          </Space>

          <Space>
            <Dropdown overlay={menu} placement='bottomRight' arrow>
              <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </>
  );
}

export default HeaderAdmin;
