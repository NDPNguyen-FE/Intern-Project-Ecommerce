import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../redux/thunk/product.thunk";
import CardItem from "../CardItem/CardItem";
import "./CardShop.scss";

function CardShop() {
  const dispatch = useDispatch();

  const { filterProduct } = useSelector((state) => state.products);

  const [id, setId] = useState("");

  useEffect(() => dispatch(getProductById(id)), [id]);

  return filterProduct.map((products, key) => {
    return (
      <>
        <CardItem index={key} product={products} lg='4' />
      </>
    );
  });
}

export default CardShop;
