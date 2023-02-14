import React, { useState } from "react";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Assume you have an array of items
  const items = [
    { id: 1, name: "Product 1", description: "Description 1", category: "Category 1", price: 9.99 },
    { id: 2, name: "Product 2", description: "Description 2", category: "Category 2", price: 19.99 },
    { id: 3, name: "Product 3", description: "Description 3", category: "Category 3", price: 29.99 },
  ];

  return <ItemList items={items} onItemClick={handleItemClick} />;
};

export default ItemListContainer;

