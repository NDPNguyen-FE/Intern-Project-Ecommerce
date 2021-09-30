import { Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { changeFilterSearch } from "../../../redux/actions/filter.action";
import "./Search.scss";

const { Search } = Input;

function SearchInput() {
  const dispatch = useDispatch();

  const onSearch = (values) => {
    dispatch(changeFilterSearch(values.target.value));
  };

  return (
    <div className='search'>
      <Search
        placeholder='Search your products from here'
        allowClear
        enterButton='Search'
        size='large'
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchInput;
