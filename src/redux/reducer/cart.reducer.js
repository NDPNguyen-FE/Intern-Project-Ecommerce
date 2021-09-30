import { cartType } from "../actionType/actionTypes";

const initialState = {
  totalCart: 0,
  cart: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartType.ADD_TO_CART: {
      const product = payload;
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const indexProduct = cart.findIndex((cart) => cart.id === product.id);

      if (indexProduct !== -1) {
        cart[indexProduct].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        totalCart: cart.length,
        cart: cart,
      };
    }

    case cartType.ADD_CART_WITH_QUANTITY: {
      const { product, quantity } = payload;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const indexProduct = cart.findIndex((cart) => cart.id === product.id);

      if (indexProduct !== -1) {
        cart[indexProduct].quantity += quantity;
      } else {
        cart.push({ ...product, quantity: quantity });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      return {
        totalCart: cart.length,
        cart: cart,
      };
    }

    case cartType.CHANGE_QUANTITY_CART: {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const indexChange = cart.findIndex((cart) => cart.id === payload.id);

      cart[indexChange].quantity = payload.quantity;

      localStorage.setItem("cart", JSON.stringify(cart));

      return {
        ...state,
        cart: cart,
      };
    }

    case cartType.REMOVE_FROM_CART: {
      const product = payload;
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart = cart.filter((cart) => cart.id !== product.id);

      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        totalCart: cart.length,
        cart: cart,
      };
    }

    default: {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      return {
        totalCart: cart.length,
        cart: cart,
      };
    }
  }
};

export default cartReducer;
