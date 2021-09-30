import { Button, Col, Drawer, Form, Input, InputNumber, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../redux/thunk/product.thunk";
import "./AddProduct.scss";

function AddProduct({ visible, setVisible }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleCreateProduct = (value) => {
    const valueForm = { ...value };

    const addProductInfor = {
      name: valueForm.name_product,
      image: valueForm.URL,
      weight: valueForm.weight,
      price: valueForm.price,
      description: valueForm.description,
      hierarchicalCategories: {
        lvl0: valueForm.lvl0,
        lvl1: `${valueForm.lvl0} > ${valueForm.lvl1}`,
      },
      type: valueForm.type,
    };

    dispatch(createProduct(addProductInfor));
    setVisible(false);
    form.resetFields();
  };

  return (
    <Drawer
      className='addProduct'
      title='Add Product'
      width={720}
      onClose={() => setVisible(false)}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}>
      <Form
        layout='vertical'
        hideRequiredMark
        onFinish={handleCreateProduct}
        form={form}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label='Name Product:'
              name='name_product'
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
              label='URL Image:'
              name='URL'
              rules={[
                {
                  required: true,
                  message: "Please enter your URL image",
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              label='Weight'
              name='weight'
              rules={[
                {
                  required: true,
                  message: "Please enter weight product",
                },
              ]}>
              <InputNumber />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item
              label='Price'
              name='price'
              rules={[
                {
                  required: true,
                  message: "Please enter price product",
                },
              ]}>
              <InputNumber />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item
              label='Type'
              name='type'
              rules={[
                {
                  required: true,
                  message: "Please enter price product",
                },
              ]}>
              <Input placeholder='Ex: Fruits' />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item
              label='Categories 1'
              name='lvl0'
              rules={[
                {
                  required: true,
                  message: "Please enter category",
                },
              ]}>
              <Input placeholder='Ex: Fruits & Vegetables' />
            </Form.Item>
          </Col>

          <Col span={5}>
            <Form.Item
              label='Categories 2'
              name='lvl1'
              rules={[
                {
                  required: true,
                  message: "Please enter category",
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name='description'
              label='Description'
              rules={[
                {
                  required: true,
                  message: "please enter url description",
                },
              ]}>
              <Input.TextArea
                rows={4}
                placeholder='please enter url description'
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Button
              className='addProduct-button button-success'
              htmlType='submit'
              size='large'
              block>
              Submit
            </Button>
          </Col>

          <Col span={12}>
            <Button
              className=' addProduct-button button-cancel'
              type='primary'
              size='large'
              danger
              onClick={() => setVisible(false)}
              block>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
}

export default AddProduct;
