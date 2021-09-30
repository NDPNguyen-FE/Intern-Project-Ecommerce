import { orderType } from "../actionType/actionTypes";

const initialState = {
  isLoading: false,
  orderList: {},
  orderFilter: [],
  error: null,
  status: "",
};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case orderType.CREATE_ORDER_START: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case orderType.CREATE_ORDER_SUCCESS: {
      localStorage.removeItem("cart");
      return {
        ...state,
        isLoading: false,
        orderList: { ...payload.data },
        status: "Order_Success",
      };
    }

    case orderType.CREATE_ORDER_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case orderType.GET_ALL_ORDER_START: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case orderType.GET_ALL_ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        orderList: payload.data,
      };
    }

    case orderType.GET_ALL_ORDER_ERROR: {
      return {
        ...state,
        orderList: {},
        isLoading: false,
      };
    }

    case orderType.GET_ORDER_BY_ID_SUCCESS: {
      return {
        ...state,
        orderFilter: [...payload],
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default orderReducer;
