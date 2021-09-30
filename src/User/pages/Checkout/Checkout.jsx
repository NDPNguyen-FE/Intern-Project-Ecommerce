import { Button, Col, Divider, Form, Input, message, Radio, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createOrder } from "../../../redux/thunk/order.thunk";
import "./Checkout.scss";

const validEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validPhone = /(03|84|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

function Checkout() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const history = useHistory();

  const { cart } = useSelector((state) => state.cart);
  const { profile, isLoggedIn } = useSelector((state) => state.auth);

  const { status, isLoading } = useSelector((state) => state.order);

  const totalPrice = cart.reduce((total, product) => {
    total += product.price * product.quantity;
    return total;
  }, 0);

  useEffect(() => {
    if (isLoggedIn && status === "Order_Success") {
      message.success(" Order successfully");
      history.push("/ordercomplete");
    }
  }, [isLoading]);

  const showOrderList = (cart) => {
    return cart.map((item, index) => {
      return (
        <Row className='order-item' key={index} gutter={[16, 48]}>
          <Col span={19}>
            {`${item.quantity} x ${item.name} | ${item.weight} lb `}{" "}
          </Col>
          <Col>$ {(item.quantity * item.price).toFixed(2)}</Col>
        </Row>
      );
    });
  };

  const handleSubmitOrder = (values) => {
    const inforCustomer = { ...values };

    const inforOrder = {
      createAt: new Date().getTime,
      idUser: profile.id,
      products: [...cart],
      totalPayment: totalPrice,
      ...inforCustomer,
    };

    dispatch(createOrder(inforOrder));
  };

  return (
    <div className='checkout'>
      <Row className='checkout-container' gutter={[48, 16]}>
        <Col className='checkout-col checkout-profile' span={15}>
          <h3 className='checkout-title'>Profile Order </h3>
          <Form
            form={form}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout='vertical'
            onFinish={handleSubmitOrder}
            name='register'>
            <Form.Item
              name='fullname'
              label='Your Fullname'
              rules={[
                {
                  required: true,
                  message: "Please input your fullname",
                  whitespace: true,
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              name='email'
              label='Your email'
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your email",
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
              <Input />
            </Form.Item>

            <Form.Item
              name='phone'
              label='Your Phone'
              rules={[
                {
                  required: true,
                  message: "Please input your phone number",
                },
                () => ({
                  validator(_, value) {
                    if (!value || value.match(validPhone)) {
                      return Promise.resolve();
                    }

                    return Promise.reject(new Error("Invalid phone number"));
                  },
                }),
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              name='address'
              label='Your Address'
              rules={[
                {
                  required: true,
                  message: "Please input your address",
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item name='payment' label='Payment Options'>
              <Radio.Group>
                <Radio value='Cash'>Cash</Radio>
                <Radio value='Online'>Online</Radio>
              </Radio.Group>
            </Form.Item>

            <Button
              className='checkout-button'
              htmlType='submit'
              block
              disabled={!isLoggedIn}>
              Proceed to Checkout
            </Button>
          </Form>
        </Col>

        <Col className='checkout-col checkour-order' span={9}>
          <h3 className='checkout-title'>Your Order</h3>

          <div className='order-list'>
            {showOrderList(cart)}
            <Divider />
            <div className='order-total'>
              <Row>
                <Col span={20}>
                  <h3>Total Order</h3>
                </Col>
                <Col>$ {totalPrice.toFixed(2)}</Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Checkout;
