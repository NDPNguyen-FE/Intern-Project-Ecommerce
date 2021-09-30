import login from "../../API/authApi";
import * as actions from "../actions/auth.action";

export const actionLogin =
  ({ email, password }) =>
  (dispatch) => {
    dispatch(actions.loginStart());

    login
      .customerLogin(email, password)
      .then((payload) => {
        dispatch(actions.loginSuccess(payload));
      })
      .catch(() => {
        dispatch(actions.loginFailure());
      });
  };
