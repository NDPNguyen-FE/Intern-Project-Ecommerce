import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";
import commentReducer from "./comment.reducer";
import customerReducer from "./customer.reducer";
import filterReducer from "./filter.reducer";
import orderReducer from "./order.reducer";
import productReducer from "./product.reducer";
import wishlistReducer from "./wishlist.reducer";

const rootReducer = () =>
  combineReducers({
    products: productReducer,
    filters: filterReducer,
    cart: cartReducer,
    customer: customerReducer,
    auth: authReducer,
    order: orderReducer,
    comment: commentReducer,
    wishlist: wishlistReducer,
  });

export default rootReducer;
