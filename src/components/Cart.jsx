import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import "../App.css";
import swal from "sweetalert";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: "Nico",
      email: "Nico@gmail.com",
      phone: "3511532651",
      address: "Calle falsa 123",
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => mostrarAlerta(id));
  };

  const mostrarAlerta = (id) => {
    swal({
      title: "¡Gracias por tu compra!",
      text: id,
      icon: "success",
    });
  };

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link className="color" to="/">
          Seguir comprando
        </Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>TOTAL: ${totalPrice()}</p>

      <div className="form">
        <div className="form2">
          <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">
                Correo Electronico
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
          </form>
        </div>
        <button className="btn btn-dark" onClick={handleClick}>
          Realizar compra
        </button>
      </div>
    </>
  );
};

export default Cart;
