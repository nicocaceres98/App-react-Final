import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

const Item = ({ info }) => {
  return (
    <div className="toparticulo2">
      <nav className="card">
        <img className="card-img-top" src={info.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{info.title}</h5>
          <p className="card-text fs-2">${info.price}</p>
          <Link to={`/detalle/${info.id}`} className="btn btn-primary">
            Detalle
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Item;
