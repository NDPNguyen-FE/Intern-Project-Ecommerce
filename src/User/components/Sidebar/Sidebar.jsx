import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilterCategoryLv0,
  changeFilterCategoryLv1,
} from "../../../redux/actions/filter.action";
import "./Sidebar.scss";

function Sidebar() {
  const dispatch = useDispatch();
  const [activeLvl0, setActiveLvl0] = useState(null);
  const [activeLvl1, setActiveLvl1] = useState(null);

  const { allProducts } = useSelector((state) => state.products);

  const getCategories = () => {
    let allCategories = {};

    for (let category of allProducts) {
      const { lvl0, lvl1 } = category.hierarchicalCategories;
      if (!allCategories[lvl0]) {
        allCategories[lvl0] = {
          name: lvl0,
          children: {},
        };
      }

      if (!lvl1) continue;

      let categoryLvl1 = lvl1.split("> ")[1];

      allCategories[lvl0].children[categoryLvl1] = categoryLvl1;
    }

    return allCategories;
  };

  const handleGetCategoryLvl0 = (categoryName, e) => {
    e.preventDefault();
    setActiveLvl0(categoryName);
    setActiveLvl1(null);
    dispatch(changeFilterCategoryLv0(categoryName));
  };

  const handleGetCategoryLvl1 = (categoryNameLvl0, categoryNameLvl1, e) => {
    e.preventDefault();
    setActiveLvl0(categoryNameLvl0);
    setActiveLvl1(categoryNameLvl1);
    dispatch(
      changeFilterCategoryLv1(`${categoryNameLvl0} > ${categoryNameLvl1}`)
    );
  };

  const showCategory = () => {
    let categories = getCategories();

    let categoriesView = Object.keys(categories).map((product, key) => {
      const { name, children } = categories[product];
      return (
        <div className='sidebar__list' key={key}>
          <p
            className={`sidebar__item  ${name === activeLvl0 ? "active" : ""}`}
            onClick={(e) => handleGetCategoryLvl0(name, e)}>
            {name}
          </p>

          <span className='sidebar__icon'>
            {name === activeLvl0 ? <DownOutlined /> : <RightOutlined />}
          </span>

          {Object.keys(children).length > 0 && (
            <div className='sidebar__sub'>
              {Object.keys(children).map((item, key) => {
                return (
                  <div
                    className={`sidebar__text ${
                      children[item] === activeLvl1 ? "sub--active" : ""
                    }`}
                    onClick={(e) =>
                      handleGetCategoryLvl1(name, children[item], e)
                    }
                    key={key}>
                    <span>{children[item]}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    });

    return categoriesView;
  };

  return <div className='sidebar'>{showCategory()}</div>;
}

export default Sidebar;
