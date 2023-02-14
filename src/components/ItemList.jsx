import React from "react";
import { Link } from "react-router-dom";

function ItemList({ items, onItemClick }) {
  return (
    <ul>
      {items.map((item) => (
        <li className="productCard" key={item.id} onClick={() => onItemClick(item)}>
          <Link to={`/item/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;