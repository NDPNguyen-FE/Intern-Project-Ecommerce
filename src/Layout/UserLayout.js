import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProductFilter } from "../redux/thunk/product.thunk";
import Header from "../User/components/Header/Header.jsx";
import Footer from "../User/components/Footer/Footer";
import Cart from "../User/components/Cart/Cart";

function UserLayout({ children }) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductFilter(filter));
  }, [filter]);

  return (
    <div className='homePage'>
      <Header />
      {children}
      <Cart />
      <Footer />
    </div>
  );
}

export default UserLayout;
