import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

const ItemContextProvider = props => {
  const [items, setItems] = useState([
    { id: 1, name: 'ramen', price: 1.99 },
    { id: 2, name: 'sushi', price: 2.99 },
    { id: 3, name: 'tacos', price: 3.99 }
  ]);

  return (
    <ItemContext.Provider value={{ items }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
