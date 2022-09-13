import React from "react";
import { useCartContext } from "../context/CartContext";
import "./styles/itemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="itemCart">
      <img src={product.image} alt={product.title} />
      <div>
        <p> {product.title}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio Unitario: {product.price}</p>
        <p>Subtotal: ${product.quantity * product.price}</p>
        <button
          className="btn btn-dark"
          onClick={() => removeProduct(product.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
