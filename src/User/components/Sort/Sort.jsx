import React from "react";
import { useDispatch } from "react-redux";
import { changeFilterByPrice } from "../../../redux/actions/filter.action";
import SearchInput from "../Search/Search";
import "./Sort.scss";

function Sort() {
  const dispatch = useDispatch();

  const handleChangePage = (e) => {
    const value = e.target.value;
    dispatch(changeFilterByPrice(value));
  };

  return (
    <div className='sort'>
      <div className='sort__container'>
        <SearchInput />
        <div className='sort__list'>
          <label htmlFor='price'>Sort by </label>
          <select id='price' onChange={(e) => handleChangePage(e)}>
            <option value=''>Featured</option>
            <option value='asc'>Price asc</option>
            <option value='desc'>Price desc</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Sort;
