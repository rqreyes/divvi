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

  // item constructor
  function Item(food, price) {
    this.id = uuidv1();
    this.food = food;
    this.price = price;
    this.personIds = [];
  }
  Item.prototype = {
    getSplitPrice() {
      return this.price / this.personIds.length;
    },
  };

  // item handlers
  const addItem = (food, price) => {
    setItems([...items, { id: uuidv1(), food, price: parseFloat(price) }]);
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

  return (
    <ItemContext.Provider
      value={{ items, addItem, removeItem, updateFood, updatePrice }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
