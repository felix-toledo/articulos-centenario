import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import products from "../data/products.json";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    let filteredItems = products;
    if (categoryId) {
      filteredItems = filteredItems.filter(
        item => item.categoryId === Number(categoryId)
      );
    }
    setItems(filteredItems);
  }, [categoryId]);

  return <ItemList items={items} />;
}

export default ItemListContainer;