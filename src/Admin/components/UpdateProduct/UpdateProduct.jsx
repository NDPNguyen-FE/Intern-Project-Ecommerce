import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
} from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../redux/thunk/product.thunk.js";
import "./UpdateProduct.scss";

const { TextArea } = Input;

function UpdateProduct({ visible, setVisible, product }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const formValue = { ...values };

    const inforUpdate = {
      name: formValue.name,
      image: formValue.image,
      weight: formValue.weight,
      price: formValue.price,
      description: formValue.description,
      hierarchicalCategories: {
        lvl0: formValue.lvl0,
        lvl1: `${formValue.lvl0} > ${formValue.lvl1}`,
      },
      type: formValue.type,
    };

    dispatch(updateProduct({ id: product.id, product: inforUpdate }));
    setVisible(false);
    message.success("Update Product success");
  };

  return (
    <>
      <Modal
        className='update-modal'
        visible={visible}
        title='Update Product'
        mask={true}
        maskStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.02)",
        }}
        footer={null}
        onOk={() => setVisible(false)}
        onCancel={() => {
          setVisible(false);
          form.resetFields();
        }}>
        <Form form={form} name='form-update' onFinish={onFinish}>
          <Form.Item
            name='name'
            label='Name Product'
            initialValue={product.name}
            rules={[
              {
                required: true,
                message: "Please input your name product",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name='image'
            label='Image Product'
            initialValue={product.image}
            rules={[
              {
                required: true,
                message: "Please input your name product",
              },
            ]}>
            <Input />
          </Form.Item>

          <Row>
            <Col span={12}>
              <Form.Item
                name='weight'
                label='Weight Product'
                initialValue={product.weight}
                rules={[
                  {
                    required: true,
                    message: "Please input your weight product",
                  },
                ]}>
                <InputNumber />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name='price'
                label='Price Product'
                initialValue={product.price}
                rules={[
                  {
                    required: true,
                    message: "Please input your name product",
                  },
                ]}>
                <InputNumber />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name='lvl0'
            label='Category 1'
            initialValue={product.hierarchicalCategories["lvl0"]}
            rules={[
              {
                required: true,
                message: "Please input your name product",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name='lvl1'
            label='Category 2'
            initialValue={product.type}
            rules={[
              {
                required: true,
                message: "Please input your name product",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name='description'
            label='Description'
            initialValue={product.description}
            rules={[
              {
                required: true,
                message: "Please input product description",
              },
            ]}>
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name='type'
            label='Type'
            initialValue={product.type}
            rules={[
              {
                required: true,
                message: "Please input product description",
              },
            ]}>
            <Input />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Button htmlType='submit' block>
                Submit
              </Button>
            </Col>
            <Col span={12}>
              <Button block>Cancel</Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default UpdateProduct;
