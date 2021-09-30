import { Pagination } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductFilter } from "../../../redux/thunk/product.thunk";
import "./PaginationAdmin.scss";

function PaginationAdmin() {
  const dispatch = useDispatch();

  const { pagination } = useSelector((state) => state.products);

  const handleChangePage = (currentPage, currentSize) => {
    dispatch(getProductFilter({ _page: currentPage, _limit: currentSize }));
  };

  return (
    <div className='pagination-admin'>
      <Pagination
        current={pagination.current}
        defaultPageSize='20'
        total={pagination.total}
        onChange={handleChangePage}
      />
    </div>
  );
}

export default PaginationAdmin;
