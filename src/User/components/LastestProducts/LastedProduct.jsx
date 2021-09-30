import { Button, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import "./LastedProduct.scss";

function LastedProduct() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.products);

  const allList = [...allProducts];
  const lastedList = allList.splice(0, 8);

  const showLastedProduct = (data) => {
    return data.map((product, index) => {
      return <CardItem index={index} product={product} lg='6' />;
    });
  };

  return (
    <section className='lastest'>
      <h3 className='lastest-title'>Lastest Products</h3>
      <Row className='lastest-product' gutter={[32, 32]}>
        {showLastedProduct(lastedList)}
      </Row>

      <div className='lastest-button'>
        <Link to='/products'>
          <Button> View All</Button>
        </Link>
      </div>
    </section>
  );
}

export default LastedProduct;
