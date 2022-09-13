import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "../App.css";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <div className="toparticulo">
      <div className="card">
        <img className="card-img-top" src={data.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.desc}</p>
          <p className="card-title">${data.price}</p>
          {goToCart ? (
            <Link className="color" to="/cart">
              Finalizar compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          )}
        </div>
        <Link className="color" to="/">
          Seguir comprando
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
