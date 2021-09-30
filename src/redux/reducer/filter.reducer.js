import { filterType } from "../actionType/actionTypes";

const initialState = {
  _page: 1,
  _limit: 20,
  _sort: "",
  _order: "",
  name_like: "",
};

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case filterType.CHANGE_FILTER_CATEGORY_LV0:
      let newState = { ...state };
      delete newState["hierarchicalCategories.lvl1"];
      return {
        ...newState,
        name_like: "",
        _page: 1,
        "hierarchicalCategories.lvl0": payload,
      };

    case filterType.CHANGE_FILTER_CATEGORY_LV1:
      let newsState = { ...state };
      delete newsState["hierarchicalCategories.lvl0"];
      return {
        ...state,
        name_like: "",
        _page: 1,
        "hierarchicalCategories.lvl1": payload,
      };

    case filterType.CHANGE_FILTER_PAGINATION:
      return {
        ...state,
        name_like: "",
        _page: payload,
      };

    case filterType.CHANGE_FILTER_PRICE:
      return {
        ...state,
        _sort: "price",
        _order: payload,
        name_like: "",
      };

    case filterType.CHANGE_FILTER_SEARCH:
      return {
        ...state,
        _page: 1,
        name_like: payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
