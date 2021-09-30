import { ShoppingCartOutlined } from "@ant-design/icons";
import Slider from "@ant-design/react-slick";
import { Button, Modal, Tag } from "antd";
import React from "react";
import "./ModalItem.scss";

function ModalItem({ visible, setVisible, product, handleAddToCart }) {
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

  return (
    <div>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
        mask={true}
        width={1000}
        maskStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        className='modal'>
        <div className='modal-detail'>
          <div className='modal-slide'>
            <Slider {...settings}>{showSlide()}</Slider>
          </div>
          <div className='modal-content'>
            <h3 className='modal-title'>{product.name}</h3>
            <span className='modal-weight'>{product.weight} lb</span>
            <p className='modal-description'>{product.description}</p>
            <Tag className='modal-tag' color='green'>
              {product.type}
            </Tag>

            <div className='modal-cart'>
              <p className='modal-price'>${product.price}</p>
              <Button
                className='modal-button'
                shape='round'
                size='medium'
                onClick={() => handleAddToCart(product)}>
                <ShoppingCartOutlined /> Cart
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalItem;
