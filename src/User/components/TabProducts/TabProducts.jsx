import { Row, Tabs } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../CardItem/CardItem";
import "./TabProduct.scss";

const { TabPane } = Tabs;

function TabProducts() {
  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.products);

  const listProducts = [...allProducts];

  const listTab1 = listProducts.splice(4, 4);
  const listTab2 = listProducts.splice(24, 4);
  const listTab3 = listProducts.splice(17, 4);

  const showDataTab = (data) => {
    return data.map((product, index) => {
      return <CardItem index={index} product={product} lg='6' />;
    });
  };

  return (
    <section className='tabs'>
      <h3 className='tabs-title'>Featured Products</h3>

      <Tabs defaultActiveKey='1' centered style={{ width: "50%" }} type='card'>
        <TabPane tab='New Arrivals' key='1'>
          <Row gutter={[16, 16]}>{showDataTab(listTab1)}</Row>
        </TabPane>

        <TabPane tab='Top Rate' key='2'>
          <Row gutter={[16, 16]}>{showDataTab(listTab2)}</Row>
        </TabPane>

        <TabPane tab='Best Seller' key='3'>
          <Row gutter={[16, 16]}>{showDataTab(listTab3)}</Row>
        </TabPane>
      </Tabs>

      <div className='tabs-image'>
        <img
          src='https://cdn.shopify.com/s/files/1/0527/6880/0966/files/img-6_1920x1920.jpg?v=1610619443'
          alt='tab banner'
        />
      </div>
    </section>
  );
}

export default TabProducts;
