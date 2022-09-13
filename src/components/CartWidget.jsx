import React from "react";
import { useCartContext } from "../context/CartContext";
import "../App.css";

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <div className="cartIconContainer">
      <div className="item">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      <div className="item">
        <span className="cartIconTotal">{totalProducts() || ""}</span>
      </div>
    </div>
  );
};

export default CartWidget;
