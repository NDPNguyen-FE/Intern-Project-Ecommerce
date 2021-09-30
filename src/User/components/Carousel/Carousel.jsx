import { Col, Row } from "antd";
import React from "react";
import Slider from "react-slick";
import Coupon from "../../../assets/banner-voucher/coupon-price.png";
import Delivery from "../../../assets/banner-voucher/free-shiping.png";
import Gift from "../../../assets/banner-voucher/gift-voucher.png";
import "./Carousel.scss";

const images = [
  {
    src: Coupon,
    alt: "product",
  },
  {
    src: Delivery,
    alt: "product",
  },
  {
    src: Gift,
    alt: "product",
  },
  {
    src: Coupon,
    alt: "product",
  },
  {
    src: Delivery,
    alt: "product",
  },
  {
    src: Gift,
    alt: "product",
  },
];

function Carousel() {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  const showCarousel = (data) => {
    return data.map((item, key) => {
      return (
        <div className='carousel__item' key={key}>
          <img src={item.src} alt={item.alt} />
        </div>
      );
    });
  };

  return (
    <div className='carousel'>
      <Row justify='center'>
        <Col span={23} justify='center'>
          <Slider {...settings}>{showCarousel(images)}</Slider>
        </Col>
      </Row>
    </div>
  );
}

export default Carousel;
