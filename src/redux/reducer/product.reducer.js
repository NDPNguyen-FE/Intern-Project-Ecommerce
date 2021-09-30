import { productDetail, productType } from "../actionType/actionTypes";

const initialState = {
  allProducts: [],
  product: {},
  filterProduct: [],
  isLoading: false,
  error: null,
  pagination: {
    current: 1,
    limit: 20,
    total: 0,
  },
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productType.GET_ALL_PRODUCTS_START: {
      return {
        ...state,
        isLoading: true,
        allProducts: [],
        error: null,
      };
    }

    case productType.GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        allProducts: payload.data,
      };
    }

    case productType.GET_ALL_PRODUCTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case productType.GET_FILTER_PRODUCT_START: {
      return {
        ...state,
        isLoading: true,
        filterProduct: [],
        error: null,
      };
    }

    case productType.GET_FILTER_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        filterProduct: payload.data,
        error: null,
        pagination: {
          limit: Number(payload.params._limit),
          current: payload.params._page,
          total: payload.total,
        },
      };
    }

    case productType.GET_FILTER_PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    case productDetail.GET_PRODUCT_DETAILS_START: {
      return {
        ...state,
        isLoading: false,
        product: {},
      };
    }
    case productDetail.GET_PRODUCT_DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        product: payload.data,
      };
    }

    case productDetail.GET_PRODUCT_DETAILS_ERROR: {
      return {
        ...state,
        isLoading: false,
        product: {},
        error: payload,
      };
    }

    case productType.CREATE_PRODUCT_START: {
      return {
        ...state,
        allProducts: [],
        isLoading: true,
      };
    }

    case productType.CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        allProducts: [...payload.data],
        isLoading: false,
      };
    }

    case productType.CREATE_PRODUCT_FAILURE: {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    }

    case productType.UPDATE_PRODUCT_START: {
      return {
        ...state,
        product: [],
        isLoading: true,
      };
    }

    case productType.UPDATE_PRODUCT_SUCCESS: {
      const index = state.filterProduct.findIndex(
        (product) => product.id === payload.data.id
      );
      state.filterProduct.fill(payload.data, index, index + 1);
      return {
        ...state,
        isLoading: false,
      };
    }

    case productType.UPDATE_PRODUCT_ERROR: {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    }

    case productType.DELETE_PRODUCT_BY_ID: {
      const newProduct = state.filterProduct.filter(
        (product) => product.id !== payload
      );

      return {
        ...state,
        filterProduct: newProduct,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
