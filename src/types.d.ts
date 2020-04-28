// modules
declare module 'uuid' {
  export function v4(): string;
}

// type definitions
type EasterEggContextType = {
  easterEgg: boolean;
  updateEasterEgg: () => void;
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
