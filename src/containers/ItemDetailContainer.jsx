import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import products from "../data/products.json";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const { itemId } = useParams();
  console.log("item fuera use " + itemId);

  useEffect(() => {
    console.log("item " + itemId);
    setItem(products.find(item => item.id === Number(itemId)));
  }, [itemId]);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;