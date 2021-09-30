import { ShopOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";

function Banner() {
  return (
    <div className='banner'>
      <div className='banner__container'>
        <div className='banner__content'>
          <h2 className='banner__title'>Groceries Delivered in 90 Minute</h2>
          <p className='banner__sub'>
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </p>
        </div>

        <div className='banner__button'>
          <Link to='/products'>
            <Button size='large'>
              {" "}
              <ShopOutlined /> Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
