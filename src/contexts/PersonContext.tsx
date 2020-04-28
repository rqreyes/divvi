import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const PersonContext = createContext<PersonContextType | undefined>(
  undefined
);
const personArray: PersonType[] = [];

const PersonContextProvider = ({ children }: JSX.ElementChildrenAttribute) => {
  const [persons, setPersons] = useState(personArray);
  const [currPersonId, setCurrPersonId] = useState('');

  // person constructor
  class Person {
    id: string;
    name: string;
    itemIds: string[];
    total: number;

    constructor() {
      this.id = uuidv4();
      this.name = '';
      this.itemIds = [];
      this.total = 0;
    }
  }

  // person handlers
  const addPerson = () => setPersons([...persons, new Person()]);
  const removePerson = (id: string) =>
    setPersons(persons.filter((person) => person.id !== id));
  const updatePerson = (id: string, name: string) => {
    const personsCopy = [...persons];
    personsCopy.find((person) => person.id === id)!.name = name;

    setPersons(personsCopy);
  };

  // itemIds array handlers
  const updateCurrPersonId = (id: string) => setCurrPersonId(id);
  const addCurrPersonItemId = (id: string) => {
    const personsCopy = [...persons];
    personsCopy.find((person) => person.id === currPersonId)!.itemIds.push(id);

    setPersons(personsCopy);
  };
  const removeCurrPersonItemId = (id: string) => {
    const personsCopy = [...persons];
    const currPersonDetails = personsCopy.find(
      (person) => person.id === currPersonId
    )!;
    currPersonDetails.itemIds = currPersonDetails.itemIds.filter(
      (itemId) => itemId !== id
    );

    setPersons(personsCopy);
  };
  const removePersonsItemId = (id: string) => {
    const personsCopy = [...persons];
    personsCopy.forEach((person) => {
      person.itemIds = person.itemIds.filter((itemId) => itemId !== id);
    });

    setPersons(personsCopy);
  };

  // person total handler
  const updatePersonTotal = (id: string, total: number) => {
    const personsCopy = [...persons];
    personsCopy.find((person) => person.id === id)!.total = total;

    setPersons(personsCopy);
  };

  return (
    <PersonContext.Provider
      value={{
        persons,
        addPerson,
        removePerson,
        updatePerson,
        currPersonId,
        updateCurrPersonId,
        addCurrPersonItemId,
        removeCurrPersonItemId,
        removePersonsItemId,
        updatePersonTotal,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
