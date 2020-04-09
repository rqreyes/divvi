import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const PersonContext = createContext();

const PersonContextProvider = (props) => {
  const [persons, setPersons] = useState([
    {
      id: '1',
      name: 'marshawty',
      itemIds: ['1', '3'],
      balance: 0,
    },
    {
      id: '2',
      name: 'ranzaddy',
      itemIds: ['1', '2'],
      balance: 0,
    },
  ]);

  // person constructor
  function Person(name) {
    this.id = uuidv1();
    this.name = name;
    this.itemIds = [];
    this.balance = 0;
  }

  // person handlers
  const addPerson = (name) => {
    setPersons([...persons, new Person(name)]);
  };
  const removePerson = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
  };
  const updatePerson = (id, name) => {
    const personsCopy = [...persons];
    personsCopy.find((person) => person.id === id).name = name;

    setPersons(personsCopy);
  };

  return (
    <PersonContext.Provider
      value={{ persons, addPerson, removePerson, updatePerson }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
