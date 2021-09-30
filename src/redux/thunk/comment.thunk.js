import commentApi from "../../API/commentApi";
import * as actions from "../actions/comment.action";

export const createComment = (payload) => (dispatch) => {
  dispatch(actions.createCommentStart());

  commentApi
    .createComment(payload)
    .then((comment) => {
      dispatch(actions.createCommentSuccess(comment));
    })
    .catch((error) => {
      dispatch(actions.createCommentError(error));
    });
};

export const getCommentByProduct = (payload) => (dispatch) => {
  dispatch(actions.getCommentStart());

  commentApi
    .getCommentByProduct(payload)
    .then((comment) => {
      dispatch(actions.getCommentSuccess(comment.data));
    })
    .catch((error) => {
      dispatch(actions.getCommentError(error));
    });
};
