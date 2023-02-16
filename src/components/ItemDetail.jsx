import React from "react";

function ItemDetail({ item = {} }) {
  console.log(item);
  return (
    <div className="productDetailContainer">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
}

export default ItemDetail;
 