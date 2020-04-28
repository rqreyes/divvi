// modules
declare module 'react-scroll';

// context type definitions
type EasterEggContextType = {
  easterEgg: boolean;
  updateEasterEgg: () => void;
};

type ItemContextType = {
  items: ItemType[];
  addItem: () => void;
  removeItem: (id: string) => void;
  updateFood: (id: string, food: string) => void;
  updatePrice: (id: string, price: string) => void;
  tax: string;
  updateTax: (num: string) => void;
  tip: string;
  updateTip: (num: string) => void;
  tipPercent: number;
  updateTipPercent: (num: number) => void;
  subtotal: number;
  updateSubtotal: (num: number) => void;
  total: number;
  updateTotal: (num: number) => void;
  addCurrItemPersonId: (itemId: string, currPersonId: string) => void;
  removeCurrItemPersonId: (itemId: string, currPersonId: string) => void;
  removeItemsPersonId: (id: string) => void;
};

type PersonContextType = {
  persons: PersonType[];
  addPerson: () => void;
  removePerson: (id: string) => void;
  updatePerson: (id: string, name: string) => void;
  currPersonId: string;
  updateCurrPersonId: (id: string) => void;
  addCurrPersonItemId: (id: string) => void;
  removeCurrPersonItemId: (id: string) => void;
  removePersonsItemId: (id: string) => void;
  updatePersonTotal: (id: string, total: number) => void;
};

type ItemType = {
  id: string;
  food: string;
  price: string;
  personIds: string[];
};

type PersonType = {
  id: string;
  name: string;
  itemIds: string[];
  total: number;
};

// component type definitions
type UpdateThemeType = () => void;
