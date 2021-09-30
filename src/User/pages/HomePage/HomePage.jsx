import React from "react";
import Banner from "../../components/Banner/Banner";
import BigSale from "../../components/BigSale/BigSale";
import Carousel from "../../components/Carousel/Carousel";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import LastedProduct from "../../components/LastestProducts/LastedProduct";
import TabProducts from "../../components/TabProducts/TabProducts";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <Banner />
      <Carousel />
      <LastedProduct />
      <BigSale />
      <ChooseUs />
      <TabProducts />
    </>
  );
}

export default HomePage;
