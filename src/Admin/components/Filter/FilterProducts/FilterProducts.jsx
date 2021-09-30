import { Col, Input, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { changeFilterSearch } from "../../../../redux/actions/filter.action";
import "./FilterProducts.scss";
// import changeFilterSearch from "../../../../redux/actions/filter.action";

const { Search } = Input;

function FilterProducts({ name }) {
  const dispatch = useDispatch();

  const onSearch = (values) => {
    dispatch(changeFilterSearch(values.target.value));
  };

  return (
    <div className='filter-product'>
      <Row>
        <Col span={6}>
          <h3>{name}</h3>
        </Col>
        <Col span={18}>
          <Search
            placeholder='Search name Product'
            onChange={onSearch}
            size='large'
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default FilterProducts;
