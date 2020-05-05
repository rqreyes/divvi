import React, { createContext, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

export const ItemContext = createContext<ItemContextType | undefined>(
  undefined
);

// type properties
interface ItemContextProps {
  children: ReactNode;
}

const ItemContextProvider: React.FC<ItemContextProps> = ({ children }) => {
  // item constructor
  class Item {
    id: string;
    food: string;
    price: string;
    personIds: string[];

    constructor() {
      this.id = uuidv4();
      this.food = '';
      this.price = '';
      this.personIds = [];
    }
    get splitPrice() {
      return parseFloat(this.price) / this.personIds.length;
    }
  }

  // state
  const [items, setItems] = useState<ItemType[]>([new Item()]);
  const [itemsSubtotal, setItemsSubtotal] = useState(0);
  const [tax, setTax] = useState('');
  const [tip, setTip] = useState('');
  const [tipPercent, setTipPercent] = useState(0);
  const [itemsTotal, setItemsTotal] = useState(0);

  // item handlers
  const addItem = () => setItems([...items, new Item()]);
  const removeItem = (id: string) =>
    setItems(items.filter((item) => item.id !== id));
  const updateFood = (id: string, food: string) => {
    const itemsCopy = [...items];
    itemsCopy.find((item) => item.id === id)!.food = food;

    setItems(itemsCopy);
  };
  const updatePrice = (id: string, price: string) => {
    const itemsCopy = [...items];
    itemsCopy.find((item) => item.id === id)!.price = price || '';

    setItems(itemsCopy);
  };

  // personIds array handlers
  const addCurrItemPersonId = (itemId: string, currPersonId: string) => {
    const itemsCopy = [...items];
    itemsCopy.find((item) => item.id === itemId)!.personIds.push(currPersonId);

    setItems(itemsCopy);
  };
  const removeCurrItemPersonId = (itemId: string, currPersonId: string) => {
    const itemsCopy = [...items];
    const currItemDetails = itemsCopy.find((item) => item.id === itemId)!;
    currItemDetails.personIds = currItemDetails.personIds.filter(
      (personId) => personId !== currPersonId
    );

    setItems(itemsCopy);
  };
  const removeItemsPersonId = (id: string) => {
    const itemsCopy = [...items];
    itemsCopy.forEach((item) => {
      item.personIds = item.personIds.filter((personId) => personId !== id);
    });

    setItems(itemsCopy);
  };

  useEffect(() => {
    // update items subtotal
    const itemsSubtotalPrice = items.reduce((sum, item) => {
      return (sum += parseFloat(item.price) || 0);
    }, 0);

    setItemsSubtotal(itemsSubtotalPrice);

    // update tip amount
    if (itemsSubtotalPrice && tipPercent) {
      const updatedTip = (itemsSubtotalPrice * tipPercent).toFixed(2);

      setTip(updatedTip);
    }
  }, [items, tipPercent]);

  useEffect(() => {
    // update total
    const totalPrice =
      itemsSubtotal + (tax ? parseFloat(tax) : 0) + (tip ? parseFloat(tip) : 0);

    setItemsTotal(totalPrice);
  }, [itemsSubtotal, tax, tip]);

  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateFood,
        updatePrice,
        itemsSubtotal,
        tax,
        setTax,
        tip,
        setTip,
        tipPercent,
        setTipPercent,
        itemsTotal,
        addCurrItemPersonId,
        removeCurrItemPersonId,
        removeItemsPersonId,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
