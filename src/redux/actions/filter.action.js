import { filterType } from "../actionType/actionTypes";

export const changeFilterCategoryLv0 = (categorylv0) => ({
  type: filterType.CHANGE_FILTER_CATEGORY_LV0,
  payload: categorylv0,
});

export const changeFilterCategoryLv1 = (categorylv1) => ({
  type: filterType.CHANGE_FILTER_CATEGORY_LV1,
  payload: categorylv1,
});

export const changeFilterSearch = (keys) => ({
  type: filterType.CHANGE_FILTER_SEARCH,
  payload: keys,
});

export const changeFilterPagination = (page) => ({
  type: filterType.CHANGE_FILTER_PAGINATION,
  payload: page,
});

export const changeFilterByPrice = (price) => ({
  type: filterType.CHANGE_FILTER_PRICE,
  payload: price,
});
