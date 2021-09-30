import {
  ClearOutlined,
  HeartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Col, Dropdown, Menu, Row, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { logout } from "../../../redux/actions/auth.action";
import { removeWishListSuccess } from "../../../redux/actions/wishlist.action";
import Profile from "../Profile/Profile";
import "./Header.scss";

function Header() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { totalWishList, wishlist } = useSelector((state) => state.wishlist);

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  const handleRemoveWishList = (product) => {
    dispatch(removeWishListSuccess(product));
  };

  const menuData = [
    {
      path: "/",
      name: "HOME",
    },
    {
      path: "/products",
      name: "SHOP",
    },
    {
      path: "/offer",
      name: "OFFER",
    },
    {
      path: "/faq",
      name: "FAQ",
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item key='1'>
        <Space onClick={() => setVisible(true)}>Account Information</Space>
        <Profile visible={visible} setVisible={setVisible} />
      </Menu.Item>
      <Menu.Item onClick={handleLogout} key='2'>
        <Space>
          <LogoutOutlined />
          Logout
        </Space>
      </Menu.Item>
    </Menu>
  );

  const showNav = (data) => {
    return data.map((item, index) => {
      return (
        <Link to={item.path} className='link__item' key={index}>
          {item.name}
        </Link>
      );
    });
  };

  const wishlistData = (
    <Menu style={{ width: "300px" }}>
      {wishlist &&
        wishlist.map((item, index) => {
          return (
            <Menu.Item key={index}>
              <Link to={`/product/${item.id}`}>
                <Row className='wishlist-item' align='midle'>
                  <Col
                    span={20}
                    style={{
                      display: "flex",
                      padding: "0 1rem",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <img
                      className='wishlist-image'
                      src={item.image}
                      alt='wishlist'
                      width='50px'
                    />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </Col>
                  <Col span={4}>
                    <ClearOutlined
                      onClick={() => {
                        handleRemoveWishList(item);
                      }}
                    />
                  </Col>
                </Row>
              </Link>
            </Menu.Item>
          );
        })}
    </Menu>
  );

  return (
    <div className='header'>
      <Row>
        <Col span={3}>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </Col>

        <Col span={8} offset={13} className='header__link'>
          <Space>{showNav(menuData)}</Space>

          <Space>
            <Dropdown
              overlay={wishlistData}
              placement='bottomRight'
              className='wishlist-list'
              arrow>
              <Badge count={totalWishList}>
                <HeartOutlined style={{ fontSize: "20px" }} />
              </Badge>
            </Dropdown>
          </Space>

          {isLoggedIn ? (
            <Space style={{ marginLeft: "1rem" }}>
              <Dropdown overlay={menu} placement='bottomRight' arrow>
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              </Dropdown>
            </Space>
          ) : (
            <Link to='/login' className='header__button'>
              Join
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Header;
