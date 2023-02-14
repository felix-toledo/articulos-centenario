import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => (
  <Link to={`/products/${item.id}`}>
    <p>{item.name}</p>
    <h1>Holaaa</h1>
  </Link>
);

export default Item;