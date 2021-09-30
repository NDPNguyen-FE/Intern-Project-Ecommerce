import { commentType } from "../actionType/actionTypes";

const innitialState = {
  comments: {},
  comment: [],
  isLoading: false,
  totalComments: 0,
  error: null,
};

const commentReducer = (state = innitialState, { type, payload }) => {
  switch (type) {
    case commentType.CREATE_COMMENT_START: {
      return {
        ...state,
        isLoading: true,
        comments: {},
      };
    }

    case commentType.CREATE_COMMENT_SUCCESS: {
      state.comment.push(payload);
      return {
        ...state,
        isLoading: false,
        comments: { ...payload },
      };
    }

    case commentType.CREATE_COMMENT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case commentType.GET_COMMENT_BY_PRODUCT_START: {
      return {
        ...state,
        isLoading: true,
        comment: [],
      };
    }

    case commentType.GET_COMMENT_BY_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        comment: [...payload],
      };
    }

    case commentType.GET_COMMENT_BY_PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default commentReducer;
