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
  const [tax, setTax] = useState('');
  const [tip, setTip] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [total, setTotal] = useState('');

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
  const updateSubtotal = (num) => {
    setSubtotal(num);
  };
  const updateTotal = (num) => {
    setTotal(num);
  };
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

  useEffect(() => {
    // check if every price is filled in
    const subtotalComplete = items.every((item) => item.price);

    // update subtotal
    const subtotalPrice = subtotalComplete
      ? items
          .reduce((sum, item) => {
            return (sum += item.price);
          }, 0)
          .toFixed(2)
      : 'Enter all the prices foo';
    updateSubtotal(subtotalPrice);

    // update total
    const total =
      subtotalComplete && tax && tip
        ? (
            parseFloat(subtotalPrice) +
            parseFloat(tax) +
            parseFloat(tip)
          ).toFixed(2)
        : subtotalComplete
        ? 'Enter all the tax and tips foo'
        : 'Add all prices foo';
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
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
