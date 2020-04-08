import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const ItemContext = createContext();

const ItemContextProvider = props => {
  const [items, setItems] = useState([
    { id: 1, name: 'ramen', price: 1.99 },
    { id: 2, name: 'sushi', price: 2.99 },
    { id: 3, name: 'tacos', price: 3.99 }
  ]);

  const addItem = (name, price) => {
    setItems([...items, { id: uuidv1(), name, price: parseFloat(price) }]);
  };
  const removeItem = id => {
    setItems(items.filter(item => item.id !== id));
  };
  const updateName = (id, name) => {
    const itemsCopy = [...items];
    itemsCopy.find(item => item.id === id).name = name;

    setItems(itemsCopy);
  };
  const updatePrice = (id, price) => {
    const itemsCopy = [...items];
    itemsCopy.find(item => item.id === id).price = parseFloat(price) || '';

    setItems(itemsCopy);
  };

  return (
    <ItemContext.Provider
      value={{ items, addItem, removeItem, updateName, updatePrice }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
