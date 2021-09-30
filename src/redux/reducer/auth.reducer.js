import { authTypes } from "../actionType/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  profile: user || {},
  isAuthenticated: (user && user.isAdmin ? true : false) || false,
  isLoggedIn: user ? true : false,
  isLoading: false,
  status: "",
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authTypes.CUSTOMER_LOGIN_START: {
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        profile: {},
        status: "",
      };
    }

    case authTypes.CUSTOMER_LOGIN_SUCCESS: {
      const profile = payload.user;
      const accessToken = payload.accessToken;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(profile));

      state = {
        profile: profile,
        isAuthenticated: profile.isAdmin,
        isLoggedIn: true,
        isLoading: false,
        status: "Login_Success",
      };

      return { ...state };
    }

    case authTypes.CUSTOMER_LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        profile: {},
        status: "Login_Failure",
      };
    }

    case authTypes.GET_CUSTOMER_PROFILE_START: {
      return {
        ...state,
        profile: {},
        isLoading: true,
        isAuthenticated: false,
      };
    }

    case authTypes.GET_CUSTOMER_PROFILE_SUCCESS: {
      const profile = payload.profile;

      return {
        ...state,
        profile: profile,
        isLoading: false,
        isAuthenticated: profile.isAdmin,
      };
    }

    case authTypes.GET_CUSTOMER_PROFILE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        profile: {},
        isAuthenticated: false,
      };
    }

    case authTypes.CUSTOMER_LOGOUT: {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      localStorage.removeItem("wishlist");

      return {
        ...initialState,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
