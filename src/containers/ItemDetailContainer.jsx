import React from "react";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = ({ selectedItem }) => {
  return (
    <div>
      {selectedItem ? (
        <ItemDetail item={selectedItem} />
      ) : (
        <p>Please select an item</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;