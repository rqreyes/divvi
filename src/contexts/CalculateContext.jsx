import React, { createContext, useContext, useState } from 'react';
import { ItemContext } from './ItemContext';
import { PersonContext } from './PersonContext';

export const CalculateContext = createContext();

const CalculateProvider = (props) => {
  const { items } = useContext(ItemContext);
  const { persons } = useContext(PersonContext);

  // items per person
  const [personItems, setPersonItems] = useState([
    {
      personId: '1',
      foodIds: ['1', '3'],
      balance: 0,
    },
    {
      personId: '2',
      foodIds: ['1', '2'],
      balance: 0,
    },
  ]);

  // persons per item
  const [itemPersons, setItemPersons] = useState([
    {
      itemId: '1',
      personIds: ['1', '2'],
      get splitPrice() {
        return (
          items.find((item) => item.id === this.itemId).price /
          this.personIds.length
        );
      },
    },
    {
      itemId: '2',
      personIds: ['1'],
      get splitPrice() {
        return (
          items.find((item) => item.id === this.itemId).price /
          this.personIds.length
        );
      },
    },
    {
      itemId: '3',
      personIds: ['2'],
      get splitPrice() {
        return (
          items.find((item) => item.id === this.itemId).price /
          this.personIds.length
        );
      },
    },
  ]);

  return (
    <CalculateContext.Provider value={{ personItems, itemPersons }}>
      {props.children}
    </CalculateContext.Provider>
  );
};

export default CalculateProvider;
