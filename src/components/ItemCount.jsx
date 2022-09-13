import React, { useEffect, useState } from "react";
import "./styles/itemCount.css";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter">
      <button className="btn btn-dark" disabled={count <= 1} onClick={decrease}>
        -
      </button>
      <span className="tamanio"> {count} </span>
      <button
        className="btn btn-dark"
        disabled={count >= stock}
        onClick={increase}
      >
        +
      </button>
      <div>
        <button
          className="btn btn-dark"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
