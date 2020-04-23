import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { useEffect } from 'react';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  const [tax, setTax] = useState('');
  const [tip, setTip] = useState('');
  const [tipPercent, setTipPercent] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  // item constructor
  function Item(food, price) {
    this.id = uuidv1();
    this.food = food;
    this.price = price;
    this.personIds = [];
    Object.defineProperties(this, {
      splitPrice: {
        get: () => this.price / this.personIds.length,
      },
    });
  }

  // item handlers
  const addItem = (food, price) => {
    if (!food) {
      food = `Item ${count}`;
      setCount(count + 1);
    }

    if (!price) {
      price = 0;
    }

    setItems([...items, new Item(food, parseFloat(price).toFixed(2))]);
  };
  const removeItem = (id) => setItems(items.filter((item) => item.id !== id));
  const updateFood = (id, food) => {
    const itemsCopy = [...items];
    itemsCopy.find((item) => item.id === id).food = food;

    setItems(itemsCopy);
  };
  const updatePrice = (id, price) => {
    const itemsCopy = [...items];
    itemsCopy.find((item) => item.id === id).price = price || '';

    setItems(itemsCopy);
  };

  // total handlers
  const updateTax = (num) => setTax(num);
  const updateTip = (num) => setTip(num);
  const updateTipPercent = (num) => setTipPercent(num);
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
      return (sum += parseFloat(item.price) || 0);
    }, 0);

    updateSubtotal(subtotalPrice);

    // update tip amount
    if (tipPercent) {
      const updatedTip = (subtotalPrice * tipPercent).toFixed(2);

      updateTip(updatedTip);
    }
  }, [items, tipPercent]);

  useEffect(() => {
    // update total
    const totalPrice =
      subtotal + (tax ? parseFloat(tax) : 0) + (tip ? parseFloat(tip) : 0);

    updateTotal(totalPrice);
  }, [subtotal, tax, tip]);

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
        tipPercent,
        updateTipPercent,
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
