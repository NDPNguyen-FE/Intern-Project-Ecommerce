import {
  EyeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Card, Col, message } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../../../redux/actions/cart.action";
import { getWishListSuccess } from "../../../redux/actions/wishlist.action";
import ModalItem from "../ModalItem/ModalItem";
import "./CardItem.scss";

function CardItem({ index, product, lg }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [visible, setVisible] = useState(false);

  const handleAddWishList = (product) => {
    if (isLoggedIn) {
      dispatch(getWishListSuccess(product));
      message.success("Add wishlist success");
    } else {
      message.error("You need login before add wishlist");
    }
  };

  const handleDirectPage = (id) => {
    history.push(`/product/${id}`);
  };

  const handleAddToCart = (products) => {
    dispatch(addToCart(products));
    message.success("Add to cart success");
  };

  return (
    <Col
      key={index}
      xs={{ span: 24 }}
      md={{ span: 12 }}
      lg={{ span: lg }}
      id={product.id}>
      <Card
        className='card'
        cover={
          <img
            src={product.image}
            alt='product'
            onClick={() => {
              setVisible(true);
            }}
          />
        }
        actions={[
          `$${product.price}`,
          <EyeOutlined onClick={() => handleDirectPage(product.id)} />,
          <HeartOutlined onClick={() => handleAddWishList(product)} />,
          <ShoppingCartOutlined
            onClick={() => {
              handleAddToCart(product);
            }}
          />,
        ]}>
        <Meta title={product.name} description={`${product.weight}lb`} />
      </Card>

      {visible && (
        <ModalItem
          visible={visible}
          setVisible={setVisible}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      )}
    </Col>
  );
}

export default CardItem;
