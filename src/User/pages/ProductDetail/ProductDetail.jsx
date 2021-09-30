import { CheckCircleOutlined, HeartOutlined } from "@ant-design/icons";
import Slider from "@ant-design/react-slick";
import {
  Breadcrumb,
  Button,
  Col,
  Comment,
  Divider,
  Form,
  Input,
  InputNumber,
  List,
  message,
  Row,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialPinterestCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addCartWithQuantity } from "../../../redux/actions/cart.action";
import { getWishListSuccess } from "../../../redux/actions/wishlist.action";
import {
  createComment,
  getCommentByProduct,
} from "../../../redux/thunk/comment.thunk";
import { getProductById } from "../../../redux/thunk/product.thunk";
import LastedProduct from "../../components/LastestProducts/LastedProduct";
import "./ProductDetail.scss";

function ProductDetail() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const idProduct = parseInt(location.pathname.split("/")[2]);
  const { product } = useSelector((state) => state.products);
  const { comment } = useSelector((state) => state.comment);
  const [form] = Form.useForm();

  const nowHours = new Date().getMinutes();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dotData = [
    {
      img: product.image,
    },

    {
      img: product.image,
    },

    {
      img: product.image,
    },

    {
      img: product.image,
    },
  ];

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 12,
    },
  };

  const socialData = [
    <TiSocialFacebookCircular
      style={{ fontSize: "2.5rem", color: "#3b5998" }}
    />,
    <TiSocialTwitterCircular
      style={{ fontSize: "2.5rem", color: "#55acee" }}
    />,
    <TiSocialLinkedinCircular
      style={{ fontSize: "2.5rem", color: "#007ab9" }}
    />,
    <TiSocialPinterestCircular
      style={{ fontSize: "2.5rem", color: "#cb2027" }}
    />,
  ];

  const settings = {
    customPaging: function () {
      return (
        <div className='slider-dot'>
          <img src={product.image} alt='slide-product' />
        </div>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const showSlide = () => {
    return dotData.map((item, key) => {
      return (
        <div key={key} className='slide-image'>
          <img className='dot-image' src={item.img} alt='dot-images' />
        </div>
      );
    });
  };

  const showSocial = (data) => {
    return data.map((item, index) => {
      return <li>{item}</li>;
    });
  };

  const handleCreateComment = (values) => {
    const commentValue = { ...values };

    const commentInfor = {
      name_user: commentValue.name,
      createAt: new Date().getMinutes(),
      idProduct: product.id,
      description: commentValue.body_review,
    };

    dispatch(createComment(commentInfor));
    form.resetFields();
    message.success("Create Comment Success");
  };

  const handleChangeQuatity = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = (product) => {
    dispatch(addCartWithQuantity({ product, quantity }));
    message.success("Add Product sucess");
    setQuantity(1);
  };

  const handleAddWishList = (product) => {
    if (isLoggedIn) {
      dispatch(getWishListSuccess(product));
      message.success("Add wishlist success");
    } else {
      message.error("You need login before add wishlist");
    }
  };

  useEffect(() => {
    dispatch(getProductById(idProduct));
  }, [dispatch, idProduct]);

  useEffect(() => {
    dispatch(getCommentByProduct(idProduct));
  }, [dispatch, idProduct]);

  return (
    <section className='product-detail'>
      <Breadcrumb className='product-breakcrumb'>
        <Breadcrumb.Item>
          <Link to={location.pathname.split("")[0]}>HOME</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>
          <Link to='/products'>
            {location.pathname.split("/")[1].toUpperCase()}
          </Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
      </Breadcrumb>

      <Row gutter={[0, 16]} className='product-detail__container'>
        <Col span={12}>
          <div className='product-slide'>
            <Slider {...settings}>{showSlide()}</Slider>
          </div>
        </Col>

        <Col span={12}>
          <div className='product-information'>
            <h3 className='product-name'>{product.name}</h3>

            <p className='product-status'>
              AVAILABLE:{" "}
              <span>
                In stock
                <CheckCircleOutlined />
              </span>
            </p>

            <p className='product-tag'>TAGS: {product.type}</p>

            <p className='product-description'>{product.description}</p>

            <p className='product-price'>${product.price}</p>

            <Row justify='space-around' align='middle'>
              <Col span={3}>
                <InputNumber
                  min={1}
                  value={quantity}
                  size='large'
                  onChange={(e) => {
                    handleChangeQuatity(e);
                  }}
                />
              </Col>

              <Col span={8}>
                <Button
                  className='product-wishlist'
                  block
                  onClick={() => {
                    handleAddWishList(product);
                  }}
                  disabled={isLoggedIn ? false : true}>
                  <HeartOutlined />
                  Add WishList
                </Button>
              </Col>

              <Col span={8}>
                <Button
                  className='product-addCart'
                  block
                  onClick={() => handleAddToCart(product)}>
                  add to cart
                </Button>
              </Col>
            </Row>

            <div className='product-detail__social'>
              <h3>Share with:</h3>
              <ul className='product-detail__share'>
                {showSocial(socialData)}
              </ul>
            </div>
          </div>
        </Col>
      </Row>

      <Row className='product-comment'>
        <div className='list-comment'>
          <List
            className='comment-list'
            header={`${comment.length} replies`}
            itemLayout='horizontal'
            dataSource={comment}
            renderItem={(item) => (
              <li>
                <Comment
                  actions={[
                    <span key='comment-list-reply-to-0'>Reply to</span>,
                  ]}
                  author={item.name_user}
                  avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                  content={item.description}
                  datetime={`${nowHours - item.createAt} hour ago`}
                />
              </li>
            )}
          />
        </div>

        <Divider orientation='left'>Comments</Divider>
        <Form
          {...layout}
          className='product-form'
          name='commnent-form'
          onFinish={handleCreateComment}
          form={form}>
          <Form.Item
            name='name'
            label='FullName'
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
            ]}>
            <Input placeholder='Enter your name' />
          </Form.Item>

          <Form.Item
            name='email'
            label='Email'
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter your email address",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name='review_title'
            label='Review Title'
            rules={[
              {
                required: true,
                message: "Please enter title",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name='body_review'
            label='Body Of Review(1600)'
            rules={[
              {
                required: true,
                message: "Please enter your review",
                min: 0,
                max: 1600,
              },
            ]}>
            <Input.TextArea rows={6} />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              className='submit-review'
              htmlType='submit'
              disabled={isLoggedIn ? false : true}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Row>

      <LastedProduct />
    </section>
  );
}

export default ProductDetail;
