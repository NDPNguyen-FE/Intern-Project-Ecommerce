import { commentType } from "../actionType/actionTypes";

export const createCommentStart = () => ({
  type: commentType.CREATE_COMMENT_START,
});

export const createCommentSuccess = (payload) => ({
  type: commentType.CREATE_COMMENT_SUCCESS,
  payload: payload,
});

export const createCommentError = (payload) => ({
  type: commentType.CREATE_COMMENT_ERROR,
  payload: payload,
});

export const getCommentStart = () => ({
  type: commentType.GET_COMMENT_BY_PRODUCT_START,
});

export const getCommentSuccess = (payload) => ({
  type: commentType.GET_COMMENT_BY_PRODUCT_SUCCESS,
  payload: payload,
});

export const getCommentError = (payload) => ({
  type: commentType.GET_COMMENT_BY_PRODUCT_ERROR,
  payload: payload,
});
