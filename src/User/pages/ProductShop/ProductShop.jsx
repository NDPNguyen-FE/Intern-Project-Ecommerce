import { Row } from "antd";
import React from "react";
import LayoutContent from "../../LayoutContent/LayoutContent";
import "./ProductShop.scss";
import Banner from "../../../assets/banner-shop-1.jpg.webp";

function ProductShop() {
  return (
    <div className='product-shop'>
      <Row className='product-shop__banner'>
        <img src={Banner} alt='product banner' />
      </Row>

      <LayoutContent />
    </div>
  );
}

export default ProductShop;
