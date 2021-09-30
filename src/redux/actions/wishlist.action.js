import { wishlistType } from "../actionType/actionTypes";

export const getWishListSuccess = (payload) => ({
  type: wishlistType.GET_WISHLIST,
  payload: payload,
});

export const removeWishListSuccess = (payload) => ({
  type: wishlistType.REMOVE_WISHLIST,
  payload: payload,
});
