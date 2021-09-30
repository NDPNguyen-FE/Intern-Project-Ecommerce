import { Pagination } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductFilter } from "../../../redux/thunk/product.thunk";
import "./Pagination.scss";

function PaginationPage() {
  const dispatch = useDispatch();

  const { pagination } = useSelector((state) => state.products);

  const handleChangePage = (currentPage, currentSize) => {
    dispatch(getProductFilter({ _page: currentPage, _limit: currentSize }));
  };

  return (
    <div className='pagination'>
      {
        <Pagination
          current={pagination.current}
          defaultPageSize='20'
          total={pagination.total}
          onChange={handleChangePage}
        />
      }
    </div>
  );
}

export default PaginationPage;
