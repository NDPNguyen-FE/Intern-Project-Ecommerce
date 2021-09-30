import { Button, Col, Divider, Drawer, Form, Input, message, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomers } from "../../../redux/thunk/customer.thunk";
import { getOrderById } from "../../../redux/thunk/order.thunk";
import "./Profile.scss";

const DescriptionItem = ({ title, content }) => (
  <div className='site-wrapper'>
    <p className='site-label'>{title}:</p>
    {content}
  </div>
);

function Profile({ visible, setVisible }) {
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.customer);
  const { orderFilter } = useSelector((state) => state.order);

  const handleUpdateUser = (value) => {
    const inforUpdate = {
      fullname: value.name,
      email: value.account,
      phone: value.phone,
      address: value.address,
    };

    dispatch(updateCustomers({ id: profile.id, customer: inforUpdate }));

    if (status === "Update_Success") {
      message.success("Update Profile Success");
    }
  };

  const showOrder = (data) => {
    return data.map((item, index) => {
      return (
        <Row key={index} className='profile-order'>
          <Col span={6}>
            <DescriptionItem title='Orderer' content={item.fullname} />
          </Col>
          <Col span={6}>
            <DescriptionItem title='Email' content={item.email} />
          </Col>

          <Col span={6}>
            <DescriptionItem
              title='Total Payment'
              content={`$${item.totalPayment}`}
            />
          </Col>
          <Col span={6}>
            <DescriptionItem title='Email' content={item.email} />
          </Col>
        </Row>
      );
    });
  };

  useEffect(() => {
    dispatch(getOrderById(profile.id));
  }, [dispatch, profile.id]);

  return (
    <div className='profile'>
      <Drawer
        width={640}
        placement='right'
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}>
        <p className='profile-title' style={{ marginBottom: 24 }}>
          {`${profile.isAdmin ? "Admin" : "User"} `} Profile
        </p>

        <p className='profile-position'>{`${
          profile.isAdmin ? "Admin" : "Personal"
        } `}</p>

        <Form layout='vertical' onFinish={handleUpdateUser}>
          <Row className='profile-row' gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                name='name'
                label='Name Product'
                initialValue={profile.fullname}
                rules={[
                  {
                    required: true,
                    message: "Please input your name product",
                  },
                ]}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name='account'
                label='Account'
                initialValue={profile.email}
                rules={[
                  {
                    required: true,
                    message: "Please input your name product",
                  },
                ]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row className='profile-row' gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                name='phone'
                label='Phone Number'
                initialValue={profile.phone}
                rules={[
                  {
                    required: true,
                    message: "Please input your name product",
                  },
                ]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row className='profile-row' gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                name='address'
                label='Address'
                initialValue={profile.address}
                rules={[
                  {
                    required: true,
                    message: "Please input your name product",
                  },
                ]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row className='profile-row' gutter={[16, 16]}>
            <Button c htmlType='submit' onClick={() => {}}>
              Update
            </Button>
          </Row>
        </Form>
        <Divider />
        <h3 className='profile-position'> My Order </h3>
        {showOrder(orderFilter)}
      </Drawer>
    </div>
  );
}

export default Profile;
