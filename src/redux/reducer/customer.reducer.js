import { customerType } from "../actionType/actionTypes";

const initialState = {
  isLoading: false,
  status: "",
  users: {},
  user: [],
};

const customerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case customerType.CREAT_CUSTOMER_START: {
      return {
        ...state,
        isLoading: true,
        status: "",
      };
    }

    case customerType.CREAT_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        status: "Register_Success",
      };
    }

    case customerType.CREAT_CUSTOMER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        status: "Register_Failure",
      };
    }

    case customerType.UPDATE_CUSTOMER_START: {
      return {
        ...state,
        isLoading: true,
        status: "",
      };
    }

    case customerType.UPDATE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        status: "Update_Success",
      };
    }

    case customerType.UPDATE_CUSTOMER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        status: "Update_Failure",
      };
    }

    case customerType.GET_ALL_CUSTOMER_START: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case customerType.GET_ALL_CUSTOMER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        users: payload.data,
      };
    }

    case customerType.GET_ALL_CUSTOMER_ERROR: {
      return {
        ...state,
        isLoading: false,
        users: {},
      };
    }

    default:
      return state;
  }
};

export default customerReducer;
