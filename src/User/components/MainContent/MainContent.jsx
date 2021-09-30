import { Row, Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../../../assets/404.svg";
import CardShop from "../CardShop/CardShop";
import PaginationPage from "../Pagination/Pagination";
import Sort from "../Sort/Sort";
import "./MainContent.scss";

function MainContent() {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.products);
  const { filterProduct } = useSelector((state) => state.products);

  return (
    <div className='main-content'>
      <Sort />

      {isLoading ? (
        <Spin />
      ) : (
        <Row gutter={[16, 16]}>
          {filterProduct.length <= 0 ? (
            <img className='main-notfound' src={NotFound} alt='not found' />
          ) : (
            <CardShop />
          )}
        </Row>
      )}

      <PaginationPage />
    </div>
  );
}

export default MainContent;
