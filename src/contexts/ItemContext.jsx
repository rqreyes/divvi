import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { useEffect } from 'react';

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
      personIds: ['2'],
      get splitPrice() {
        return this.price / this.personIds.length;
      },
    },
    {
      id: '3',
      food: 'tacos',
      price: 3.99,
      personIds: ['1'],
      get splitPrice() {
        return this.price / this.personIds.length;
      },
    },
  ]);
  const [count, setCount] = useState(1);
  const [tax, setTax] = useState('');
  const [tip, setTip] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  // item constructor
  function Item(food, price) {
    this.id = uuidv1();
    this.food = food;
    this.price = parseFloat(price);
    this.personIds = [];
    Object.defineProperties(this, {
      splitPrice: {
        get: () => this.price / this.personIds.length,
      },
    });
  }

  // item handlers
  const addItem = (food, price) => {
    food = food ? food : `Item ${count}`;

    setItems([...items, new Item(food, price)]);
    setCount(count + 1);
  };
  const removeItem = (id) => setItems(items.filter((item) => item.id !== id));
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

  // total handlers
  const updateTax = (num) => setTax(num);
  const updateTip = (num) => setTip(num);
  const updateSubtotal = (num) => setSubtotal(num);
  const updateTotal = (num) => setTotal(num);

  // personIds array handlers
  const addCurrItemPersonId = (itemId, currPersonId) => {
    const itemsCopy = [...items];
    itemsCopy.find((item) => item.id === itemId).personIds.push(currPersonId);

    setItems(itemsCopy);
  };
  const removeCurrItemPersonId = (itemId, currPersonId) => {
    const itemsCopy = [...items];
    const currItemDetails = itemsCopy.find((item) => item.id === itemId);
    currItemDetails.personIds = currItemDetails.personIds.filter(
      (personId) => personId !== currPersonId
    );

    setItems(itemsCopy);
  };
  const removeItemsPersonId = (id) => {
    const itemsCopy = [...items];
    itemsCopy.forEach((item) => {
      item.personIds = item.personIds.filter((personId) => personId !== id);
    });

    setItems(itemsCopy);
  };

  useEffect(() => {
    // update subtotal
    const subtotalPrice = items.reduce((sum, item) => {
      return (sum += item.price || 0);
    }, 0);
    updateSubtotal(subtotalPrice);

    // update total
    const total =
      subtotalPrice + (tax ? parseFloat(tax) : 0) + (tip ? parseFloat(tip) : 0);
    updateTotal(total);
  }, [items, tax, tip]);

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
        subtotal,
        updateSubtotal,
        total,
        updateTotal,
        addCurrItemPersonId,
        removeCurrItemPersonId,
        removeItemsPersonId,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
