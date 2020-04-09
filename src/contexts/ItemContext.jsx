import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [items, setItems] = useState([
    {
      id: '1',
      food: 'ramen',
      price: 1.99,
      personIds: ['1', '2'],
      get splitPrice() {
        return this.price / this.personIds.length;
      },
    },
    {
      id: '2',
      food: 'sushi',
      price: 2.99,
      personIds: ['1'],
      get splitPrice() {
        return this.price / this.personIds.length;
      },
    },
    {
      id: '3',
      food: 'tacos',
      price: 3.99,
      personIds: ['2'],
      get splitPrice() {
        return this.price / this.personIds.length;
      },
    },
    new Item('soup', 10),
  ]);
  const [tax, setTax] = useState('');
  const [tip, setTip] = useState('');

  // item constructor
  function Item(food, price) {
    this.id = uuidv1();
    this.food = food;
    this.price = parseFloat(price);
  }

  Item.prototype.splitPrice = function () {
    return this.price / this.personIds.length;
  };

  // item handlers
  const addItem = (food, price) => {
    setItems([...items, new Item(food, price)]);
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const updateFood = (id, food) => {
    const itemsCopy = [...items];
    itemsCopy.find((item) => item.id === id).food = food;

    setItems(itemsCopy);
  };
  const updatePrice = (id, price) => {
    const itemsCopy = [...items];
    itemsCopy.find((item) => item.id === id).price = parseFloat(price) || '';

    setItems(itemsCopy);
  };
  const updateTax = (num) => {
    setTax(num);
  };
  const updateTip = (num) => {
    setTip(num);
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateFood,
        updatePrice,
        tax,
        updateTax,
        tip,
        updateTip,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
