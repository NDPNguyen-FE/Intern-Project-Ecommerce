import { Row, Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../../../assets/404.svg";
import TableAdmin from "../../components/TableAdmin/TableAdmin";
import FilterProducts from "../../components/Filter/FilterProducts/FilterProducts";
import PaginationAdmin from "../../components/PaginationAdmin/PaginationAdmin";
import "./ProductAdmin.scss";

function ProductAdmin() {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.products);
  const { filterProduct } = useSelector((state) => state.products);

  return (
    <>
      <FilterProducts name='Products' />
      {isLoading ? (
        <Spin />
      ) : (
        <Row gutter={16} className='product-admin'>
          {filterProduct.length <= 0 ? (
            <img className='main-notfound' src={NotFound} alt='not found' />
          ) : (
            <TableAdmin />
          )}
        </Row>
      )}

      <PaginationAdmin />
    </>
  );
}

export default ProductAdmin;
