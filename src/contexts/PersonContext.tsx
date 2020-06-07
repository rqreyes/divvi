import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const PersonContext = createContext<PersonContextType | undefined>(
  undefined
);

// type properties
interface ItemContextProps {
  children: ReactNode;
}

const PersonContextProvider: React.FC<ItemContextProps> = ({ children }) => {
  // person constructor
  class Person {
    id: string;
    name: string;
    itemIds: string[];
    total: number;

    constructor(id?: string) {
      this.id = id || uuidv4();
      this.name = '';
      this.itemIds = [];
      this.total = 0;
    }
  }

  // state
  const [persons, setPersons] = useState<PersonType[]>([new Person('1')]);
  const [currPersonId, setCurrPersonId] = useState('');
  const [personsTotal, setPersonsTotal] = useState(0);

  // person handlers
  const addPerson = () => setPersons([...persons, new Person()]);
  const removePerson = (id: string) =>
    setPersons(persons.filter((person) => person.id !== id));
  const updatePerson = (id: string, name: string) => {
    setPersons(
      persons.map((person) => (person.id === id ? { ...person, name } : person))
    );
  };

  // itemIds array handlers
  const addCurrPersonItemId = (id: string) => {
    setPersons(
      persons.map((person) =>
        person.id === currPersonId
          ? { ...person, itemIds: [...person.itemIds, id] }
          : person
      )
    );
  };
  const removeCurrPersonItemId = (id: string) => {
    setPersons(
      persons.map((person) =>
        person.id === currPersonId
          ? {
              ...person,
              itemIds: person.itemIds.filter((itemId) => itemId !== id),
            }
          : person
      )
    );
  };
  const removePersonsItemId = (id: string) => {
    setPersons(
      persons.map((person) => ({
        ...person,
        itemIds: person.itemIds.filter((itemId) => itemId !== id),
      }))
    );
  };

  // person total handler
  const updatePersonTotal = (id: string, total: number) => {
    setPersons(
      persons.map((person) =>
        person.id === id ? { ...person, total } : person
      )
    );
  };

  useEffect(() => {
    // update persons total
    const personsTotalPrice = persons.reduce((total, person) => {
      return (total += person.total);
    }, 0);

    setPersonsTotal(personsTotalPrice);
  }, [persons]);

  return (
    <PersonContext.Provider
      value={{
        persons,
        addPerson,
        removePerson,
        updatePerson,
        currPersonId,
        setCurrPersonId,
        addCurrPersonItemId,
        removeCurrPersonItemId,
        removePersonsItemId,
        updatePersonTotal,
        personsTotal,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
