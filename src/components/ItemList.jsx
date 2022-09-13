import React from "react";
import Item from "./Item";

const ItemList = ({ data = [] }) => {
  return data.map((producto) => <Item Key={producto.id} info={producto} />);
};

export default ItemList;
