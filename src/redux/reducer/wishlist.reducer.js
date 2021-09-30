import { wishlistType } from "../actionType/actionTypes";

const initialState = {
  wishlist: [],
  totalWishList: 0,
};

const wishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case wishlistType.GET_WISHLIST: {
      const product = payload;

      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      const indexProduct = wishlist.findIndex(
        (wishlist) => wishlist.id === product.id
      );

      if (indexProduct !== -1) {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        return {
          ...state,
          wishlist: wishlist,
          totalWishList: wishlist.length,
        };
      } else {
        wishlist.push({ ...product });
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      return {
        ...state,
        wishlist: wishlist,
        totalWishList: wishlist.length,
      };
    }

    case wishlistType.REMOVE_WISHLIST: {
      const product = payload;
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      const indexDelete = wishlist.findIndex((item) => item.id === product.id);

      wishlist.splice(indexDelete, 1);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      return {
        ...state,
        wishlist: wishlist,
        totalWishList: wishlist.length,
      };
    }

    default: {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      return {
        ...state,
        wishlist: wishlist,
        totalWishList: wishlist.length,
      };
    }
  }
};

export default wishlistReducer;
